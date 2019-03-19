import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../images/dm_white_logo.png';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className='Nav'>
        <Link to='/'><img src={logo} alt='dm logo' /></Link>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
        </ul>
      </div>
    )
  }
}

export default Nav