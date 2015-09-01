var React = require('react');

var DefaultLayout = require('../layouts/default');

module.exports = React.createClass({
  propTypes: {
    csrf_token: React.PropTypes.string,
    title: React.PropTypes.string
  },

  getInitialState: function () {
    return {
      message: 'Log In'
    }
  },
  
  render: function () {
    return (
      <DefaultLayout title={this.props.title}>
        <form action="/users/session" method="post" role="form" class="form-horizontal">
          <input type="hidden" name="_csrf" value={ this.props.csrf_token } />

          <p class="col-sm-offset-2 error">
            { this.state.message }
          </p>

          <div class="form-group">
            <label for="email" class="col-sm-2 control-label">Email</label>
            <div class="col-sm-10">
              <input id="email" class="form-control" type="email" placeholder="Email" name="email" />
            </div>
          </div>

          <div class="form-group">
            <label for="password" class="col-sm-2 control-label">Password</label>
            <div class="col-sm-10">
              <input id="password" class="form-control" type="password" placeholder="Password" name="password" />
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button class="btn btn-primary" type="submit">Log in</button>
              &nbsp; or &nbsp;
              <a href="/signup" class="show-signup">Sign up</a>
            </div>
          </div>
        </form>
      </DefaultLayout>
    )
  }
});
