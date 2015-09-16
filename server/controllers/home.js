var React = require('react');

exports.index = function (req, res) {
  res.render('home/index', {
    title: 'Recipes for you and me',
    isAuthenticated: req.isAuthenticated(),
    user: req.isAuthenticated() ? req.user : {},
    scripts: ['/js/app.js']
  });
};
