var React = require('react');

var DefaultLayout = require('../layouts/default');

module.exports = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    content: React.PropTypes.string,  
    user: React.PropTypes.object,
    isAuthenticated: React.PropTypes.bool
  },
  render: function () {
    var greating = this.props.user ? this.props.user.name : <a href="/login">sign in</a>;
    return (
      <DefaultLayout title={ this.props.title } user={ this.props.user } isAuthenticated={ this.props.isAuthenticated }>
        <section>
          { this.props.content }
        </section>
        <section>
          <h2>Welcome, { greating }!</h2>
        </section>
      </DefaultLayout>
    );
  }
});
