import React, { Component } from 'react';
import Blog from './blog';

export default class BlogList extends Component {
  constructor() {
    super();

    this.state = {
      data: [{
        post_id: "8",
        name: "John Doe",
        title: "Blog Title 1",
        excerpt: "Fragment 1",
        body: "This is the text of blog entry",
        picture: "http://apitest.icfrog.com/img.php?id=1"
      },{
        post_id: "7",
        name: "John Doe",
        title: "Blog Title 2",
        excerpt: "Fragment 2",
        body: "Text of blog 2",
        picture: "http://apitest.icfrog.com/img.php?id=1"
      }]
    }
  }

  renderBlogList(blogInfo) {
    return (
      <Blog
        key={blogInfo.post_id}
        name={blogInfo.name}
        title={blogInfo.title}
        excerpt={blogInfo.excerpt}
        body={blogInfo.body}
        picture={blogInfo.picture} />
    );
  }

  render() {
    return (
      <div>
        {this.state.data.map(this.renderBlogList)}
      </div>
    );
  }
}