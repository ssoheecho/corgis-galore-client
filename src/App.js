import React, { Component } from 'react';
import CorgisList from './components/CorgisList';
import CorgiService from './services/CorgiService';
import './App.css';

let corgis = [
  { title: 'Corgi-pup', url: 'http://cdn.akc.org/Marketplace/Breeds/Pembroke_Welsh_Corgi_SERP.jpg'},
  { title: 'Corgi', url: 'http://cdn2-www.dogtime.com/assets/uploads/2016/08/corgi-puppy-6.jpg' }
]

class App extends Component {

  state = {
    corgis: []
  }

  componentDidMount() {
    CorgiService.fetchCorgis().then(corgis => this.setState({corgis}));
  }

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <p>Navbar Component</p>
        </div>
        <div className="main-content">
          <h1>CORGIS GALORE</h1>
          <CorgisList corgis={corgis}/>
        </div>
        <div className="footer">
          Footer
        </div>
      </div>
    );
  }
}

export default App;
