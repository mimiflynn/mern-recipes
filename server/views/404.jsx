var React = require('react');

var DefaultLayout = require('./layouts/default');

module.exports = React.createClass({
  render: function () {
    return (
      <DefaultLayout title={this.props.title}>
        <h1>404 - {this.props.title}</h1>
        <pre>
          { this.props.error }
        </pre>
      </DefaultLayout>
    );
  }
});
