var React = require('react');
var RecipeApp = require('./recipes/components/RecipeBook');
var RecipeForm = require('./recipes/components/RecipeForm');

React.render(
  <RecipeApp />,
  document.getElementById('recipe-app')
);

React.render(
  <RecipeForm csrf_token={ window.csrf } />,
  document.getElementById('recipe-add')
);