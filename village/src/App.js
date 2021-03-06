import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import UpdateForm from './components/UpdateForm';
import axios from 'axios';

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

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  }

  deleteSmurf = event => {
    event.preventDefault()
    axios
      .delete(`http://localhost:3333/smurfs/${event.target.id}`)
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error, 'ERROR'))
  }

  handleUpdate = res => this.setState({ smurfs: res});

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/smurfform'>Add Smurf</NavLink>
        </nav>
        <div className="smurfcontainer">
          <Route exact path="/" render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
              updateSmurf={this.updateSmurf}
              addSmurf={this.addSmurf} />
          )}/>
            
          <Route path='/smurfform' render={props => (
            <SmurfForm {...props} handleUpdate={res => {this.handleUpdate(res)}} />
          )}/>
            
          <Route path='/update' render={props => (
            <UpdateForm {...props} id={this.state.id} />
          )}/>
        </div>
      </div>
    );
  }
}

export default App;
