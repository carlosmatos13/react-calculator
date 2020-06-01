import React from 'react';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator component', () => {
    const calcProps = {
        display: '0',
        operator: () => {
            console.log('')
        },
        displayValue: () => {
            console.log('')
        }
    }
    it('display is equal to 0',() => {
        const wrapper = shallow(<Calculator {...calcProps} />);
        const displayValue = wrapper.find('p').text();
        expect(displayValue).toEqual('0');
    });
})