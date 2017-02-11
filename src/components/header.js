import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="btn btn-default navbar-btn">Sign in</button>
          </div>
        </div>
      </nav>
    );
  }
}
