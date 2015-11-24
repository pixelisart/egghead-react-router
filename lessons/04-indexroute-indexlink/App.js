import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router';

const Home = (props) => <div><h1>Home</h1><Links />{props.children}</div>
const About = (props) => <div><h1>About</h1></div>
const Contact = () => <div><h1>Contact</h1></div>
const Links = () => {
  return (
    <ul>
      <li>
        <IndexLink to="/">Home</IndexLink>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  )
}

const App = () => {
  return (
    <Router>
      <Route path="/" component={Home}>
        <IndexRoute component={About}></IndexRoute>
        <Route path="contact" component={Contact}></Route>
      </Route>
    </Router>
  );
}

export default App;

