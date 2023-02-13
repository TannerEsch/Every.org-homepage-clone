// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

// Components
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UnauthorizedLinks from './components/UnauthorizedLinks';
import Profile from './components/Profile';
import Nonprofits from './components/Nonprofits';
import Unauthorized from './Pages/Unauthorized';

import './styles/app.css'
// const axios = require('axios')
// const apiKey = process.env.API_KEY;
// const cors = require('cors')


const PrivateRoute = ({ component: Component, ...rest}) => {
  let token = localStorage.getItem('jwtToken');
  console.log('===> Hitting a Private Route');
  return <Route {...rest} render={(props) => {
    return token ? <Component {...rest} {...props} /> : <Redirect to="/login"/>
  }} />
}

function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

 
  useEffect(() => {
    let token;
    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
      console.log('====> Authenticated is now FALSE');
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.getItem('jwtToken'));
      setCurrentUser(token);
    }
  }, []);


  const nowCurrentUser = (userData) => {
    console.log('===> nowCurrent is here.');
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      // remove token for localStorage
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }

  return (
    <Router>
    <div className="App">
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
      <div className="container mt-5">
        <Switch>
          {/* <Route path='/signup' component={Signup} /> */}
          {/* <Route 
            path="/login"
            render={(props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser}/>}
          /> */}
          {/* <PrivateRoute path="/profile" component={Profile} user={currentUser} handleLogout={handleLogout} /> */}
          {isAuthenticated?<Route exact path="/" component={Home}/> : <Route exact path="/" component={Unauthorized}/>   }
          {/* <Route path="/nonprofits" component={Nonprofits} /> */}
          <Route path="/test" component={UnauthorizedLinks} />
        </Switch>
      </div>
    </div>
    
    </Router>
  );
}

export default App;
