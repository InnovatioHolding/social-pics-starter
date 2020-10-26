import React from 'react';
import './App.css';
import { NavLink, Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Feed from './Feed';
import Upload from './Upload';
import Details from './Details';
import Amplify from 'aws-amplify'; 
import awsconfig from '/aws-exports'; 

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Social Pics</h1>
          <nav>
            <ul>
              <li><NavLink to="/feed">Feed</NavLink></li>
              <li><NavLink to="/upload">Upload</NavLink></li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Redirect to="/feed" />
            </Route>
            <Route path="/feed/:id">
              <Details />
            </Route>
            <Route path="/feed">
              <Feed />
            </Route>
            <Route path="/upload">
              <Upload />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

Amplify.configure(awsconfig);

export default App;
