var React = require('react');

module.exports = React.createClass({
  propTypes: {
    items: React.PropTypes.array
  },
  render: function () {
    var items = this.props.items.map(function (item, index) {
      return (
        <li key={ item._id }>
          <a href={ item.url }>{ item.label }</a>
        </li>
      );
    });
    return (
      <ul className="nav navbar-nav navbar-right">
        { items }
      </ul>
    );
  }
});
