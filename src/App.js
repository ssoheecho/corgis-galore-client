import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <p>Navbar Component</p>
        </div>
        <div className="main-content">
          <h1>CORGIS GALORE</h1>
          <p>Corgis Component</p>
        </div>
        <div className="footer">
          Footer
        </div>
      </div>
    );
  }
}

export default App;
