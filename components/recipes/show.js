var React = require('react');

var DefaultLayout = require('../layouts/default');

var Recipe = require('./recipe');

module.exports = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    recipe: React.PropTypes.object,
    user: React.PropTypes.object,
    isAuthenticated: React.PropTypes.bool
  },
  render: function () {
    return (
      <DefaultLayout title={ this.props.title } user={ this.props.user } isAuthenticated={ this.props.isAuthenticated }>
        <Recipe recipe={ this.props.recipe } />
      </DefaultLayout>
    );
  }
});
