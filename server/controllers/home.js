var React = require('react');

var ReactApp = React.createFactory(require('../../components/home/index'));

exports.index = function (req, res) {
//  res.render('home/index', {

  var reactHtml = React.renderToString(ReactApp({}));

  res.render('layouts/default', {
    title: 'Recipes for you and me',
    isAuthenticated: req.isAuthenticated(),
    user: req.isAuthenticated() ? req.user : {},
    scripts: ['/js/app.js'],
    children: reactHtml
  });
};
