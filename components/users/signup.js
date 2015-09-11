var React = require('react');

var DefaultLayout = require('../layouts/default');

module.exports = React.createClass({
  propTypes: {
    csrf_token: React.PropTypes.string,
    error: React.PropTypes.string,
    title: React.PropTypes.string,
    user: React.PropTypes.object
  },

  render: function () {
    return (
      <DefaultLayout title={this.props.title}>
        <form action="/users" method="post" role="form" className="form-horizontal">
          <input type="hidden" name="_csrf" value={ this.props.csrf_token } />

          <div className="form-group">
            <label for="name" className="col-sm-2 control-label">Full name</label>
            <div className="col-sm-10">
              <input id="name" className="form-control" type="text" name="name" placeholder="Full name" value={ this.props.user.name } />
            </div>
          </div>

          <div className="form-group">
            <label for="email" className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
              <input type="text" name="email" placeholder="Email" value={ this.props.user.email } id="email" className="form-control" />
            </div>
          </div>

          <div className="form-group">
            <label for="username" className="col-sm-2 control-label">Username</label>
            <div className="col-sm-10">
              <input id="username" className="form-control" type="text" name="username" placeholder="Username" value={ this.props.user.username } />
            </div>
          </div>

          <div className="form-group">
            <label for="password" className="col-sm-2 control-label">Password</label>
            <div className="col-sm-10">
              <input id="password" className="form-control" type="password" name="password" placeholder="Password" />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button className="btn btn-primary" type="submit">Sign up</button>
              &nbsp; or &nbsp;
              <a href="/login" className="show-login">Log in</a>
            </div>
          </div>
        </form>
      </DefaultLayout>
    )
  }
});
