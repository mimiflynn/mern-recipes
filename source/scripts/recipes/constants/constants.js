var keyMirror = require('react/lib/keyMirror');

module.exports = {
  API: 'http://localhost:3000/api',

  ActionTypes: keyMirror({
    RECIPES_LOADED: null,
    LOAD_RECIPES: null,
    RECIPE_DELETED: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
