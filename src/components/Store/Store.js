import React from "react";
import { connect } from "react-redux";

import './Store.css';

import Product from './Product/Product';

import { addToCart } from '../../ducks/reducer';

function Store( { swag, cart, history, addToCart } ) {
  const swagComponents = swag.map( (swag) => (
    <Product
      key={ swag.id }
      id={ swag.id }
      title={ swag.title }
      img={ swag.img }
      price={ swag.price }
      addToCart={ addToCart }
    />
  ))

  return (
    <div className="store__container">
      { swagComponents }
    </div>
  )
}

function mapStateToProps( state ) {
  return state;
}

export default connect( mapStateToProps, { addToCart } )( Store );