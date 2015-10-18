var React = require('react');

var DefaultLayout = require('../layouts/default');
var RecipeForm = require('./form');

// mock data
var recipe = {
  title: 'recipe name',
  body: 'recipe description',
  ingredients: [{
    quantity: '2',
    unit: 'TBSP',
    name: 'Basil'
  }],
  user: {},
  comments: [{
    body: 'body of comment',
    user: {},
    createdAt: Date.now
  }],
  tags: ['thing', 'stuff'],
  image: {},
  createdAt: Date.now
};


module.exports = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    content: React.PropTypes.string,
    csrf_token: React.PropTypes.string.required
  },
  render: function () {
    return (
      <DefaultLayout title={ this.props.title } user={ this.props.user } isAuthenticated={ this.props.isAuthenticated }>
        <RecipeForm csrf_token={ this.props.csrf_token } recipe={ this.props.recipe } />
      </DefaultLayout>
    );
  }
});
