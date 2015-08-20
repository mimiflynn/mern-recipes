var React = require('react');

var DefaultLayout = require('./layouts/default');

var CardList = require('./contacts/card-list.jsx');

var ContactsLayout = React.createClass({
  render: function () {
    var _csrf = 'window.csrf = "' + this.props.csrf_token + '"';
    return (
      <DefaultLayout title={this.props.title}>
        <section>
          <p>For server side rendering go <a href="/">here</a>.</p>
          <div className="row">
            <div className="col-md-8" id="card-form" />
            <div className="col-md-4" id="card-list" />
          </div>
        </section>
        <script src="/js/app.js"></script>
        <script dangerouslySetInnerHTML={{__html: _csrf}} />
      </DefaultLayout>
    );
  }
});

module.exports = ContactsLayout;
