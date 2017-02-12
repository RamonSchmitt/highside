import React, { Component } from 'react';
import BlogList from './blog-list';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      post: {
        title: "",
        excerpt: "",
        body: ""
      }
    }
  }

  componentDidMount() {
    this.setState({
      data: [{
        title: "Blog Title 1",
        excerpt: "Fragment 1",
        body: "This is the text of blog entry"
      },{
        title: "Blog Title 2",
        excerpt: "Fragment 2",
        body: "Text of blog 2"
      }]
    });
  }

  onTitleChange(event) {
    this.setState({post: { ...this.state.post, title: event.target.value }});
  }

  onExcerptChange(event) {
    this.setState({post: { ...this.state.post, excerpt: event.target.value }});
  }

  onBodyChange(event) {
    this.setState({post: { ...this.state.post, body: event.target.value }});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.state.data.push(this.state.post);
    console.log(this.state.data);

    this.refs.inputTitle.value="";
    this.refs.inputExcerpt.value="";
    this.refs.inputBody.value="";
  }

  render() {
    return (
      <div className="container">
        <form className="input-group">
          <input
            ref="inputTitle"
            type="text"
            placeholder="Title"
            className="form-control"
            onChange={event => this.onTitleChange(event)} />

          <input
            ref="inputExcerpt"
            type="text"
            placeholder="Description"
            className="form-control"
            onChange={event => this.onExcerptChange(event)} />

          <input
            ref="inputBody"
            type="text"
            placeholder="Your Story"
            className="form-control"
            onChange={event => this.onBodyChange(event)} />

          <span className="input-group-btn">
            <button type="button" onClick={event => this.handleSubmit(event)} className="btn btn-secondary">Add Blog</button>
          </span>
        </form>
        <BlogList data={this.state.data}/>
      </div>
    );
  }
}
