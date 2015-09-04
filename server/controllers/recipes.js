
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
var Recipe = mongoose.model('Recipe')
var utils = require('../../lib/utils')
var extend = require('util')._extend

/**
 * Load
 */

exports.load = function (req, res, next, id){
  var User = mongoose.model('User');

  Recipe.load(id, function (err, recipe) {
    if (err) return next(err);
    if (!recipe) return next(new Error('not found'));
    req.recipe = recipe;
    next();
  });
};

/**
 * List
 */

exports.index = function (req, res){
  var page = (req.params.page > 0 ? req.params.page : 1) - 1;
  var perPage = 30;
  var options = {
    perPage: perPage,
    page: page
  };

  Recipe.list(options, function (err, recipes) {
    if (err) return res.render('500');
    Recipe.count().exec(function (err, count) {
      res.render('recipes/index', {
        title: 'Recipes',
        recipes: recipes,
        page: page + 1,
        pages: Math.ceil(count / perPage)
      });
    });
  });
};

/**
 * New recipe
 */

exports.new = function (req, res){
  res.render('recipes/new', {
    title: 'New Recipe',
    recipe: new Recipe({})
  });
};

/**
 * Create an recipe
 * Upload an image
 */

exports.create = function (req, res) {
  var recipe = new Recipe(req.body);
  var images;

  if (typeof req.files !== 'undefined') {
    images = [req.files.image];
  } else {
    images = undefined;
  }

  recipe.user = req.user;
  recipe.uploadAndSave(images, function (err) {
    if (!err) {
      req.flash('success', 'Successfully created recipe!');
      return res.redirect('/recipes/'+recipe._id);
    }
    res.render('recipes/new', {
      title: 'New Recipe',
      recipe: recipe,
      errors: utils.errors(err.errors || err)
    });
  });
};

/**
 * Edit an recipe
 */

exports.edit = function (req, res) {
  res.render('recipes/edit', {
    title: 'Edit ' + req.recipe.title,
    recipe: req.recipe
  });
};

/**
 * Update recipe
 */

exports.update = function (req, res){
  var recipe = req.recipe;
  var images = req.files.image
    ? [req.files.image]
    : undefined;

  // make sure no one changes the user
  delete req.body.user;
  recipe = extend(recipe, req.body);

  recipe.uploadAndSave(images, function (err) {
    if (!err) {
      return res.redirect('/recipes/' + recipe._id);
    }

    res.render('recipes/edit', {
      title: 'Edit Recipe',
      recipe: recipe,
      errors: utils.errors(err.errors || err)
    });
  });
};

/**
 * Show
 */

exports.show = function (req, res){
  res.render('recipes/show', {
    title: req.recipe.title,
    recipe: req.recipe
  });
};

/**
 * Delete an recipe
 */

exports.destroy = function (req, res){
  var recipe = req.recipe;
  recipe.remove(function (err){
    req.flash('info', 'Deleted successfully');
    res.redirect('/recipes');
  });
};
