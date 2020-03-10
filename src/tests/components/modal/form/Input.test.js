import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Input from '../../../../components/modal/form/Input';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Input />);
});

test('should render input correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});
