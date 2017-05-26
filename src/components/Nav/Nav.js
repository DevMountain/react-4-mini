import React from "react";
import { connect } from "react-redux";

import './Nav.css';

import ShoppingCart from 'react-icons/lib/fa/shopping-cart';

function Nav( { items } ) {
  return (
    <div id="Nav__container">
      <div id="Nav__linksContainer">
        <span>Store</span>

        <div id="Nav__itemsInCart"> { items } </div>
        <ShoppingCart id="Nav__shoppingCart" />
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