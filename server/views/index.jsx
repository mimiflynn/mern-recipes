var React = require('react');

var DefaultLayout = require('./layouts/default');

var CardList = require('./contacts/card-list.jsx');
var CardForm = require('./contacts/card-form.jsx');

var IndexLayout = React.createClass({
  render: function () {

    var cardForm = React.renderToString(<CardForm csrf={this.props.csrf_token} />),
      _csrf = 'window.csrf = "' + this.props.csrf_token + '"',
      contacts = 'window.contacts = ' + JSON.stringify(this.props.contacts) + '';

    return (
      <DefaultLayout title={this.props.title}>
        <section>
          <p>For client side rendering go <a href="/clientside">here</a>.</p>
          <div className="row">
            <div className="col-md-8" id="card-form" dangerouslySetInnerHTML={{__html: cardForm}} />
            <div className="col-md-4" id="card-list" />
          </div>
        </section>
        <script src="/js/app.js"></script>
        <script dangerouslySetInnerHTML={{__html: _csrf}} />
        <script dangerouslySetInnerHTML={{__html: contacts}} />
      </DefaultLayout>
    );
  }
});

module.exports = IndexLayout;
