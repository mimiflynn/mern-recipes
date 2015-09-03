var React = require('react');

// need to figure out how to best switch between post and put

module.exports = React.createClass({
  propTypes: {
    csrf_token: React.PropTypes.string
  },
  render: function () {
    var recipe = {
      title: 'recipe name',
      body: 'recipe description',
      ingredients: [{
        quantity: '2',
        unit: 'TBSP',
        name: 'Basil'
      }],
      user: {},
      comments: [{
        body: 'body of comment',
        user: {},
        createdAt: Date.now
      }],
      tags: ['thing', 'stuff'],
      image: {},
      createdAt: Date.now
    };
    return (
      <section>
        <form action="/users" method="post" role="form" className="form-horizontal">
          <input type="hidden" name="_csrf" value={ this.props.csrf_token } />
          <div className="form-group">
            <label for="title" className="col-sm-2 control-label">Title</label>
            <div className="col-sm-10">
              <input type="text" name="title" value={ recipe.title } placeholder="Enter the title" className="form-control" id="title" />
            </div>
          </div>
          <div className="form-group">
            <label for="file" className="col-sm-2 control-label">Image</label>
            <div className="col-sm-10">
              <input type="file" name="image" className="form-control" id="file" />
            </div>
          </div>
          <div className="form-group">
            <label for="desc" className="col-sm-2 control-label">Body</label>
            <div className="col-sm-10">
              <textarea rows="5" name="body" placeholder="Enter the article description" id="desc" className="form-control">{ recipe.body }</textarea>
            </div>
          </div>
          <div className="form-group">
            <label for="tags" className="col-sm-2 control-label">Tags</label>
            <div className="col-sm-10">
              <input type="text" name="tags" value={ recipe.tags.join(', ') } placeholder="Enter the tags" className="form-control" id="tags" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button className="btn btn-primary" type="submit">Save</button>
              &nbsp;
              <a href="/recipes" className="btn btn-link">Cancel</a>
            </div>
          </div>
        </form>
        <div className="col-md-4">
          <img src="{{ article.image.cdnUri + '/mini_' + article.image.files[0] }}" alt="" />
        </div>
      </section>
    );
  }
});