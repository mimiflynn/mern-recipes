var React = require('react');

var Navbar = require('../navbar.js');

module.exports = React.createClass({
  propTypes: {
    csrf_token: React.PropTypes.string
  },
  
  render: function () {
    var _csrf = 'window.csrf = "' + this.props.csrf_token + '"';

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
          <script src="/js/app.js"></script>
          <script dangerouslySetInnerHTML={{__html: _csrf}} />
        </body>
      </html>
    );
  }
});
