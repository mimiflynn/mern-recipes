var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="card">
        <h2 className="name">{this.props.data.firstName} {this.props.data.lastName}</h2>
        <div className="address">{this.props.data.address}</div>
        <div className="city">{this.props.data.city}</div>
        <div className="state">{this.props.data.state}</div>
        <div className="zip">{this.props.data.zip}</div>
        <div className="country">{this.props.data.country}</div>
      </div>
    );
  }
});
