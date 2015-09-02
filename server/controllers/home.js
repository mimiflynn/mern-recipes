
/*!
 * Module dependencies.
 */

exports.index = function (req, res) {
  res.render('home/index', {
    title: 'Recipes for you and me',
    user: req.isAuthenticated() ? req.user : {},
    isAuthenticated: req.isAuthenticated()
  });
};
