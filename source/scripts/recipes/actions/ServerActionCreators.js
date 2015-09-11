var ActionTypes = require('../constants/constants').ActionTypes;
var AppDispatcher = require('../dispatcher/dispatcher');

var ServerActionCreators = {
  loadedRecipes: function (recipes) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECIPES_LOADED,
      recipes: recipes
    });
  },

  deletedRecipe: function (recipe) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECIPE_DELETED,
      recipe: recipe
    });
  }
};

module.exports = ServerActionCreators;
