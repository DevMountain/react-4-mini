import React from "react";
import { Link } from "react-router-dom";
import './Product.css';

export default function Product( { id, title, img, price, addToCart } ) {
  return (
    <div id="StoreProduct__container">
      <Link to={ `details/${ id }` }>
        <img src={ img } alt="Product" width="200px" height="139.39px" />
      </Link>
      <div id="StoreProduct__details">
        <div id="StoreProduct__title">
          <Link to={ `details/${ id }` } className="StoreProduct__navLink">
            <span> { title } </span>
          </Link>
        </div>
        <div id="StoreProduct__addToCart" onClick={ () => { addToCart( id ) } }>
          <span> ${ price } </span>
          <span> Add to Cart </span>
        </div>
      </div>
    </div>
  )
}