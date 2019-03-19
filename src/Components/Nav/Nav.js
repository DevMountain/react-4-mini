import React, { Component } from 'react';
import logo from './../../images/dm_white_logo.png';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div>
          <img src={logo} alt="dm logo" />
        </div>
        <ul>
          <li>Home</li>
          <li>Topics</li>
        </ul>
      </div>
    );
  }
}

export default Nav