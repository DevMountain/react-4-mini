import React from "react";
import { addToCart } from "../../ducks/reducer";
import { connect } from "react-redux";

import './Details.css';

function Details( { swag, history, addToCart } ) {

  function addAndRedirect() {
    addToCart( swag.id );
    history.push('/');
  } 

  return (
    <div id="Details__container">
      <p> { '<' } Back to store </p>
      <img id="Details__img" src={ swag.img } alt="Product" width="400px" />
      <p id="Details__title"> { swag.title } </p>
      <p id="Details__price"> ${ swag.price } </p>
      <button id="Details__addToCart" onClick={ addAndRedirect }> Add to Cart </button>
      <p> { swag.description } </p>
      <p> { swag.promo } </p>
    </div>
  )
}

function mapStateToProps( state, ownProps ) {
  const swag = state.swag.filter( swag => swag.id === ownProps.match.params.id )[0];
  return { swag };
}

export default connect( mapStateToProps, { addToCart } )( Details );