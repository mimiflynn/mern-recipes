
/*!
 * Module dependencies.
 */

exports.index = function (req, res) {
  res.render('home/index', {
    title: 'Node Express Mongoose Boilerplate',
    content: 'things and such more things',
    user: req.isAuthenticated() ? req.user : '0'
  });
};
