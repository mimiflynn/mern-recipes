/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var Recipe = mongoose.model('Recipe');

/**
 * List items tagged with a tag
 */

exports.index = function (req, res) {
  var criteria = { tags: req.params.tag };
  var perPage = 5;
  var page = (req.params.page > 0 ? req.params.page : 1) - 1;
  var options = {
    perPage: perPage,
    page: page,
    criteria: criteria
  };

  Recipe.list(options, function(err, recipes) {
    if (err) return res.render('500');
    Recipe.count(criteria).exec(function (err, count) {
      res.render('recipes/index', {
        title: 'Recipes tagged ' + req.params.tag,
        recipes: recipes,
        page: page + 1,
        pages: Math.ceil(count / perPage)
      });
    });
  });
};
