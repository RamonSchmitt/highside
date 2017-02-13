import React, { Component } from 'react';
import BlogList from './blog-list';

export default class App extends Component {
 constructor() {
   super();

   this.state = {
     data: [],
     post: {
       title: '',
       excerpt: '',
       body: ''
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
   this.setState({post: { ...this.state.post, title: event.target.value } })
 }

 onExcerptChange(event) {
   this.setState({post: { ...this.state.post, excerpt: event.target.value } })
 }

 onBodyChange(event) {
   this.setState({post: { ...this.state.post, body: event.target.value } })
 }

 handleSubmit(event) {
   event.preventDefault();
   this.setState({
     data: [...this.state.data, this.state.post],
     post: {
       title: '',
       excerpt: '',
       body: ''
     }
   })
 }

 render() {
   console.log(this.state)
   return (
     <div className="container">
       <form className="input-group">
         <input
           type="text"
           placeholder="Title"
           className="form-control"
           value={this.state.post.title}
           onChange={event => this.onTitleChange(event)} />

         <input
           type="text"
           placeholder="Description"
           className="form-control"
           value={this.state.post.excerpt}
           onChange={event => this.onExcerptChange(event)} />

         <input
           type="text"
           placeholder="Your Story"
           className="form-control"
           value={this.state.post.body}
           onChange={event => this.onBodyChange(event)} />

         <button onClick={event => this.handleSubmit(event)} type="button" className="btn btn-secondary">Add Blog</button>
       </form>
       <BlogList data={this.state.data}/>
     </div>
   );
 }
}
