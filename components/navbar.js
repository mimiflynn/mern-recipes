var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="logo pull-left">
          <a className="navbar-brand" href="/">Recipes</a>
        </div>
      </div>
    );
  }
});
