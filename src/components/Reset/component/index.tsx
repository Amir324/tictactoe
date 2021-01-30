import React, { FC } from 'react';
import styled from 'styled-components';
import { Winner } from '../../Board/types';

const Button = styled.button`
  height: 100px;
  width: 200px;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
  border: none;
  font-size: 20px;
`;

type ResetProps = {
  winner: Winner;
  onReset(): void;
};

export const Reset: FC<ResetProps> = ({ winner, onReset }) => {
  return (
    <>
      <h2>{winner === 'tie' ? 'Tie' : `${winner} is a winner`}</h2>
      <Button className="reset" onClick={onReset}>
        Restart
      </Button>
    </>
  );
};
