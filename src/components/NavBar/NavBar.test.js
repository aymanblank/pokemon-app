import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from './../../../utils';
import NavBar from './index';

describe('NavBar Component', () => {

    describe('Renders', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<NavBar />);
        });

        it('Should Render a navbar', () => {
            const navbar = findByTestAtrr(wrapper, 'navComponent');
            expect(navbar.length).toBe(1);
        });
    });
});