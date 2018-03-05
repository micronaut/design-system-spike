import { configure } from '@storybook/react';
import {configure as enzymeConfigure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jest from 'jest-mock'
window.jest = jest;

enzymeConfigure({ adapter: new Adapter() });

function loadStories() {
    require('../stories/toggle-button-stories.js');
}

configure(loadStories, module);