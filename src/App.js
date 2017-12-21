import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { fetchCorgis } from './actions/corgisAction'
import CorgisList from './components/CorgisList';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchCorgis();
  }

  render() {
    console.log(this.props.corgiData)
    return (
      <div className="App">
        <div className="navbar">
          <p>Navbar Component</p>
        </div>
        <div className="main-content">
          <h1>CORGIS GALORE</h1>
          <CorgisList corgis={this.props.corgiData}/>
        </div>
        <div className="footer">
          Footer
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    corgiData: state.corgis
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCorgis }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
