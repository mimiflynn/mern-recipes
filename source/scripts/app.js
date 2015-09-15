var React = require('react');
var RecipeApp = require('../../components/layouts/wrappers/page');

React.render(
  <RecipeApp title={this.props.title} user={this.props.user} isAuthenticated={this.props.isAuthenticated} />,
  document.body
);
