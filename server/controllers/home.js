
/*!
 * Module dependencies.
 */

exports.index = function (req, res) {
	var user = (typeof req.profile !== 'undefined') ? req.profile.name : 'sign in';
  res.render('home/index', {
    title: 'Node Express Mongoose Boilerplate',
    content: 'things and such more things',
    req: req
  });
};
