import React, { Component } from 'react';

export default class NewBlog extends Component {
  render() {
    return (
      <form className="input-group">
        <input
          type="text"
          placeholder="Title"
          className="form-control"
          onChange={event => this.onTitleChange(event)} />
        <input
          type="text"
          placeholder="Description"
          className="form-control"
          onChange={event => this.onExcerptChange(event)} />
        <input
          type="text"
          placeholder="Your Story"
          className="form-control"
          onChange={event => this.onBodyChange(event)} />
        <div className="input-group-btn">
          <button onClick={event => this.handleSubmit(event)} className="btn btn-secondary">Add Blog</button>
        </div>
      </form>
    );
  }
}
