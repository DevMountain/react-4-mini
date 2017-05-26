import swag from '../assets/swag'

const initialState = {
  swag,
  cart: []
}

// Action Types
const ADD_TO_CART = "ADD_TO_CART";
const CHECKOUT = "CHECKOUT";

// Reducer
export default function reducer( state = initialState, action ) {
  console.log("Reducer fired");
  console.log("State:", state);
  console.log("Action:", action);
  switch( action.type ) {

    case ADD_TO_CART: 
      if ( state.cart.indexOf( action.payload ) === -1 ) {
        return {
          swag: state.swag,
          cart: [ ...state.cart, action.payload ]
        }
      }

      return state;

    case CHECKOUT: return Object.assign({}, initialState);
    default: return state;
  }
}

// Action Creators
export function addToCart( id ) {
  return {
    type: ADD_TO_CART,
    payload: id
  }
}

export function checkout() {
  return {
    type: CHECKOUT,
    payload: null
  }
}