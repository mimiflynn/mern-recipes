var React = require('react');

var DefaultLayout = require('../layouts/default');
var FormWrapper = require('../layouts/wrappers/form');

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
        <h2 className="col-sm-offset-2 error">
          { this.state.message }
        </h2>
        <FormWrapper actionUrl="/users/session" httpMethod="post" csrf_token={ this.props.csrf_token } >
          <div className="form-group">
            <label for="email" className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
              <input id="email" className="form-control" type="email" placeholder="Email" name="email" />
            </div>
          </div>
          <div className="form-group">
            <label for="password" className="col-sm-2 control-label">Password</label>
            <div className="col-sm-10">
              <input id="password" className="form-control" type="password" placeholder="Password" name="password" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button className="btn btn-primary" type="submit">Log in</button>
              &nbsp; or &nbsp;
              <a href="/signup" className="show-signup">Sign up</a>
            </div>
          </div>
        </FormWrapper>
      </DefaultLayout>
    )
  }
});
