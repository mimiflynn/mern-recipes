var React = require('react');

var Navbar = require('../components/navbar');

module.exports = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    user: React.PropTypes.object,
    isAuthenticated: React.PropTypes.bool
  },
  render: function () {
    return (
      <div>
        <Navbar isAuthenticated={ this.props.isAuthenticated } user={ this.props.user } />
        <section className="content">
          <div className="container">
            <h1>{ this.props.title }</h1>
            { this.props.children }
          </div>
        </section>
      </div>
    );
  }
});
