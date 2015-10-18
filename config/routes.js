
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var _ = require('underscore');
var auth = require('./middlewares/authorization');

var home = require('home');
var users = require('users');
var recipes = require('recipes');
var tags = require('tags');
var comments = require('comments');

// Auth Vars

var authOptions = {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: 'Invalid email or password.'
};

var recipeAuth = [auth.requiresLogin, auth.recipe.hasAuthorization];
var commentAuth = [auth.requiresLogin, auth.comment.hasAuthorization];

/**
 * Expose
 */

module.exports = function (app, passport) {

  app.get('/', home.index);

  // recipe routes
  app.param('id', recipes.load);
  app.get('/recipes', recipes.index);
  app.get('/recipes/new', auth.requiresLogin, recipes.new);
  app.get('/recipes/:id', recipes.show);
  app.get('/recipes/:id/edit', recipeAuth, recipes.edit);

  app.get('/api/recipes', recipes.all);
  app.post('/api/recipes', auth.requiresLogin, recipes.create);
  app.put('/api/recipes/:id', recipeAuth, recipes.update);
  app.delete('/api/recipes/:id', recipeAuth, recipes.destroy);

  // comment routes
  app.param('commentId', comments.load);
  app.post('/recipes/:id/comments', auth.requiresLogin, comments.create);
  app.get('/recipes/:id/comments', auth.requiresLogin, comments.create);
  app.delete('/recipes/:id/comments/:commentId', commentAuth, comments.destroy);

  // tag routes
  app.get('/tags/:tag', tags.index);

  // user routes
  app.get('/login', users.login);
  app.get('/signup', users.signup);
  app.get('/logout', users.logout);
  app.get('/users/:userId', users.show);
  
  app.get('/api/loggedin', users.loggedin);
  
  app.post('/users', users.create);
  app.post('/users/session',
    passport.authenticate('local', authOptions), users.session);

  app.get('/auth/facebook',
    passport.authenticate('facebook', {
      scope: [ 'email', 'user_about_me'],
      failureRedirect: '/login'
    }), users.signin);
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      failureRedirect: '/login'
    }), users.authCallback);
  app.get('/auth/github',
    passport.authenticate('github', {
      failureRedirect: '/login'
    }), users.signin);
  app.get('/auth/github/callback',
    passport.authenticate('github', {
      failureRedirect: '/login'
    }), users.authCallback);
  app.get('/auth/twitter',
    passport.authenticate('twitter', {
      failureRedirect: '/login'
    }), users.signin);
  app.get('/auth/twitter/callback',
    passport.authenticate('twitter', {
      failureRedirect: '/login'
    }), users.authCallback);
  app.get('/auth/google',
    passport.authenticate('google', {
      failureRedirect: '/login',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ]
    }), users.signin);
  app.get('/auth/google/callback',
    passport.authenticate('google', {
      failureRedirect: '/login'
    }), users.authCallback);
  app.get('/auth/linkedin',
    passport.authenticate('linkedin', {
      failureRedirect: '/login',
      scope: [
        'r_emailaddress'
      ]
    }), users.signin);
  app.get('/auth/linkedin/callback',
    passport.authenticate('linkedin', {
      failureRedirect: '/login'
    }), users.authCallback);

  app.param('userId', users.load);

  /**
   * Error handling
   */

  app.use(function (err, req, res, next) {
    // treat as 404
    if (err.message
      && (~err.message.indexOf('not found')
      || (~err.message.indexOf('Cast to ObjectId failed')))) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500).render('500', { error: err.stack });
  });

  // assume 404 since no middleware responded
  app.use(function (req, res, next) {
    res.status(404).render('404', {
      url: req.originalUrl,
      error: 'Not found'
    });
  });
};
