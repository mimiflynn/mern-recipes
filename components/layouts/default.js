var React = require('react');

var Navbar = require('./components/navbar.js');
var Scripts = require('./components/scripts.js');

module.exports = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    user: React.PropTypes.object,
    isAuthenticated: React.PropTypes.bool,
    scripts: React.PropTypes.array
  },
  render: function () {
    return (
      <html>
        <head>
          <title>{ this.props.title }</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" />
          <link rel="stylesheet" href="/css/app.css" />
        </head>
        <body>
          <Navbar isAuthenticated={ this.props.isAuthenticated } user={ this.props.user } />
          <section className="content">
            <div className="container">
              <h1>{ this.props.title }</h1>
              <div className="section" dangerouslySetInnerHTML={{__html: this.props.children}} />
            </div>
          </section>
          <Scripts scripts={ this.props.scripts } />
        </body>
      </html>
    );
  }
});
