var React = require('react');

var DefaultLayout = require('../layouts/default');

var Login = require('./login');

module.exports = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    user: React.PropTypes.object
  },

  render: function () {
    return (
      <h1>{ user.name || user.username }</h1>
    )
  }
)};
