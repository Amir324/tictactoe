import React from 'react';
import { shallow } from 'enzyme';
import Board from './index';

describe('<Board />', () => {
  const onGameEnd = jest.fn();

  it('renders without crashing', () => {
    shallow(<Board onGameEnd={onGameEnd} size={4} />);
  });
});
