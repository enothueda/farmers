import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/navbar/navbar.component';
import DisplayPage from './pages/display/display-page.component';
import UserPage from './pages/user/user-page.component';
import Ranchs from './pages/ranchs/ranchs.component';
import Maps from './pages/maps/maps-page.component';
import Inspections from './pages/inspections/inspections-page.component';
import Applications from './pages/applications/applications-page.component';

import './App.css';



function App() {
  return (
    <div className="App">
      <div className="navbar">
        <h1>NavBar</h1>
        <NavBar />
      </div>
      <div className="display">
        <h1>Page Display</h1>
        <Switch>
          <Route exact path='/' component={DisplayPage} />
          <Route exact path='/user' component={UserPage} />
          <Route exact path='/ranchs' component={Ranchs} />
          <Route exact path='/maps' component={Maps} />
          <Route exact path='/inspections' component={Inspections} />
          <Route exact path='/applications' component={Applications} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
