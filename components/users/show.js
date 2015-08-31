var React = require('react');

var DefaultLayout = require('../layouts/default');

var Login = require('./login');

module.exports = React.createClass({
  propTypes: {
    req: React.PropTypes.object
  },
  render: function () {
    var user = this.props.req.profile;
    return (
      <DefaultLayout title={ user.name || user.username }>
        <section>
          Welcome, <a href="/login">{user.name}</a>!
        </section>
      </DefaultLayout> 
    );
  }
});
