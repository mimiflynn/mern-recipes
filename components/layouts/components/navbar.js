var React = require('react');

var Menu = require('./menu');

var guestMenu = [{
  url: '/login',
  label: 'Log In'
}, {
  url: '/signup',
  label: 'Sign Up'
}];

var userMenu = [{
  url: '/recipes/new',
  label: 'Add a recipe'
}, {
  url: '/logout',
  label: 'Log Out'
}];

module.exports = React.createClass({
  propTypes: {
    user: React.PropTypes.object,
    isAuthenticated: React.PropTypes.bool
  },
  componentWillMount: function () {

  },
  render: function () {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="logo pull-left">
            <a className="navbar-brand" href="/">Recipes</a>
          </div>
          <Menu items={ (this.props.isAuthenticated) ? userMenu : guestMenu } />
        </div>
      </nav>
    );
  }
});
