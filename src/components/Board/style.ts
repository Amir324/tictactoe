import styled from 'styled-components';
import { BoardWrapperProps } from './types';

export const BoardWrapper = styled.div<BoardWrapperProps>`
  grid-template-columns: repeat(${props => props.size}, 1fr);
  grid-template-rows: repeat(${props => props.size}, 1fr);
  display: grid;
  column-gap: 6px;
  row-gap: 6px;
  justify-items: center;
  align-items: center;
`;
