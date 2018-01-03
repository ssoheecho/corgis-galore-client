import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { fetchCorgis } from './actions/corgisAction'
import { fetchComments } from './actions/commentsAction'
import CorgisList from './components/corgis/CorgisList';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import FavoriteCorgis from './components/corgis/FavoriteCorgis'
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchCorgis();
    this.props.fetchComments();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="routes">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/corgis" component={CorgisList} />} />
              <Route path="/contact" component={Contact} />
              <Route path="/favorites" component={FavoriteCorgis} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCorgis, fetchComments }, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
