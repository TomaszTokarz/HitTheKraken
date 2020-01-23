import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import LoginPage from '../../../components/main/LoginPage';
import Input from '../../../components/modal/form/Input';

let wrapper;
const _mockedEvent = {
    preventDefault: jest.fn(),
};

beforeEach(() => {
    wrapper = shallow(<LoginPage />);
});

test('should render LoginPage correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('h3').length).toBe(1);
    expect(wrapper.find('form').length).toBe(1);
});

test('should render temporary header "logo"', () => {
    expect(wrapper.find('h1').text()).toBe('KRAKEN logo');
});

test('should render header fancy text', () => {
    expect(wrapper.find('h3').text()).toBe('AVAST! enlist yourself, scum');
});

test('should submit form', () => {
    const instance = wrapper.instance();

    jest.spyOn(instance, 'logIn');

    wrapper.setState({
        email: 'testemail@nowhere.com',
        password: 'p@ssw0rd',
    });

    wrapper
        .find('form')
        .props()
        .onSubmit(_mockedEvent);
    expect(instance.logIn).toHaveBeenCalledWith(_mockedEvent);
});

test('should render form fields', () => {
    expect(wrapper.find('form').find(Input).length).toBe(2);
});
