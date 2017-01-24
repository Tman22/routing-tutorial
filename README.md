# Routing-Tutorial

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>

### Goals

By the end of this lesson, you will know/be able to:

* React Router < 4.0

### Structure

### React Router Tutorial

By the end of today’s lesson, you should have a better idea of what React Router is, why it’s useful, and how to implement it into a React app. You will see implementation examples of React Router < 4.0

We will be working off off this master branch.

#### What Is A Router?

From a user’s perspective, routing is how you tell your browser what webpage you would like to visit and the path designates what you should see once you arrive. Like a road map. Each framework we work with handles routing in different ways, but ultimately they all share the same goal. Based on that road map, what view do you expect your user to see and what information does it contain?

Let’s take a look at an example url:
`localhost:3000/ideas/1`

What is this telling us about where we are in our app? This tells us we want to visit the root host `localhost:3000`, then view a page about a particular idea, specifically an idea with the ID of 1. With React Router, this is handled by telling our app that when the url matches a pattern of ideas/:someDynamicId, we want to display a particular component that associates with that information. In this case probably an <Idea /> component with the ID of 1.

#### React Router

React Router is the go-to routing library for building React apps built by Michael Jackson (hah) and Ryan Florence. They wanted a way to load routes as they needed them, to fetch data as needed, to incorporate routing with redux and hot module reloading, and they wanted to improve on the mess that was React Router <v4 that apparently nobody (including the React team) liked all that much.

Example of above root:
```
// other dependencies
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="ideas" component={Ideas}/>
        <Route path="/ideas/:ideaId" component={Idea}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('root')); ```

#### ^^^ What!?! ^^^
  React Router just adds helper components like:
  * Router
  * Route
  * Link
  * IndexRoute

#### Router

  * Router is our main wrapper for routes
  * Must have history attribute
  * Ex: <Router history={hashHistory}

Whats history you might ask? History knows how to listen to the browser's address bar for changes and parses the URL into a location object that the router can use to match routes and render the correct set of components. The two most commonly used history's are
[hashHistory vs browserHistory](https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#configuring-your-server). For now just know that hashHistory adds the # before the path ex: `http://localhost:8080/#/articles`

#### Route
  * Path Attribute: Defines route URL ex. path=’/’
  * Component Attribute: Defines component for this route ex. component={Home}

```
  <Router history={hashHistory} >
        <Route path=’/’ component={Home} />
  </Router>
```
The path should reference where you want to send the user in your application.


```
ReactDOM.render(

  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
	  <Route path=’/articles’ />
	    <IndexRoute component={Articles} />
        <Route path=':name' component={Article} />
	  </Route>
    </Route>
  </Router>

, document.getElementById('root'));

```

Heres another example of what routes might look like.
Notice that the component Home is nested under.

![Nested components](https://css-tricks.com/wp-content/uploads/2016/03/brad-westfall-4.svg)

#### The Closing: What is React Router
React Router helps keep the UI in sync with the URL by having components associated with routes (at any nested level)

React Router creates a road map for users to navigate. The URL path designates what you should see once you arrive. Based on that road map, what view/components do you expect your user to see and what information does it contain?

#### Group
  We'll work through getting articles set up together.
  * Discuss what React Router Injects as props.
    * this.props.params
    * this.props.location
    * this.props.query
    * this.props.children
  * Show a couple neat tricks. Like what happens if you don't have a route?
  * activeClassName
  * What if I don't want you to leave the page yet? >:D


#### Independent/Pair Practice (You do)
  * Work to finish todoList.
  * 2 groups will be picked at the end to discuss their findings.
