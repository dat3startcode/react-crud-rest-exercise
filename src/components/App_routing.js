import React, { useState, useEffect } from "react";
import PersonApp from './App';
// import '../style1.css';
import '../style2.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
  
  // This site has 3 pages, all of which are rendered
  // dynamically in the browser (not server rendered).
  //
  // Although the page does not ever refresh, notice how
  // React Router keeps the URL up to date as you navigate
  // through the site. This preserves the browser history,
  // making sure things like the back button and bookmarks
  // work properly.
  
  export default function BasicExample(props) {
    return (
      <Router className="content">
       <Header/>
  
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/personapp">
              <PersonApp apiFacade={props.apiFacade}/>
            </Route>
          </Switch>
      </Router>
    );
  }
  
  // You can think of these components as "pages"
  // in your app.
  
  function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  function Header() {
      return (
        <>
        <ul className="header">
          <li>
            <NavLink exact activeClassName="selected" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/personapp">PersonApp</NavLink>
          </li>
        </ul>

        <hr />
        </>
      );
  }
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  
  function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }
  