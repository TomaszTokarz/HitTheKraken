import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { Header } from '../../../components/main/Header';
import Button from '../../../components/modal/form/Button';
import { logOut } from '../../../database/database';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Header />);
});

test('should render header correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find(Button).length).toBe(1);
});

test('should render user name', () => {
    wrapper = shallow(<Header name="LazzyUser" />);

    expect(wrapper.find('div').text()).toBe('LazzyUser');
});

test('should render logout button correctly', () => {
    expect(wrapper.find(Button).props()).toMatchObject({
        onClick: logOut,
        value: 'Abandon ship!',
    });
});
