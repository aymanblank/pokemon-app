import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './apollo';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Router>
          <NavBar />
          <Route exact path="/" component={null} />
          <Route exact path="/pokemon/:pokemon_id" component={null} />
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
