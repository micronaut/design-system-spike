import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { specs, describe, it } from 'storybook-addon-specifications'
import {mount} from "enzyme";
import expect from "expect";
import ToggleButton from '../src/components/ToggleButton/ToggleButton';


const stories = storiesOf('ToggleButton', module);

stories.add('collapsed by default false',
    withInfo(`
      Simple HTML button with collapsed state

      ~~~js
		<ToggleButton headerName=['Header Name'] collapsed =['this.state.collapsed'] clickHandler=['this.attachToggleForCollapsibleList']/>
      ~~~
    `)(() => {
        const story = <ToggleButton headerName={'Some Header'} collapsed={false} clickHandler={action('clicked')}/>;
        const shortid = require('shortid');
        shortid.generate = jest.fn(() => {
            return 123;
        });

        specs(() => describe('ToggleButton', function () {
            it('renders correctly in expanded state', function () {
                const handlerSpy = jest.fn();

                const component = mount(<ToggleButton headerName={'Some Header'} collapsed={false}
                                                      clickHandler={handlerSpy}/>);

                expect(component.find('button').length).toBe(1);
                expect(component.find('button').hasClass('toggleButton__toggle--expanded')).toBe(true);
                expect(component.find('button').text()).toBe('Some Header');
                expect(component.find('button[aria-expanded=true]').length).toBe(1);
                expect(component.find('button[aria-controls=123]').length).toBe(1);
            });

            it('renders correctly in collapsed state', () => {
                const handlerSpy = jest.fn();

                const component = mount(<ToggleButton headerName={'Some Header'} collapsed={true}
                                                      clickHandler={handlerSpy}/>);

                expect(component.find('button').hasClass('toggleButton__toggle--collapsed')).toBe(true);
                expect(component.find('button[aria-expanded=false]').length).toBe(1);
            });

            it('calls click handler when clicked', () => {
                const handlerSpy = jest.fn();

                const component = mount(<ToggleButton headerName={'Some Header'} collapsed={false}
                                                      clickHandler={handlerSpy}/>);

                component.find('button').simulate('click');

                expect(handlerSpy).toHaveBeenCalled();
            });

        }));
        return story;
    }));

