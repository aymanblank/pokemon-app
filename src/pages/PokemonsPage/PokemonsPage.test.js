import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from './../../../utils';
import PokemonsPage from './PokemonsPage';

describe('PokemonsPage Component', () => {

  const props = {
    error: null,
    pending: false,
    pokemons: [
      {
        id: 'TestID',
        number: '001',
        name: 'Test Name',
        maxCP: 500,
        maxHP: 1000,
        image: 'image',
        types: ["Ground", "Air"],
        hideMoreInfo: false,
      },
      {
        id: 'TestID2',
        number: '002',
        name: 'Test Name',
        maxCP: 500,
        maxHP: 1000,
        image: 'image',
        types: ["Ground", "Air"],
        hideMoreInfo: false,
      },
    ]
  };

  describe('Checking PropTypes', () => {
    it('Should Not throw a warning', () => {
        const expectedProps = props;
        const propsError = checkProps(PokemonsPage, expectedProps);
        expect(propsError).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<PokemonsPage {...props} />);
    });

    it('Should Render a div container', () => {
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

    it('Should Render pokemons cards if available', () => {
      const component = findByTestAtrr(wrapper, 'pokemonCard');
      expect(component.length).toBe(props.pokemons.length);
    });

  });

  describe('Checking if loading renders', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<PokemonsPage pending={true} />);
    });

    it('Should Render a loading component', () => {
      const component = findByTestAtrr(wrapper, 'loading');
      expect(component.length).toBe(1);
    });
  });

  describe('Checking if error renders', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<PokemonsPage error={true} />);
    });

    it('Should Render an error alert', () => {
      const component = findByTestAtrr(wrapper, 'errorAlert');
      expect(component.length).toBe(1);
    });
  });

  describe('Have No Props', () => {

    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<PokemonsPage />);
    });

    it('Should Not Render any pokemon card component', () => {
      const component = findByTestAtrr(wrapper, 'pokemonCard');
      expect(component.length).toBe(0);
    });

  });
});