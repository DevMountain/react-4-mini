<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, we will create a very basic React application from scratch that makes use of multiple routes. We will be using the `react-router-dom` package, specifically v4. You can find more documentation to read on your own time here: <a href="https://reacttraining.com/react-router/web/guides/philosophy">Click Me!</a>

## Live Example

<a href="https://devmountain.github.io/react-4-mini/#/">Click Me!</a>

<img src="https://github.com/DevMountain/react-4-mini/blob/solution/readme-assets/1.png" />

## Setup

* `Fork` and `clone` this repository.
* `cd` into the project.
* Run `create-react-app ./` to get a React boilerplate.
  * Delete `README.md` and rename `README.old.md` back to `README.md`.

## Step 1

### Summary 

In this step, we will create three basic components that will be used later for three separate routes.

### Instructions

* Open `src/`.
* Create a `Route1.js`, `Route2.js`, and `Route3.js`.
* All three `Route#.js` files should be very basic state-less components.

### Solution

<details>

<summary> <code> src/Route1.js </code> </summary>

```js
import React from 'react';

export default function Route1() {
  return (
    <div>
      Route 1 here!
    </div>
  )
}
```

</details>

<details>

<summary> <code> src/Route2.js </code> </summary>

```js
import React from 'react';

export default function Route2() {
  return (
    <div>
      Route 2 here!
    </div>
  )
}
```

</details>

<details>

<summary> <code> src/Route3.js </code> </summary>

```js
import React from 'react';

export default function Route3() {
  return (
    <div>
      Route 3 here!
    </div>
  )
}
```

</details>

## Step 2

### Summary

In this step, we will add the `react-router-dom` package to our React project.

### Instructions

* Run `npm install --save react-router-dom`.

### Solution

<img src="https://github.com/DevMountain/react-4-mini/blob/solution/readme-assets/1g.gif" />

## Step 3

### Summary

In this step, we will configure routes using a `routes.js` file.

### Instructions

* Create a new `src/routes.js` file.
* Open `src/routes.js`.
* Import `React` from `react`.
* Import `{ Switch, Route }` from `react-router-dom`.
* Import the three `src/Route#.js` components.
* Export by default a `<Switch></Switch>` component.
* Add three `<Route></Route>` components for each `src/Route#.js` component inside the exported `<Switch></Switch>` component.

## Solution

<details>

<summary> <code> src/routes.js </code> </summary>

```js
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Route1 from './Route1';
import Route2 from './Route2';
import Route3 from './Route3';

export default (
  <Switch>
    <Route exact path="/" component={ Route1 } />
    <Route path="/2" component={ Route2 } />
    <Route path="/3" component={ Route3 } />
  </Switch>
)
```

</details>

## Step 4

### Summary

In this step, we'll render the `routes` inside the main `src/App.js` component.

### Instructions

* Open `src/App.js`.
* Import the `src/routes.js` file.
* Underneath the `<p></p>` element use `{}` to break out of JSX and render the imported router.

### Solution

<details>

<summary> <code> src/App.js </code> </summary>

```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        { routes }
      </div>
    );
  }
}

export default App;
```

</details>

## Step 5

### Summary

In this step, we'll configure our React application to handle routing.

### Instructions

* Open `src/index.js`.
* Import `HashRouter` from `react-router-dom`.
* In the `ReactDOM.render` statement, wrap the `<App />` component in a `<HashRouter></HashRouter>` component.

### Solution

<details>

<summary> <code> src/index.js </code> </summary>

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Routing
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>
, document.getElementById('root'));

registerServiceWorker();
```

</details>

## Step 6

### Summary 

In this step, we'll provide a way for a user to navigate between the routes. Using `react-router-dom`, this is done by using the `<Link></Link>` component.

### Instructions

* Open `src/App.js`.
* Import `Link` from `react-router-dom`.
* Above the rendering of the routes, add three `<Link>` components that route to the three different paths configured in `src/routes.js`.

### Solution

<details>

<summary> <code> src/App.js </code> </summary>

```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import routes from './routes';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Link to="/">
          <p>Route 1</p>
        </Link>

        <Link to="/2">
          <p>Route 2</p>
        </Link>

        <Link to="/3">
          <p>Route 3</p>
        </Link>
        
        { routes }
      </div>
    );
  }
}

export default App;
```

</details>

<br />

<img src="https://github.com/DevMountain/react-4-mini/blob/solution/readme-assets/2g.gif" />


## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>
