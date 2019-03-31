import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh',
  cache: new InMemoryCache()
});

export default client;