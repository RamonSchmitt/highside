import React, { Component } from 'react';
import NewBlog from './new-blog';
import BlogList from './blog-list';

export default class App extends Component {
  render() {
    return (
      <div>
          <NewBlog />
          <BlogList />
      </div>
    );
  }
}
