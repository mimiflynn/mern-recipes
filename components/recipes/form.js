var React = require('react');

var FormWrapper = require('../layouts/wrappers/form.js');

module.exports = React.createClass({
  propTypes: {
    csrf_token: React.PropTypes.string,
    error: React.PropTypes.string,
    recipe: React.PropTypes.object
  },
  getInitialState: function() {
    return {};
  },
  handleChange: function (event) {
    var newValue = {};
    newValue[event.target.name] = event.target.value;

    this.setState(newValue);
  },
  handleTagChange: function (event) {
    var newValue = {};
    var tags = event.target.value.split(', ');

    newValue[event.target.name] = tags;

    this.setState(newValue);
  },
  render: function () {
    var tags = this.state.tags || [];

    return (
      <FormWrapper actionUrl="/api/recipes" httpMethod="post" csrf_token={ this.props.csrf_token }>
        <div className="form-group">
          <label htmlFor="title" className="col-sm-2 control-label">Title</label>
          <div className="col-sm-10">
            <input type="text" name="title" value={ this.state.title } onChange={ this.handleChange } placeholder="Enter the title" className="form-control" id="title" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="file" className="col-sm-2 control-label">Image</label>
          <div className="col-sm-10">
            <input type="file" name="image" className="form-control" id="file" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="desc" className="col-sm-2 control-label">Body</label>
          <div className="col-sm-10">
            <textarea rows="5" name="body" value={ this.state.body } onChange={ this.handleChange } placeholder="Enter the article description" id="desc" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="tags" className="col-sm-2 control-label">Tags</label>
          <div className="col-sm-10">
            <input type="text" name="tags" value={ tags.join(', ') } onChange={ this.handleTagChange } placeholder="Enter the tags" className="form-control" id="tags" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="btn btn-primary" type="submit">Save</button>
            &nbsp;
            <a href="/recipes" className="btn btn-link">Cancel</a>
          </div>
        </div>
      </FormWrapper>
    );
  }
});
