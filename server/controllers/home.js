
/*!
 * Module dependencies.
 */

exports.index = function (req, res) {
	var user = req.profile;
  res.render('home/index', {
    title: 'Node Express Mongoose Boilerplate',
    content: 'things and such more things',
    user: user
  });
};
