import React, { FC } from 'react';
import styled from 'styled-components';
import { GameStateType } from '../../../App';

const StartButton = styled.button`
  height: 100px;
  width: 200px;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
  border: none;
  font-size: 20px;
`;
const CounterWrapper = styled.div`
  margin: 10px;
  display: flex;
`;

const CounterButton = styled.button`
  height: 50px;
  width: 50px;
  cursor: pointer;
  font-size: 30px;
  border-radius: 10px;
  outline: none;
  border: none;
`;

const Title = styled.div`
  color: white;
  font-size: 30px;
`;

const Size = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 10px;
`;

type StartProps = {
  onStart(state: GameStateType): void;
  onSetSize(size: number): void;
  size: number;
};

const Start: FC<StartProps> = ({ onStart, onSetSize, size }) => {
  return (
    <>
      <Title>Set board size</Title>
      <CounterWrapper>
        <CounterButton onClick={() => onSetSize(size - 1)}>-</CounterButton>
        <Size>
          {size} by {size}
        </Size>
        <CounterButton onClick={() => onSetSize(size + 1)}>+</CounterButton>
      </CounterWrapper>

      <StartButton onClick={() => onStart('game')}>Start the game</StartButton>
    </>
  );
};

// omit using default exports.
export default Start;
