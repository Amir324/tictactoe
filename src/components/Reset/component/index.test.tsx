import React from 'react';
import { shallow, mount } from 'enzyme';
import { Reset } from './index';

it('renders without crashing', () => {
  const onReset = jest.fn();
  shallow(<Reset winner="tie" onReset={onReset} />);
});

it('calls onReset event on click of a onClick', () => {
  const onReset = jest.fn();
  const wrapper = mount(<Reset winner="tie" onReset={onReset} />);
  wrapper
    .find('button.reset')
    .first()
    .simulate('click');
  expect(onReset).toBeCalled();
});
