import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Game from '../../components/Game';
import Header from '../../components/main/Header';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Game />);
});

test('should render Game correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper.find(Header).length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
});

test('should render Header correctly', () => {
    expect(wrapper.find(Header).props()).toMatchObject({});
});

test('should render fancy text correclt', () => {
    expect(wrapper.find('h1').text()).toBe('Release The KRAKEN! ARRRGGGHH');
});
