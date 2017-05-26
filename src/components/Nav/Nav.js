import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import './Nav.css';

import ShoppingCart from 'react-icons/lib/fa/shopping-cart';

function Nav( { items } ) {
  return (
    <div id="Nav__container">
      <div id="Nav__linksContainer">
        <Link className="navLink" to="/">
          <span>Store</span>
        </Link>

        <Link className="navLink fr" to="/checkout">
          <div id="Nav__itemsInCart"> { items } </div>
          <ShoppingCart id="Nav__shoppingCart" />
        </Link>
      </div>
    </div>
  )
}

function mapStateToProps( state ) {
  return {
    items: state.cart.length
  };
}

export default connect( mapStateToProps )( Nav );