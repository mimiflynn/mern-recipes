var React = require('react');

var DefaultLayout = require('../layouts/default');
var RecipeForm = require('./form');

module.exports = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    content: React.PropTypes.string,
    csrf_token: React.PropTypes.string.required
  },
  render: function () {
    return (
      <DefaultLayout title={ this.props.title } user={ this.props.user } isAuthenticated={ this.props.isAuthenticated }>
        <RecipeForm csrf_token={ this.props.csrf_token } />
      </DefaultLayout>
    );
  }
});
