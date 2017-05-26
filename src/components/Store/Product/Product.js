import React from "react";
import './Product.css';

export default function Product( { id, title, img, price, addToCart } ) {
  return (
    <div id="StoreProduct__container">
      <img src={ img } alt="Product" className="swagImg" width="200px" height="139.39px" />
      <div id="StoreProduct__details">
        <span> { title } </span>
        <div id="StoreProduct__addToCart" onClick={ () => { addToCart( id ) } }>
          <span> ${ price } </span>
          <span> Add to Cart </span>
        </div>
      </div>
    </div>
  )
}