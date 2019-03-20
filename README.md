<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

In this project, we will create a very basic React blog application that makes use of multiple routes. We will be using the `react-router-dom` package.

## Live Example

<a href="https://devmountain.github.io/react-4-mini/#/">Click Me!</a>

<img src="https://github.com/DevMountain/react-4-mini/blob/master/readme-images/home_view.png" />

<img src="https://github.com/DevMountain/react-4-mini/blob/master/readme-images/topic_view.png" />

<img src="https://github.com/DevMountain/react-4-mini/blob/master/readme-images/post_view.png" />

## Setup

* `Fork` and `clone` this repository.
* Run `npm i`.

## Step 1

### Summary

In this step we will install the routing package we need and setup our router.

### Instructions

* Run `npm i react-router-dom`.
* Open `App.js`.
* Import `HashRouter`from `react-router-dom`.
* Wrap the `HashRouter` component around the existing `div`.

### Solution

<details>

<summary> <code> src/App.js </code> </summary>

```js
import React, { Component } from "react";
import { HashRouter } from 'react-router-dom';
import Nav from "./Components/Nav/Nav";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Nav />
          <h1 style={{ padding: "200px 35%" }}>
            This is where your pages will appear
          </h1>
        </div>
      </HashRouter>
    );
  }
}

export default App;

```

</details>

## Step 2

### Summary

In this step, we will create our routes using the existing components.

### Instructions

* Create a new file, `routes.js` in `src`.
* Import `React`.
* Import `Switch` and `Route` from `react-router-dom`.
* Import two of our view components, `Home` and`TopicList`.
* Export by default a `Switch` component.
* Add two `Route` components inside the `Switch` component, one for both the views we imported.
  * Each route should have a `path` and a `component` prop.
  * Home should have a `path` of `'/'`.
    * Home should have the `exact` prop
  * TopicList should have a `path` of `'/topics'`.

### Solution
<details>

<summary> <code> src/routes.js </code> </summary>

```js
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import TopicList from "./Components/TopicList/TopicList";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/topics" component={TopicList} />
  </Switch>
);
```

</details>

## Step 3

### Summary

In this step, we'll render the `routes` inside the main `App.js` component.

### Instructions

* Open `App.js`.
* Import the `routes.js` file.
* Delete the entire `h1` element.
* Underneath the `Nav` component use `{}` to `interpolate` (insert) and render the imported router.

### Solution

<details>

<summary> <code> src/App.js </code> </summary>

```js
import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import Nav from "./Components/Nav/Nav";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Nav />
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;

```

</details>

## Step 4

### Summary

In this step, we will setup navigation to the routes we just created.

### Instructions

* Open `Nav.js`.
* Import `Link` from `react-router-dom`.
* Wrap a `Link` component around the content of the two `li` tags.
  * The Home `li` should link to `'/'`.
  * The Topics `li` should link to `'/topics'`.

## Solution

<details>

<summary> <code> src/Components/Nav/Nav.js </code> </summary>

```js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./../../images/dm_white_logo.png";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div>
          <img src={logo} alt="dm logo" />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;

```

</details>

## Step 5

### Summary

In this step, we'll add another route that uses parameters.

### Instructions

* Open `routes.js`.
* Import our final view component, `Post`.
* Add an additional `Route` component to our `Switch`.
  * It should have a `path` of `'/post/:id'`.

### Solution

<details>

<summary> <code> src/routes.js </code> </summary>

```js
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import TopicList from "./Components/TopicList/TopicList";
import Post from "./Components/Post/Post";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/topics" component={TopicList} />
    <Route path="/post/:id" component={Post} />
  </Switch>
);

```

</details>

## Step 6

### Summary

In this step, we'll change our `Post` view to use the route parameter to display the correct blog post.

### Instructions

* Open `Post.js`.
* Update the `find` method in `componentDidMount` to use the `params` data instead of being hard-coded to the number 2.
  * Remember routing data, like parameters, is found on props.
  * IMPORTANT: parameters are strings (because they are a part of the URL). The ids of our posts are numbers, so be careful when comparing them.

### Solution

<details>

<summary> <code> src/Components/Post/Post.js </code> </summary>

```js
...
  componentDidMount() {
    // This is where you would make an axios call to a server in a fullstack application
    // but for today we'll be just be filter over an array of dummy data
    let post = posts.find(post => post.id === parseInt(this.props.match.params.id));
    this.setState({
      title: post.title,
      content: post.content
    });
  }
...
```

</details>

## Step 7

### Summary

In this step, we'll change our `TopicList` view to link to the `Post` view.

### Instructions

* Open `TopicList.js`.
* Import `Link` from `react-router-dom`.
* Wrap a `Link` component around the content of the`li` tag found in the `.map`.
* The `li` should link to `'/post/'` + the id of the post.

### Solution

<details>

<summary> <code> src/Components/TopicList/TopicList.js </code> </summary>

```js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import posts from "./../../post_data.json";
import "./TopicList.css";
...
    let displayTopics = posts.map(post => {
      return (
        <li key={post.id}>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
      );
    });
...
```

</details>

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2019. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>
