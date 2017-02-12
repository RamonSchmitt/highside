import React, { Component } from 'react';

export default class Blog extends Component {
  render() {
    return (
      <table className="table table-responsive">
        <thead>
          <tr>
            <th>{this.props.title}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h6>{this.props.excerpt}</h6>
              <p>{this.props.body}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
