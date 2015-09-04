var React = require('react');

var DefaultLayout = require('../layouts/default');

var RecipeList = require('./recipe-list');

module.exports = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    user: React.PropTypes.object,
    isAuthenticated: React.PropTypes.bool,
    recipes: React.PropTypes.array
  },
  render: function () {
    return (
      <DefaultLayout title={ this.props.title } user={ this.props.user } isAuthenticated={ this.props.isAuthenticated }>
        <RecipeList recipes={ this.props.recipes } />
      </DefaultLayout>
    );
  }
});
