import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Route exact path="/" component={null} />
        <Route exact path="/pokemon/:pokemon_id" component={null} />
      </Router>
    );
  }
}

export default App;
