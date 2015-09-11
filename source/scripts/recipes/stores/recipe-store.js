var AppDispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionTypes = require('../constants/constants').ActionTypes;
var assign = require('react/lib/Object.assign');

var events = new EventEmitter();
var CHANGE_EVENT = 'CHANGE';

var state = {
  recipes: [],
  loaded: false
};

function setState(newState) {
  assign(state, newState);
  events.emit(CHANGE_EVENT);
}

var RecipesStore = {
  addChangeListener: function (fn) {
    events.addListener(CHANGE_EVENT, fn);
  },

  removeChangeListener: function (fn) {
    events.removeListener(CHANGE_EVENT, fn);
  },

  getState: function () {
    return state;
  }
};

RecipesStore.dispatchToken = AppDispatcher.register(function (payload) {
  var action = payload.action;

  if (action.type === ActionTypes.RECIPES_LOADED) {
    setState({
      loaded: true,
      recipes: action.recipes
    });
  }

  if (action.type === ActionTypes.RECIPE_DELETED) {
    var newRecipes = state.recipes.filter(function (recipe) {
      return recipe.id !== action.recipe.id;
    });
    setState({ recipes: newRecipes });
  }
});

module.exports = RecipesStore;
