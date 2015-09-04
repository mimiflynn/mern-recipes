var React = require('react');

var DefaultLayout = require('../layouts/default');

var Recipe = require('./recipe');

module.exports = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    user: React.PropTypes.object,
    isAuthenticated: React.PropTypes.bool,
    recipes: React.PropTypes.object,
    page: React.PropTypes.number,
    pages: React.PropTypes.number
  },
  render: function () {
    var recipes = this.props.recipes.map(function (item, index) {
      return (
        <li key={ item._id }>
          <h2>{ item.title }</h2>
          <Recipe recipe={ item } />
        </li>
      );
    });
    return (
      <DefaultLayout title={ this.props.title } user={ this.props.user } isAuthenticated={ this.props.isAuthenticated }>
        <ul>
          { recipes }
        </ul>
      </DefaultLayout>
    );
  }
});
