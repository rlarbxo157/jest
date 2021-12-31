import React from 'react';
// import {render} from 'react-testing-library';
import {render} from '@testing-library/react';
import Profile from './Profile';

describe('<Profile />',()=> {
    it('matches snapshot',()=> {
        const utils = render(<Profile username="김규태" name="김규태123" />);
        expect(utils.container).toMatchSnapshot();
    })
})