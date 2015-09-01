var React = require('react');

module.exports = React.createClass({
  propTypes: {
    user: React.PropTypes.string
  },
  render: function () {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="logo pull-left">
          <a className="navbar-brand" href="/">Recipes</a>
        </div>
      </nav>
    );
  }
});
