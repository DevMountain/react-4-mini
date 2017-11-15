<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, we will create a very basic React application from scratch that makes use of multiple routes. We will be using the `react-router-dom` package, specifically v4. You can find more documentation to read on your own time here: <a href="https://reacttraining.com/react-router/web/guides/philosophy">Click Me!</a>

## Live Example

<a href="#">Click Me!</a>

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
* All three `Router#.js` files should be very basic state-less components.

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

<img src="https://github.com/DevMountain/react-routing/blob/solution/readme-assets/1g.gif" />






## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>
