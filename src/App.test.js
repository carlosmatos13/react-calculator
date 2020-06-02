import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';


describe('renders correctly', () => {
    it('matches the snapshot',() => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})