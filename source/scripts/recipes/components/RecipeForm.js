var React = require('react');

var RecipeForm = require('../../../../components/recipes/form');

module.exports = React.createClass({
  propTypes: {
    csrf_token: React.PropTypes.string
  },
  render: function () {
    return (
      <RecipeForm csrf_token={this.props.csrf_token} />
    );
  }
});
