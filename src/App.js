import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { fetchCorgis } from './actions/corgisAction'
import CorgisList from './components/CorgisList';
import Home from './components/Home'
import Navbar from './components/Navbar'
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
        <Router>
          <div className="routes">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/corgis" component={CorgisList} />} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCorgis }, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
