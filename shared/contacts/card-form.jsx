var React = require('react');
var LinkedStateMixin = require('react/lib/LinkedStateMixin');


/* CardForm
  upon submit will fire a JS CustomEvent() of 'cardSubmit' loaded with data
  be sure to add an event listener like so:

  React.findDOMNode(form).addEventListener('cardSubmit', callback)
  var callback = function (e) {
    // the data is in the detail
    console.log('cardSubmit fired: ', e.detail);
  }
*/

module.exports = React.createClass({
  mixins: [
    LinkedStateMixin
  ],

  getInitialState: function () {
    return {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      phone: '',
      email: '',
      _csrf: this.props.csrf,
      formSent: false
    };
  },

  handleSubmit: function (e) {
    e.preventDefault();
    console.log('event: ', e);
    console.log('form data: ', this.state);
    this.props.onCardSubmit(this.state);
    this.setState({
      formSent: true
    });
  },

  render: function () {
    console.log('props', this.props);
    var formSent = this.state.formSent;
    return (
          <div>
            <div style={{display: formSent ? 'block' : 'none'}}>Sent!</div>
            <form className="cardForm form-horizontal" onSubmit={this.handleSubmit}>
              <fieldset>
                <legend>Add Contact</legend>

                <div className="form-group">
                  <label className="col-md-4 control-label">First Name</label>
                  <div className="col-md-5">
                    <input type="text" placeholder="First" name="firstName" valueLink={this.linkState('firstName')}/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-4 control-label">Last Name</label>
                  <div className="col-md-5">
                    <input type="text" placeholder="Last" name="lastName" valueLink={this.linkState('lastName')}/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-4 control-label">Address</label>
                  <div className="col-md-5">
                    <input type="text" placeholder="Street Address" name="address" valueLink={this.linkState('address')}/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-4 control-label">City</label>
                  <div className="col-md-5">
                    <input type="text" placeholder="City" name="city" valueLink={this.linkState('city')}/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-4 control-label">State</label>
                  <div className="col-md-5">
                    <input type="text" placeholder="State" name="state" valueLink={this.linkState('state')}/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-4 control-label">Zip</label>
                  <div className="col-md-5">
                    <input type="text" placeholder="Zip" name="zip" valueLink={this.linkState('zip')}/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-4 control-label">Country</label>
                  <div className="col-md-5">
                    <input type="text" placeholder="Country" name="country" valueLink={this.linkState('country')}/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-4 control-label">Phone</label>
                  <div className="col-md-5">
                    <input type="text" placeholder="Phone" name="phone" valueLink={this.linkState('phone')}/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-4 control-label">Email</label>
                  <div className="col-md-5">
                    <input type="text" placeholder="Email" name="email" valueLink={this.linkState('email')}/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-4 control-label">Submit</label>
                  <div className="col-md-5">
                    <input className="btn btn-primary" type="submit" value="Save"/>
                  </div>
                </div>

              </fieldset>
            </form>
          </div>
    );
  }
});
