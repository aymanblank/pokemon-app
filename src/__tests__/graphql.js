import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { Pokemon, Pokemons, POKEMON_QUERY, POKEMONS_QUERY } from '../apollo/pokemonsGQL';
import renderer from 'react-test-renderer';
import wait from 'waait';

describe('Checking Graphql', () => {
  
  describe('Checking Pokemon Graphql', () => {

    const mocks = [
      {
        request: {
          query: POKEMON_QUERY,
          variables: {
            pokemon_id: 'test1',
          },
        },
        result: {
          data: {
            pokemon: { 
              id: 'test1',
              number: '001',
              name: 'Test1 Name',
              maxCP: 500,
              maxHP: 1000,
              image: 'image',
              types: ["Ground", "Air"],
              evolutions: [{
                id: 'test2',
                number: '002',
                name: 'Test2 Name',
                maxCP: 500,
                maxHP: 1000,
                image: 'image',
                types: ["Ground", "Air"],
              }]
            },
          },
        },
      },
    ];

    let wrapper;
    beforeEach(() => {
      wrapper = renderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Pokemon pokemon_id="test1" />
        </MockedProvider>
      );
    });
  
    it('Should render loading state initially', () => {
      expect(wrapper.toJSON()).toContain('Loading...');
    });

    it('Should render error state', async () => {
      wrapper = renderer.create(
        <MockedProvider mocks={[{
          request: {
            query: POKEMON_QUERY,
            variables: {
              pokemon_id: 'test1',
            },
          },
          error: new Error('Error'),
        }]} addTypename={false}>
          <Pokemon pokemon_id="test1" />
        </MockedProvider>
      );
      await wait(0);
      expect(wrapper.toJSON()).toContain('Error!');
    });

    it('Should Has Pokemon name', async () => {
      await wait(0);
      const component = wrapper.root.findByProps({'data-test': 'name'});
      expect(component.children).toContain(mocks[0].result.data.pokemon.name);
    });

    it('Should Has Pokemon number', async () => {
      await wait(0);
      const component = wrapper.root.findByProps({'data-test': 'number'});
      expect(component.children).toContain(mocks[0].result.data.pokemon.number);
    });

    it('Should Has Pokemon maxCP', async () => {
      await wait(0);
      const component = wrapper.root.findByProps({'data-test': 'maxCP'});
      expect(component.children).toContain(mocks[0].result.data.pokemon.maxCP + '');
    });

    it('Should Has Pokemon maxHP', async () => {
      await wait(0);
      const component = wrapper.root.findByProps({'data-test': 'maxHP'});
      expect(component.children).toContain(mocks[0].result.data.pokemon.maxHP + '');
    });

    it('Should Has Pokemon image', async () => {
      await wait(0);
      const component = wrapper.root.findByProps({'data-test': 'image'});
      expect(component.children).toContain(mocks[0].result.data.pokemon.image);
    });

    it('Should Has Pokemon types', async () => {
      await wait(0);
      const components = wrapper.root.findAllByProps({'data-test': 'type'});
      expect(components.length).toBe(mocks[0].result.data.pokemon.types.length);
    });

    it('Should Has Pokemon evolutions', async () => {
      await wait(0);
      const components = wrapper.root.findAllByProps({'data-test': 'epokemon'});
      expect(components.length).toBe(mocks[0].result.data.pokemon.evolutions.length);
    });






    it('Should Has Evolution Pokemon name', async () => {
      await wait(0);
      const components = wrapper.root.findAllByProps({'data-test': 'epokemon'});
      const component = components[0].findByProps({'data-test': 'ename'});
      expect(component.children).toContain(mocks[0].result.data.pokemon.evolutions[0].name);
    });

    it('Should Has Evolution Pokemon number', async () => {
      await wait(0);
      const components = wrapper.root.findAllByProps({'data-test': 'epokemon'});
      const component = components[0].findByProps({'data-test': 'enumber'});
      expect(component.children).toContain(mocks[0].result.data.pokemon.evolutions[0].number);
    });

    it('Should Has Evolution Pokemon maxCP', async () => {
      await wait(0);
      const components = wrapper.root.findAllByProps({'data-test': 'epokemon'});
      const component = components[0].findByProps({'data-test': 'emaxCP'});
      expect(component.children).toContain(mocks[0].result.data.pokemon.evolutions[0].maxCP + '');
    });

    it('Should Has Evolution Pokemon maxHP', async () => {
      await wait(0);
      const components = wrapper.root.findAllByProps({'data-test': 'epokemon'});
      const component = components[0].findByProps({'data-test': 'emaxHP'});
      expect(component.children).toContain(mocks[0].result.data.pokemon.evolutions[0].maxHP + '');
    });

    it('Should Has Evolution Pokemon image', async () => {
      await wait(0);
      const components = wrapper.root.findAllByProps({'data-test': 'epokemon'});      
      const component = components[0].findByProps({'data-test': 'eimage'});
      expect(component.children).toContain(mocks[0].result.data.pokemon.evolutions[0].image);
    });

    it('Should Has Evolution Pokemon types', async () => {
      await wait(0);
      const components = wrapper.root.findAllByProps({'data-test': 'epokemon'});
      const typeComponents = components[0].findAllByProps({'data-test': 'etype'});
      expect(typeComponents.length).toBe(mocks[0].result.data.pokemon.evolutions[0].types.length);
    });
  
  });

  describe('Checking Pokemons Graphql', () => {

    const mocks = [
      {
        request: {
          query: POKEMONS_QUERY,
        },
        result: {
          data: {
            pokemons: [
              { 
                id: 'test1',
                number: '001',
                name: 'Test1 Name',
                maxCP: 500,
                maxHP: 1000,
                image: 'image',
                types: ["Ground", "Air"],
              },
              { 
                id: 'test2',
                number: '002',
                name: 'Test2 Name',
                maxCP: 500,
                maxHP: 1000,
                image: 'image',
                types: ["Ground", "Air"],
              }
            ],
          },
        },
      },
    ];

    let wrapper;
    beforeEach(() => {
      wrapper = renderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Pokemons />
        </MockedProvider>
      );
    });
  
    it('Should render loading state initially', () => {
      expect(wrapper.toJSON()).toContain('Loading...');
    });

    it('Should render error state', async () => {
      wrapper = renderer.create(
        <MockedProvider mocks={[{
          request: {
            query: POKEMONS_QUERY,
          },
          error: new Error('Error'),
        }]} addTypename={false}>
          <Pokemons />
        </MockedProvider>
      );
      await wait(0);
      expect(wrapper.toJSON()).toContain('Error!');
    });

    it('Should Has Pokemons', async () => {
      await wait(0);
      const components = wrapper.root.findAllByProps({'data-test': 'pokemon'});
      expect(components.length).toBe(mocks[0].result.data.pokemons.length);
    });

    it('Should Has Pokemon name', async () => {
      await wait(0);
      const components = wrapper.root.findAllByProps({'data-test': 'pokemon'});
      const component = components[0].findByProps({'data-test': 'name'});
      expect(component.children).toContain(mocks[0].result.data.pokemons[0].name);
    });

    it('Should Has Pokemon number', async () => {
      await wait(0);
      const components = wrapper.root.findAllByProps({'data-test': 'pokemon'});
      const component = components[0].findByProps({'data-test': 'number'});
      expect(component.children).toContain(mocks[0].result.data.pokemons[0].number);
    });

    it('Should Has Pokemon maxCP', async () => {
      await wait(0);
      const components = wrapper.root.findAllByProps({'data-test': 'pokemon'});
      const component = components[0].findByProps({'data-test': 'maxCP'});
      expect(component.children).toContain(mocks[0].result.data.pokemons[0].maxCP + '');
    });

    it('Should Has Pokemon maxHP', async () => {
      await wait(0);
      const components = wrapper.root.findAllByProps({'data-test': 'pokemon'});
      const component = components[0].findByProps({'data-test': 'maxHP'});
      expect(component.children).toContain(mocks[0].result.data.pokemons[0].maxHP + '');
    });

    it('Should Has Pokemon image', async () => {
      await wait(0);
      const components = wrapper.root.findAllByProps({'data-test': 'pokemon'});
      const component = components[0].findByProps({'data-test': 'image'});
      expect(component.children).toContain(mocks[0].result.data.pokemons[0].image);
    });

    it('Should Has Pokemon types', async () => {
      await wait(0);
      const components = wrapper.root.findAllByProps({'data-test': 'pokemon'});
      const typecomponents = components[0].findAllByProps({'data-test': 'type'});
      expect(typecomponents.length).toBe(mocks[0].result.data.pokemons[0].types.length);
    });
  
  });

});