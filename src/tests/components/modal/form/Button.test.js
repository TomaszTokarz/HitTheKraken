import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Button from '../../../../components/modal/form/Button';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Button />);
});

test('should render button correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});
