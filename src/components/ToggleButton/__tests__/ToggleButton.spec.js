'use strict';

import React from 'react';
import ToggleButton from '../ToggleButton';
import { render, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


jest.unmock('shortid');

const shortid = require('shortid');
shortid.generate = jest.fn(() => {return 123;});

it('renders correctly in expanded state', () => {
	const handlerSpy = jest.fn();

	const component = mount(<ToggleButton headerName={'Some Header'}  collapsed={false} clickHandler={handlerSpy} /> );

	expect(component.find('button').length).toBe(1);
	expect(component.find('button').hasClass('toggle--expanded')).toBe(true);
	expect(component.find('button').text()).toBe('Some Header');
	expect(component.find('button[aria-expanded=true]').length).toBe(1);
	expect(component.find('button[aria-controls=123]').length).toBe(1);
});

it('renders correctly in collapsed state', () => {
	const handlerSpy = jest.fn();

	const component = mount(<ToggleButton headerName={'Some Header'}  collapsed={true} clickHandler={handlerSpy} /> );

	expect(component.find('button').hasClass('toggle--collapsed')).toBe(true);
	expect(component.find('button[aria-expanded=false]').length).toBe(1);
});

it('calls click handler when clicked', () => {
	const handlerSpy = jest.fn();

	const component = mount(<ToggleButton headerName={'Some Header'}  collapsed={false} clickHandler={handlerSpy} /> );

	component.find('button').simulate('click');

	expect(handlerSpy).toHaveBeenCalled();
});

