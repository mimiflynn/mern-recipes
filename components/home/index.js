var React = require('react');

var DefaultLayout = require('../layouts/default');

module.exports = React.createClass({
	propTypes: {
		title: React.PropTypes.string,
		content: React.PropTypes.string,
		user: React.PropTypes.object
	},
  render: function () {
    return (
      <DefaultLayout title={this.props.title}>
        <section>
          {this.props.content}
        </section>
        <section>
        	Welcome, {this.props.user}!
        </section>
      </DefaultLayout>
    );
  }
});
