import React from 'react';
import { Link } from "react-router-dom";

import './Product.css';

export default function Product( { title, img, id } ) {
  return (
    <Link to={ `/details/${id}` } id="CartProduct__navLink">
      <div id="CartProduct__container">
        <img alt="Product" src={ img } width="70px" height="70px" />
        <span id="CartProduct__title"> { title } </span>
      </div>
    </Link>
  )
}