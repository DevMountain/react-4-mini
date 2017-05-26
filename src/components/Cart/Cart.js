import React, { Component } from "react";
import { connect } from "react-redux";

import Product from './Product/Product';
import ShoppingCart from 'react-icons/lib/fa/shopping-cart';

import './Cart.css';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };

    this.toggleCartDetails = this.toggleCartDetails.bind( this );
  }
  
  toggleCartDetails() {
    this.setState({ expanded: !this.state.expanded});
  }

  render() {
    const {
      swagInCart,
      total,
      howMuchSwag
    } = this.props;

    let swagComponents = swagInCart.map( swag => (
      <Product 
        key={ swag.id }
        title={ swag.title }
        img={ swag.img }
        id={ swag.id }
      />
    ));

    return (
      this.state.expanded 
      ?
        <div id="Cart__containerExpanded">
          <div id="Cart__header" onClick={ this.toggleCartDetails }>
            <span> <ShoppingCart id="Cart__icon" /> { howMuchSwag } items: </span>
            <span> ${ total } </span>
          </div>
          <div id="Cart__details">
            { swagComponents }
          </div>
          <div id="Cart__footer" onClick={ this.toggleCartDetails }>
            <span> Checkout </span>
          </div>
        </div>
      :
        <div id="Cart__container" onClick={ this.toggleCartDetails }>
          <span> <ShoppingCart id="Cart__icon" /> { howMuchSwag } items: </span>
          <span> ${ total } </span>
        </div>
    )
  }
}

function mapStateToProps( state ) {
  var swagInCart = state.cart.map( id => state.swag.filter( swag => swag.id === id )[0] );
  var total = swagInCart.reduce( ( total, swag ) => total + parseFloat(swag.price), 0 ).toFixed(2);
  return { swagInCart, total, howMuchSwag: swagInCart.length };
}

export default connect( mapStateToProps )( Cart );