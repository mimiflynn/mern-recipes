var React = require('react');

module.exports = React.createClass({
  propTypes: {
    recipe: React.PropTypes.object
  },
  render: function () {
    var greating = this.props.user ? this.props.user.name : <a href="/login">sign in</a>;
    return (
      <section>
        <h2>Directions</h2>
        <p> { this.props.recipe.body } </p>
      </section>
    );
  }
});
