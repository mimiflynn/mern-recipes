var ActionTypes = require('../constants/constants').ActionTypes;
var AppDispatcher = require('../dispatcher/dispatcher');
var APIUtils = require('../utils/APIUtils');

var ViewActionCreators = {
  loadRecipes: function () {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_CONTACTS
    });
    APIUtils.loadRecipes();
  },

  deleteRecipe: function (recipe) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.CONTACT_DELETED,
      recipe: recipe
    });
    APIUtils.deleteRecipe(recipe);
  }
};

module.exports = ViewActionCreators;
