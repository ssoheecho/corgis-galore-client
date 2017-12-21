import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { fetchCorgis } from './actions/corgisAction'
import CorgisList from './components/CorgisList';
import Home from './components/Home'
import Footer from './components/Footer'
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
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/corgis" render={() => <CorgisList corgis={this.props.corgiData}/>} />
          </Switch>
        </Router>
        <Footer />
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
