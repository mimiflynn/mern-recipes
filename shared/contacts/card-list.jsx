var React = require('react');
var Card = require('./card.jsx');

module.exports = React.createClass({
  propTypes: {
    contacts: React.PropTypes.array
  },

  render: function () {
    var cards = this.props.contacts.map(function (contact, index) {
      return (
        <li key={contact._id}>
          <Card data={contact}/>
        </li>
      );
    });
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3>Contacts</h3>
          </div>
          <div className="panel-body">
            <ul className="cardList">
              {cards}
            </ul>
          </div>
        </div>
      </div>
    );
  }
});
