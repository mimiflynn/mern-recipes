var React = require('react');

module.exports = React.createClass({
  propTypes: {
    user: React.PropTypes.string,
    isAuthenticated: React.PropTypes.bool
  },
  componentWillMount: function () {

  },
  userMenu: function () {
    if (this.props.isAuthenticated) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/logout">Log Out</a></li>
        </ul>
      );
    } else {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/login">Log In</a></li>
          <li><a href="/signup">Sign Up</a></li>
        </ul>
      );
    }
  },
  render: function () {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="logo pull-left">
            <a className="navbar-brand" href="/">Recipes</a>
          </div>
          { this.userMenu() }
        </div>
      </nav>
    );
  }
});
