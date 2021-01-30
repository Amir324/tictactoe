import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.button`
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px solid black;
  border-radius: 20px;
  background-color: white;
  font-size: 40px;
`;

export type CellValue = 'x' | 'o' | undefined;

type CellProps = {
  value: CellValue;
  onClick(index: number): void;
  index: number;
};

const Cell: FC<CellProps> = ({ value, index, onClick }) => {
  return (
    <Container className="cell" onClick={() => onClick(index)}>
      {value}
    </Container>
  );
};

export default Cell;
