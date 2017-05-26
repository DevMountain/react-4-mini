<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project we will create a DevMountain swag shop using `react-router-dom`. The logic for the shop will already be built out. We will complete this project by building out a router and adding `Link`s. 

<img src="https://github.com/DevMountain/react-routing/blob/solution/readme-assets/1.png" />

## Setup

* `Fork` and `clone` this repository.
* `cd` into the project.
* Run `npm i` to install the required dependencies.
* Run `npm start` to spin up the development server.

## Step 1

### Summary

In this step, we will install `react-router-dom` and start configuring our store's router.

### Instructions

* In your terminal, run `npm i --save react-router-dom` when in the root directory of the project.
* Open `src/router.js`.
* Import `React` from `react`.
* Import `Switch` and `Route` from `react-router-dom`.
* Create an empty export default statement using `( )`.
* Import the following components:
  * Store - This component will be the landing page of our store.
    * `src/components/Store/Store.js`
  * Details - This component will be a page that displays more details about a product.
    * `src/components/Details/Details.js`
  * Checkout - This component will be a page where the user can checkout.
    * `src/components/Checkout/Checkout.js`
* Inside the parenthesis return a `Switch` component with a nested `Route` components:
  * Store:
    * Set the `path` prop of this component to `"/"`.
    * Add the `exact` prop to this component.
    * Set the `component` prop of this component to `{ Store }`.
  * Details:
    * Set the `path` prop of this component to `"/details/:id"`.
    * Set the `component` prop of this component to `{ Details }`.
  * Checkout:
    * Set the `path` prop of this component to `"/checkout"`.
    * Set the `component` prop of this component to `{ Checkout }`.

### Solution

<details>

<summary> <code> src/router.js </code> </summary>

```javascript
import React from "react";
import { Switch, Route } from "react-router-dom";

import Store from './components/Store/Store';
import Details from './components/Details/Details';
import Checkout from './components/Checkout/Checkout';å

export default (
  <Switch>
    <Route component={ Store } path="/" exact />
    <Route component={ Details } path="/details/:id" /> 
    <Route component={ Checkout } path="/checkout" />
  </Switch>
)
```

</details>

## Step 2

In this step we will modify our `index.js` to use a router. We'll do this by importing `BrowserRouter` from `react-router-dom` and including it in the `ReactDOM.render` statement.

### Instructions

* Open `src/index.js`.
* Import `BrowserRouter` from `react-router-dom`.
* Wrap the `Provider` component in `ReactDOM.render` with a `BrowserRouter` component.

### Solution

<details>

<summary> <code> src/index.js </code> </summary>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from './store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root')
);
registerServiceWorker();
```

</details>

## Step 3 

In this step we will modify our App.js to render our `router` onto the DOM.

### Instructions

* Open `src/components/App.js`.
* Import `router` from `src/router.js`.
* Render `router` above `<Cart />`.

### Solution

<details>

<summary> <code> src/components/App.js </code> </summary>

```jsx
import React from 'react';
import './App.css';

import Nav from './Nav/Nav';
import Cart from './Cart/Cart';

import router from '../router';

export default function App() {
  return (
    <div>
      <Nav />
      <div id="App__mainContainer">
        <div id="App__routerContainer">
          { router }
          <Cart />
        </div>
      </div>
    </div>
  )
}
```

</details>







## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>
