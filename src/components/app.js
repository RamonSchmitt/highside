import React, { Component } from 'react';
import NewBlog from './new-blog';
import BlogList from './blog-list';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [{
        title: "Blog Title 1",
        excerpt: "Fragment 1",
        body: "This is the text of blog entry"
      },{
        title: "Blog Title 2",
        excerpt: "Fragment 2",
        body: "Text of blog 2"
      }]
    }
  }

  onTitleChange(event) {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
  }

  onExcerptChange(event) {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
  }

  onBodyChange(event) {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <NewBlog />
        <BlogList data={this.state.data}/>
      </div>
    );
  }
}
