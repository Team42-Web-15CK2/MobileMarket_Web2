import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {api: []}

  componentDidMount() {
    fetch('/api')
      .then(res => res.json())
      .then(users => this.setState({api}));
  }

  render() {
    return (
     <div className="App">
        <h1>Users</h1>
        {this.state.api.map(user =>
          <div key={user.id}>{user.name}</div>
        )}
      </div>
    );
  }
}

export default App;
