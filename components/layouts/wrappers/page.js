var React = require('react');

module.exports = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    user: React.PropTypes.object,
    isAuthenticated: React.PropTypes.bool
  },
  render: function () {
    return (
      <section className="content">
        <div className="container">
          <h1>{ this.props.title }</h1>
          { this.props.children }
        </div>
      </section>
    );
  }
});
