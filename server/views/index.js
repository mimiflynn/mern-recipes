var React = require('react');

var DefaultLayout = require('./layouts/default');

var IndexLayout = React.createClass({
  render: function () {

    return (
      <DefaultLayout title={this.props.title}>
        <section>
          heyoo!
        </section>
        <script src="/js/app.js"></script>
      </DefaultLayout>
    );
  }
});

module.exports = IndexLayout;