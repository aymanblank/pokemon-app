import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './apollo';
import { Provider } from 'react-redux';
import store from './store';
import PokemonsPage from './pages/PokemonsPage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <Router>
            <NavBar />
            <Route exact path="/" component={PokemonsPage} />
            <Route exact path="/pokemon/:pokemon_id" component={null} />
          </Router>
        </ApolloProvider>
      </Provider>
    );
  }
}

export default App;
