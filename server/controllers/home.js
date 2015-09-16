var React = require('react');

exports.index = function (req, res) {
  res.render('layouts/default', {
    title: 'Recipes for you and me'
  });
};
