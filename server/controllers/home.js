var mongoose = require('mongoose');
var Recipe = mongoose.model('Recipe');

exports.index = function (req, res) {
  var page = (req.params.page > 0 ? req.params.page : 1) - 1;
  var perPage = 30;
  var options = {
    perPage: perPage,
    page: page
  };

  Recipe.list(options, function (err, recipes) {
    if (err) return res.render('500');
    Recipe.count().exec(function (err, count) {
      res.render('home/index', {
        title: 'Recipes',
        isAuthenticated: req.isAuthenticated(),
        user: req.isAuthenticated() ? req.user : {},
        scripts: ['/js/app.js'],
        recipes: recipes,
        page: page + 1,
        pages: Math.ceil(count / perPage)
      });
    });
  });
};
