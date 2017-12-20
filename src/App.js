import React, { Component } from 'react';
import CorgisList from './components/CorgisList';
import CorgiService from './services/CorgiService';
import './App.css';

class App extends Component {

  state = {
    corgis: []
  }

  componentDidMount() {
    CorgiService.fetchCorgis().then(corgis => this.setState({corgis}));
  }

  render() {
    console.log(this.state.corgis)
    return (
      <div className="App">
        <div className="navbar">
          <p>Navbar Component</p>
        </div>
        <div className="main-content">
          <h1>CORGIS GALORE</h1>
          <CorgisList corgis={this.state.corgis}/>
        </div>
        <div className="footer">
          Footer
        </div>
      </div>
    );
  }
}

export default App;
