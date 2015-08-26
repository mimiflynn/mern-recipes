var React = require('react');

module.exports = {
  setFormData: function (data) {
    this.formData = data;
    this.onFormSubmit(data);
  },

  formData: {},

  // gets data out of form and adds it to the formData
  handleSubmitHelper: function (e) {
    e.preventDefault();

    var _this = this;
    var data = {};
    var keys = Object.keys(this.refs);

    keys.forEach(function (e, i, a) {
      data[e] = React.findDOMNode(_this.refs[e]).value.trim();
    });

    this.setFormData(data);

    keys.forEach(function (e, i, a) {
      React.findDOMNode(_this.refs[e]).value = '';
    });
  }
};
