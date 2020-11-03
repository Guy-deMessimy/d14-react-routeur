import './App.css';
import React from 'react';
import MyProfile from './components/MyProfile';
import UserProfile from './components/UserProfile'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/my-profile">MyProfile</Link>
            </li>
            <li>
              <Link to="/user-profile/Marie-Garde">Marie Github</Link>
            </li>
            <li>
              <Link to="/user-profile/Gauthier-Lhomme/">Tim Github</Link>
            </li>
            <li>
              <Link to="/user-profile/Timothée-Harleaux/">Gauthier Github</Link>
            </li>
          </ul>
        </nav>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/my-profile">
          <MyProfile />
        </Route>
        <Route path="/user-profile/:githubLogin" component={UserProfile} />
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
