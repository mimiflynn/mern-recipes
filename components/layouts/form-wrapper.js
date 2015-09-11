var React = require('react');

// need to figure out how to best switch between post and put

module.exports = React.createClass({
  propTypes: {
    csrf_token: React.PropTypes.string,
    actionUrl: React.PropTypes.string,
    httpMethod: React.PropTypes.string
  },
  render: function () {
    return (
      <form action={ this.props.actionUrl } method={ this.props.httpMethod } role="form" className="form-horizontal">
        <input type="hidden" name="_csrf" value={ this.props.csrf_token } />
        { this.props.children }
      </form>
    );
  }
});
