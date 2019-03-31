import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from './../../../utils';
import PokemonCard from './index';

describe('PokemonCard Component', () => {

  const props = {
    id: 'TestID',
    number: '001',
    name: 'Test Name',
    maxCP: 500,
    maxHP: 1000,
    image: 'image',
    types: ["Ground", "Air"],
    hideMoreInfo: false,
  };

  describe('Checking PropTypes', () => {
    it('Should Not throw a warning', () => {
        const expectedProps = props;
        const propsError = checkProps(PokemonCard, expectedProps);
        expect(propsError).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<PokemonCard {...props} />);
    });

    it('Should Render a pokemon div component', () => {
        const component = findByTestAtrr(wrapper, 'pokemonCardComponent');
        expect(component.length).toBe(1);
    });

    it('Should Render a pokemon name', () => {
      const component = findByTestAtrr(wrapper, 'pokemonName');
      expect(component.length).toBe(1);
    });

    it('Should Render a pokemon types title', () => {
      const component = findByTestAtrr(wrapper, 'pokemonTypesTitle');
      expect(component.length).toBe(1);
    });

    it('Should Render a pokemon types values', () => {
      const component = findByTestAtrr(wrapper, 'pokemonTypesValues');
      expect(component.length).toBe(1);
    });

    it('Should Render a pokemon image', () => {
      const component = findByTestAtrr(wrapper, 'pokemonImage');
      expect(component.length).toBe(1);
    });

    it('Should Render a pokemon number', () => {
      const component = findByTestAtrr(wrapper, 'pokemonNumber');
      expect(component.length).toBe(1);
    });

    it('Should Render a pokemon maxHP', () => {
      const component = findByTestAtrr(wrapper, 'pokemonMaxHP');
      expect(component.length).toBe(1);
    });

    it('Should Render a pokemon maxCP', () => {
      const component = findByTestAtrr(wrapper, 'pokemonMaxCP');
      expect(component.length).toBe(1);
    });

    it('Should Has a pokemon more information link', () => {
      const component = findByTestAtrr(wrapper, 'pokemonMoreLink');
      expect(component.length).toBe(1);
    });
  });

  describe('Checking props rendering correctly', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<PokemonCard {...props} />);
    });

    it('Should Render a pokemon received name prop', () => {
      const component = findByTestAtrr(wrapper, 'pokemonName');
      expect(component.text()).toBe(props.name);
    });

    it('Should Render a pokemon received types prop', () => {
      const component = findByTestAtrr(wrapper, 'pokemonTypesValues');
      expect(component.children().length).toBe(props.types.length);
    });

    it('Should Render a pokemon received image prop', () => {
      const component = findByTestAtrr(wrapper, 'pokemonImage');
      expect(component.prop('src')).toBe(props.image);
    });

    it('Should Render a pokemon received number prop', () => {
      const component = findByTestAtrr(wrapper, 'pokemonNumber');
      expect(component.text()).toContain(props.number);
    });

    it('Should Render a pokemon received maxHP prop', () => {
      const component = findByTestAtrr(wrapper, 'pokemonMaxHP');
      expect(component.text()).toContain(props.maxHP);
    });

    it('Should Render a pokemon received maxCP prop', () => {
      const component = findByTestAtrr(wrapper, 'pokemonMaxCP');
      expect(component.text()).toContain(props.maxCP);
    });

    it('Should Has a pokemon received id prop', () => {
      const component = findByTestAtrr(wrapper, 'pokemonMoreLink');
      expect(component.prop('to')).toContain(props.id);
    });
  });


  describe('Have No Props', () => {

    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<PokemonCard />);
    });

    it('Should Render a pokemon div component', () => {
      const component = findByTestAtrr(wrapper, 'pokemonCardComponent');
      expect(component.length).toBe(1);
    });

    it('Should Render a pokemon name', () => {
      const component = findByTestAtrr(wrapper, 'pokemonName');
      expect(component.length).toBe(1);
    });

    it('Should Render a pokemon types title', () => {
      const component = findByTestAtrr(wrapper, 'pokemonTypesTitle');
      expect(component.length).toBe(1);
    });

    it('Should Render a pokemon types values', () => {
      const component = findByTestAtrr(wrapper, 'pokemonTypesValues');
      expect(component.length).toBe(1);
    });

    it('Should Render a pokemon image', () => {
      const component = findByTestAtrr(wrapper, 'pokemonImage');
      expect(component.length).toBe(1);
    });

    it('Should Render a pokemon number', () => {
      const component = findByTestAtrr(wrapper, 'pokemonNumber');
      expect(component.length).toBe(1);
    });

    it('Should Render a pokemon maxHP', () => {
      const component = findByTestAtrr(wrapper, 'pokemonMaxHP');
      expect(component.length).toBe(1);
    });

    it('Should Render a pokemon maxCP', () => {
      const component = findByTestAtrr(wrapper, 'pokemonMaxCP');
      expect(component.length).toBe(1);
    });

    it('Should Render a pokemon more information link', () => {
      const component = findByTestAtrr(wrapper, 'pokemonMoreLink');
      expect(component.length).toBe(1);
    });

    it('Should NOT Has a pokemon name prop', () => {
      const component = findByTestAtrr(wrapper, 'pokemonName');
      expect(component.text()).toBe('N/A');
    });

    it('Should NOT Has a pokemon types prop', () => {
      const component = findByTestAtrr(wrapper, 'pokemonTypesValues');
      expect(component.find('p').length).toBe(1);
    });

    it('Should NOT Has a pokemon image prop', () => {
      const component = findByTestAtrr(wrapper, 'pokemonImage');
      expect(component.prop('src')).toBe("");
    });

    it('Should NOT Has a pokemon number prop', () => {
      const component = findByTestAtrr(wrapper, 'pokemonNumber');
      expect(component.text()).not.toContain(props.number);
    });

    it('Should NOT Has a pokemon maxHP prop', () => {
      const component = findByTestAtrr(wrapper, 'pokemonMaxHP');
      expect(component.text()).not.toContain(props.maxHP);
    });

    it('Should NOT Has a pokemon maxCP prop', () => {
      const component = findByTestAtrr(wrapper, 'pokemonMaxCP');
      expect(component.text()).not.toContain(props.maxCP);
    });

    it('Should NOT Has a pokemon id prop', () => {
      const component = findByTestAtrr(wrapper, 'pokemonMoreLink');
      expect(component.prop('to')).not.toContain(props.id);
    });
  });
});