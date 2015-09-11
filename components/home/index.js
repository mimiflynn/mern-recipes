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
    var greating = this.props.isAuthenticated ? this.loggedInGreeting() : this.guestGreeting();
    return (
      <DefaultLayout title={ this.props.title } user={ this.props.user } isAuthenticated={ this.props.isAuthenticated } scripts={ this.props.scripts }>
        <section>
          { this.props.content }
        </section>
        <section>
        	<h2>Welcome, { greating }!</h2>
        </section>
        <section id="recipebook" />
      </DefaultLayout>
    );
  }
});
