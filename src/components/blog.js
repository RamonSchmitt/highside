import React, { Component } from 'react';

export default class BlogList extends Component {
  render() {
    return (
      <table className="table table-responsive">
        <thead>
          <tr>
            <th>{this.props.name}</th>
            <th>{this.props.title}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img alt={this.props.name} src={this.props.picture} /></td>
            <td>
              <h5>{this.props.excerpt}</h5>
              <p>{this.props.body}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
