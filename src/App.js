// Imports
import React from 'react';
import { Route, Switch,  BrowserRouter as Router } from 'react-router-dom';


// Components
import Navbar from './components/Navbar';
import UnauthorizedLinks from './components/UnauthorizedLinks';
import Unauthorized from './Pages/Unauthorized';

import './styles/app.css'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="container mt-5">
        <Switch>
       <Route exact path="/"  component={Unauthorized}/>  
          <Route path="/test" component={UnauthorizedLinks} />
        </Switch>
      </div>
    </div>
    
    </Router>
  );
}

export default App;
