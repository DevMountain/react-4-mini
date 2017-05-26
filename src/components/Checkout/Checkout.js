import React from "react";
import { checkout } from '../../ducks/reducer';
import { connect } from "react-redux";

import Product from './Product/Product';

import './Checkout.css';

function Checkout( { swagInCart, total, checkout } ) {

  const swagComponents = swagInCart.map( swag => (
    <Product 
      key={ swag.id }
      title={ swag.title }
      img={ swag.img }
      price={ swag.price }
      id={ swag.id }
    />
  ));

  return (
    <div id="Checkout__container">
      <div id="Checkout__swagContainer">
        { swagComponents }
      </div>
      <div id="Checkout__totalContainer">
        <p id="Checkout__totalTitle"> Total </p>
        <span id="Checkout__total">${ total }</span>
        <button id="Checkout__checkout" onClick={ checkout }> Checkout </button>
      </div>
    </div>
  )
}

function mapStateToProps( state ) {
  var swagInCart = state.cart.map( id => state.swag.filter( swag => swag.id === id )[0] );
  var total = swagInCart.reduce( ( total, swag ) => total + parseFloat(swag.price), 0 ).toFixed(2);
  return { swagInCart, total };
}

export default connect( mapStateToProps, { checkout } )( Checkout );