'use strict';

import React from 'react';
import LinkItem from '../LinkItem';
import {render, mount} from 'enzyme'

jest.mock('jquery');
jest.mock('OMNI');

it('renders link with image and alt text if passed', () => {
	const item =
		{
			url: "some/url",
			text: "someText",
			image: "src-1"
		};

	const component = mount(<LinkItem item={item} /> );

	expect(component.html()).toBe('<a href="some/url"><img src="src-1" alt="someText" class="item-image"></a>');
});

it('renders link with image and default alt text if text NOT passed', () => {
	const item =
		{
			url: "some/url",
			image: "src-1"
		};

	const component = mount(<LinkItem item={item} /> );

	expect(component.html()).toBe('<a href="some/url"><img src="src-1" alt=" " class="item-image"></a>');
});

it('renders link with text if image NOT passed', () => {
	const item =
		{
			url: "some/url",
			text: "someText"
		};

	const component = mount(<LinkItem item={item} /> );

	expect(component.html()).toBe('<a href="some/url">someText</a>');
});


