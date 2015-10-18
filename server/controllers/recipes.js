var mongoose = require('mongoose');
var Recipe = mongoose.model('Recipe');
var utils = require('../../lib/utils');
var extend = require('util')._extend;

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
 * ----------- API ----------- *
 */

/**
 * Return all recipes
 */

exports.all = function (req, res) {
  Recipe.find().sort('-created').populate('user', 'name username').exec(function (err, recipe) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot list the recipes'
      });
    }
    res.jsonp(recipe);
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
      isAuthenticated: req.isAuthenticated(),
      recipe: recipe,
      errors: utils.errors(err.errors || err)
    });
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
      isAuthenticated: req.isAuthenticated(),
      recipe: recipe,
      errors: utils.errors(err.errors || err)
    });
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

/**
 * ----------- Server side pages ----------- *
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
        isAuthenticated: req.isAuthenticated(),
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
    isAuthenticated: req.isAuthenticated(),
    recipe: new Recipe({})
  });
};

/**
 * Edit an recipe
 */

exports.edit = function (req, res) {
  res.render('recipes/edit', {
    title: 'Edit ' + req.recipe.title,
    isAuthenticated: req.isAuthenticated(),
    recipe: req.recipe
  });
};


/**
 * Show
 */

exports.show = function (req, res){
  res.render('recipes/show', {
    title: req.recipe.title,
    isAuthenticated: req.isAuthenticated(),
    recipe: req.recipe
  });
};
