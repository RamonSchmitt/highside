import React, { Component } from 'react';
import NewBlog from './new-blog';
import BlogList from './blog-list';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <div className="container">
            <BlogList />
          </div>
      </div>
    );
  }
}
