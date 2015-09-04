var React = require('react');

module.exports = React.createClass({
  propTypes: {
    recipe: React.PropTypes.object
  },
  render: function () {
    var greating = this.props.user ? this.props.user.name : <a href="/login">sign in</a>;
    return (
      <section>
        <h3>Directions</h3>
        <p> { this.props.recipe.body } </p>
      </section>
    );
  }
});
