import React from 'react';
import './App.css';

import Nav from './Nav/Nav';
import Cart from './Cart/Cart';

import router from '../router';

export default function App() {
  return (
    <div>
      <Nav />
      <div id="App__mainContainer">
        <div id="App__routerContainer">
          { router }
          <Cart />
        </div>
      </div>
    </div>
  )
}