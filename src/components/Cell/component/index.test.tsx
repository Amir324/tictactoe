import React from 'react';
import { shallow, mount } from 'enzyme';
import Cell from './index';

describe('<Cell />', () => {
  it('renders without crashing', () => {
    const onClick = jest.fn();
    shallow(<Cell value="x" index={0} onClick={onClick} />);
  });

  it('calls onClick event on click of a Cell', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Cell value="x" index={0} onClick={onClick} />);
    wrapper
      .find('button.cell')
      .first()
      .simulate('click');
    expect(onClick).toBeCalledWith(0);
  });
});
