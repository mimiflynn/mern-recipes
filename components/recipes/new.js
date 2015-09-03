var React = require('react');

var DefaultLayout = require('../layouts/default');
var RecipeForm = require('./form');

module.exports = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    content: React.PropTypes.string,
    csrf_token: React.PropTypes.string
  },
  render: function () {
    return (
      <DefaultLayout title={ this.props.title } user={ this.props.user } isAuthenticated={ this.props.isAuthenticated }>
        <section>
          <RecipeForm />
        </section>
      </DefaultLayout>
    );
  }
});
