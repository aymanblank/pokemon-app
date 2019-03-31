import React from 'react';
import client from './index';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export const POKEMONS_QUERY = gql`
query Pokemons($first: Int!) {
  pokemons(first: $first) {
    id
    number
    name
    maxCP
    maxHP
    image
    types
  }
}`;

export const POKEMON_QUERY = gql`
query Pokemon($pokemon_id: String!) {
  pokemon(id: $pokemon_id) {
    id
    number
    name
    maxCP
    maxHP
    image
    types
    evolutions {
      id
      number
      name
      maxCP
      maxHP
      image
      types
    }
  }
}`;

export const fetchPokemons = async (first) => {
  const firstCount = first != null ? first : 20;
  const result = await client.query({
    query: POKEMONS_QUERY,
  variables: {first: firstCount}
  }).then(response => response.data)

  return result;
}

export const fetchPokemon = async (pokemon_id) => {
  const result = await client.query({
    query: POKEMON_QUERY,
  variables: {pokemon_id}
  }).then(response => response.data)

  return result;
}

export const Pokemon = ({ pokemon_id }) => (
  <Query query={POKEMON_QUERY} variables={{ pokemon_id }}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error!`;

      return (
        <div>
          <p data-test="name">{data.pokemon.name}</p>
          <p data-test="number">{data.pokemon.number}</p>
          <p data-test="maxCP">{data.pokemon.maxCP}</p>
          <p data-test="maxHP">{data.pokemon.maxHP}</p>
          <p data-test="image">{data.pokemon.image}</p>
          <div data-test="types">{
            data.pokemon.types ? 
              data.pokemon.types.map((type, index) => <p key={index} data-test="type">{type}</p>)
            :
            null
          }</div>
          <div data-test="evolutions">{
            data.pokemon.evolutions ? 
              data.pokemon.evolutions.map((pokemon) => 
              <div data-test="epokemon" key={pokemon.id}>
                <p data-test="ename">{pokemon.name}</p>
                <p data-test="enumber">{pokemon.number}</p>
                <p data-test="emaxCP">{pokemon.maxCP}</p>
                <p data-test="emaxHP">{pokemon.maxHP}</p>
                <p data-test="eimage">{pokemon.image}</p>
                <div data-test="etypes">{
                  pokemon.types ? 
                    pokemon.types.map((type, index) => <p key={index} data-test="etype">{type}</p>)
                  :
                  null
                }</div>
              </div>)
            :
            null
          }</div>
        </div>
      );
    }}
  </Query>
);

export const Pokemons = () => (
  <Query query={POKEMONS_QUERY} >
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error!`;

      return (
        <div>
          {data.pokemons ?
          data.pokemons.map(pokemon => 
            <div data-test="pokemon" key={pokemon.id}>
              <p data-test="name">{pokemon.name}</p>
              <p data-test="number">{pokemon.number}</p>
              <p data-test="maxCP">{pokemon.maxCP}</p>
              <p data-test="maxHP">{pokemon.maxHP}</p>
              <p data-test="image">{pokemon.image}</p>
              <div data-test="types">{
                pokemon.types ? 
                  pokemon.types.map((type, index) => <p key={index} data-test="type">{type}</p>)
                :
                null
              }</div>
            </div>)
            :
            null
            }
        </div>
      );
    }}
  </Query>
);