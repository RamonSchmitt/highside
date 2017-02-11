import React, { Component } from 'react';

export default class NewBlog extends Component {
  render() {
    return (
      <form className="input-group">
        <input
        placeholder="Title"
        className="form-control" />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Add Blog</button>
        </span>
      </form>
    );
  }
}
