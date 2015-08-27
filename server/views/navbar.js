var React = require('react');

var Navbar = React.createClass({
  render: function () {
    return (
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="logo pull-left">
          <a className="navbar-brand">Recipes</a>
        </div>
      </div>
    );
  }
});

module.exports = Navbar;