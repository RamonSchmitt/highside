import React, { Component } from 'react';

export default class Blog extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.excerpt}</h3>
        <p>{this.props.body}</p>
      </div>
    );
  }
}
