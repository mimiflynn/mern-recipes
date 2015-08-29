var React = require('react');

var DefaultLayout = require('../layouts/default');

module.exports = React.createClass({
  render: function () {

    return (
      <DefaultLayout title={this.props.title}>
        <section>
          {this.props.content}
        </section>
      </DefaultLayout>
    );
  }
});
