var React = require('react');

var DefaultLayout = require('./layouts/default');

var IndexLayout = React.createClass({
  render: function () {

    return (
      <DefaultLayout title={this.props.title}>
        <section>
          heyoo!
        </section>
      </DefaultLayout>
    );
  }
});

module.exports = IndexLayout;
