var React = require('react');

var RecipesStore = require('../stores/recipe-store.js');
var ViewActionCreators = require('../actions/ViewActionCreators');

var RecipeList = require('../../../../components/recipes/recipe-list');

module.exports = React.createClass({
  getInitialState: function () {
    return RecipesStore.getState();
  },

  componentDidMount: function () {
    RecipesStore.addChangeListener(this.handleStoreChange);
    ViewActionCreators.loadRecipes();
  },

  componentWillUnmount: function () {
    RecipesStore.removeChangeListener(this.handleStoreChange);
  },

  handleStoreChange: function () {
    this.setState(RecipesStore.getState());
  },

  deleteRecipe: function (recipe) {
    ViewActionCreators.deleteRecipe(recipe);
  },

  render: function () {
    if (this.state.recipes.loaded) {
      return (
        <RecipeList recipes={this.state.recipes} />
      );
    } else {
      return (
        <RecipeList recipes={window.recipes} />
      );
    }
  }
});
