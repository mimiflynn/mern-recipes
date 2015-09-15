var React = require('react');

var PageWrapper = require('./wrappers/page');
var Scripts = require('./components/scripts');

module.exports = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    user: React.PropTypes.object,
    isAuthenticated: React.PropTypes.bool,
    scripts: React.PropTypes.array
  },
  render: function () {
    var reactHtml = React.renderToString(<PageWrapper title={this.props.title} user={this.props.user} isAuthenticated={this.props.isAuthenticated} />);
    return (
      <html>
        <head>
          <title>{ this.props.title }</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" />
          <link rel="stylesheet" href="/css/app.css" />
          <Scripts scripts={this.props.scripts} />
        </head>
        <body dangerouslySetInnerHTML={{__html: reactHtml}} />
      </html>
    );
  }
});
