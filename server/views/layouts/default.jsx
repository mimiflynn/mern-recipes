var React = require('react');

var Navbar = require('../navbar.jsx');

var DefaultLayout = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" />
          <link rel="stylesheet" href="/css/screen.css" />
        </head>
        <body>
          <Navbar/>
          <div className="content">
            <div className="container">
              <div className="section">
                <h1>{this.props.title}</h1>
              </div>
              {this.props.children}
            </div>
          </div>
        </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;
