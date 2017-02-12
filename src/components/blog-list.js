import React, { Component } from 'react';
import Blog from './blog';

export default class BlogList extends Component {

  renderBlogList(blogInfo, index) {
    return (
      <Blog
        key={index}
        title={blogInfo.title}
        excerpt={blogInfo.excerpt}
        body={blogInfo.body} />
    );
  }

  render() {
    return (
      <div>
        {this.props.data.map(this.renderBlogList)}
      </div>
    );
  }
}
