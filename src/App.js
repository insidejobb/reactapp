import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import MenuBar from './Components/MenuBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <nav>
            <ul>
              <li style={{display:'inline',padding:'5rem'}}>
                <NavLink to="/login" className="nav-link" activeClassName="active-link">
                  Login
                </NavLink>
              </li>
              <li style={{display:'inline',padding:'1rem'}}>
                <NavLink to="/signup" className="nav-link" activeClassName="active-link">
                  Signup
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/dashboard" component={MenuBar} />
          <Route path="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
