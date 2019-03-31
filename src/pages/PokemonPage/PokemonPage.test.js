import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from './../../../utils';
import PokemonPage from './PokemonPage';

describe('PokemonPage Component', () => {

  const props = {
    error: null,
    pending: false,
    pokemon: {
      id: 'TestID',
      number: '001',
      name: 'Test Name',
      maxCP: 500,
      maxHP: 1000,
      image: 'image',
      types: ["Ground", "Air"],
      hideMoreInfo: false,
    }
  };

  describe('Checking PropTypes', () => {
    it('Should Not throw a warning', () => {
        const expectedProps = props;
        const propsError = checkProps(PokemonPage, expectedProps);
        expect(propsError).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<PokemonPage {...props} />);
    });

    it('Should Render a pokemon div container', () => {
        const component = findByTestAtrr(wrapper, 'container');
        expect(component.length).toBe(1);
    });

    it('Should Not Render an error div', () => {
      const component = findByTestAtrr(wrapper, 'errorAlert');
      expect(component.length).toBe(0);
    });

    it('Should Render a header', () => {
      const component = findByTestAtrr(wrapper, 'header');
      expect(component.length).toBe(1);
    });

    it('Should Not Render a loading', () => {
      const component = findByTestAtrr(wrapper, 'loading');
      expect(component.length).toBe(0);
    });

    it('Should Render a pokemon card', () => {
      const component = findByTestAtrr(wrapper, 'pokemonCard');
      expect(component.length).toBe(1);
    });

    it('Should Render an evolutions header', () => {
      const component = findByTestAtrr(wrapper, 'evolutionsHeader');
      expect(component.length).toBe(1);
    });

    it('Should Not Render an evolutions pokemon card', () => {
      const component = findByTestAtrr(wrapper, 'evolutionPokemonCard');
      expect(component.length).toBe(0);
    });

    it('Should Render a no evolutions Msg', () => {
      const component = findByTestAtrr(wrapper, 'noEvolutionsMsg');
      expect(component.length).toBe(1);
    });

  });

  describe('Checking if loading renders', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<PokemonPage pending={true} />);
    });

    it('Should Render a loading component', () => {
      const component = findByTestAtrr(wrapper, 'loading');
      expect(component.length).toBe(1);
    });
  });

  describe('Checking if error renders', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<PokemonPage error={true} />);
    });

    it('Should Render an error alert', () => {
      const component = findByTestAtrr(wrapper, 'errorAlert');
      expect(component.length).toBe(1);
    });
  });

  describe('Checking if pokemon has evolutions', () => {
    let wrapper;
    beforeEach(() => {
      let pokemonWithEvolutionsProps = {
        error: null,
        pending: false,
        pokemon: {
          id: 'TestID',
          number: '001',
          name: 'Test Name',
          maxCP: 500,
          maxHP: 1000,
          image: 'image',
          types: ["Ground", "Air"],
          hideMoreInfo: false,
          evolutions: [
            {
              id: 'TestID',
              number: '001',
              name: 'Test Name',
              maxCP: 500,
              maxHP: 1000,
              image: 'image',
              types: ["Ground", "Air"],
              hideMoreInfo: false,
            }
          ]
        }
      }
      wrapper = shallow(<PokemonPage {...pokemonWithEvolutionsProps} />);
    });

    it('Should Render an evolutions pokemon card', () => {
      const component = findByTestAtrr(wrapper, 'evolutionPokemonCard');
      expect(component.length).toBe(1);
    });

    it('Should Not Render a no evolutions Msg', () => {
      const component = findByTestAtrr(wrapper, 'noEvolutionsMsg');
      expect(component.length).toBe(0);
    });
  });

  describe('Have No Props', () => {

    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<PokemonPage />);
    });

    it('Should Not Render a pokemon card component', () => {
      const component = findByTestAtrr(wrapper, 'pokemonCard');
      expect(component.length).toBe(0);
    });

    it('Should Not Render an evolutions pokemon card', () => {
      const component = findByTestAtrr(wrapper, 'evolutionPokemonCard');
      expect(component.length).toBe(0);
    });

    it('Should Render a no evolutions Msg', () => {
      const component = findByTestAtrr(wrapper, 'noEvolutionsMsg');
      expect(component.length).toBe(1);
    });

  });
});