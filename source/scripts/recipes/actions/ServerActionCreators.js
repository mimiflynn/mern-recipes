var ActionTypes = require('../constants/constants').ActionTypes;
var AppDispatcher = require('../dispatcher/dispatcher');

var ServerActionCreators = {
  loadedRecipes: function (recipes) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.CONTACTS_LOADED,
      recipes: recipes
    });
  },

  deletedRecipe: function (recipe) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.CONTACT_DELETED,
      recipe: recipe
    });
  }
};

module.exports = ServerActionCreators;
