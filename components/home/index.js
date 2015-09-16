var React = require('react');

var DefaultLayout = require('../layouts/default');

module.exports = React.createClass({
	propTypes: {
		title: React.PropTypes.string,
    isAuthenticated: React.PropTypes.bool,
    user: React.PropTypes.object,
		content: React.PropTypes.string,
		scripts: React.PropTypes.array
	},
  loggedInGreeting: function () {
    return this.props.user.name;
  },
  guestGreeting: function () {
    return (
      <span>
        <a href="/login">log in</a> or <a href="/signup">sign up</a>
      </span>
    );
  },
  render: function () {
    var greeting = this.props.isAuthenticated ? this.loggedInGreeting() : this.guestGreeting();
    return (
      <DefaultLayout title={ this.props.title } scripts={ this.props.scripts } isAuthenticated={ this.props.isAuthenticated } user={ this.props.user }>
        <section>
        	<h2>Welcome, { greeting }!</h2>
        </section>
        <section>
          { this.props.content }
        </section>
        <section id="recipe-app" />
      </DefaultLayout>
    );
  }
});
