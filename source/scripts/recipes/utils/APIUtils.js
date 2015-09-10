var xhr = require('../../lib/xhr');
var API = require('../constants/constants').API;
var ActionTypes = require('../constants/constants').ActionTypes;
var ServerActionCreators = require('../actions/ServerActionCreators');

var APIUtils = {
  loadRecipes: function () {
    xhr.getJSON(API + '/recipes', function (err, res) {
      ServerActionCreators.loadedRecipes(res);
    });
  },

  deleteRecipe: function (recipe) {
    xhr.deleteJSON(API + '/recipes/' + recipe.id, function (err, res) {
      ServerActionCreators.deletedRecipe(recipe);
    });
  }
};

module.exports = APIUtils;
