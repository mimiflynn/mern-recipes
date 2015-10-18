var React = require('react');

var DefaultLayout = require('../layouts/default');

var Recipe = require('./recipe');

module.exports = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    isAuthenticated: React.PropTypes.bool,
    recipes: React.PropTypes.array,
    page: React.PropTypes.number,
    pages: React.PropTypes.number
  },
  render: function () {
    var recipes = this.props.recipes.map(function (item, index) {
      return (
        <li className="list-group-item" key={ item._id }>
          <h2><a href={ '/recipes/' + item._id }>{ item.title }</a></h2>
          <Recipe recipe={ item } />
        </li>
      );
    });
    return (
      <ul className="list-group">
        { recipes }
      </ul>
    );
  }
});
