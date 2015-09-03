var React = require('react');

var Navbar = require('./components/navbar.js');

module.exports = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    user: React.PropTypes.object,
    isAuthenticated: React.PropTypes.bool
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
              <div className="section">
                <h1>{ this.props.title }</h1>
              </div>
              { this.props.children }
            </div>
          </section>
          <script src="/js/app.js"></script>
        </body>
      </html>
    );
  }
});
