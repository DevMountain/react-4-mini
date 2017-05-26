import React from 'react';

import './Product.css';

export default function Product( { title, img, id } ) {
  return (
    <div id="CartProduct__container">
      <img alt="Product" src={ img } width="70px" height="70px" />
      <span id="CartProduct__title"> { title } </span>
    </div>
  )
}