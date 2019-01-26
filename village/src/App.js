import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
      id: ''
    };
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/smurfform'>Add Smurf</NavLink>
        </nav>
        <div className="smurfcontainer">
          <SmurfForm />
          <Smurfs smurfs={this.state.smurfs} />
        </div>
      </div>
    );
  }
}

export default App;
