import React, { useState } from 'react';
import './App.css';
import Board from './components/Board/component';
import Start from './components/Start/component';
import { Reset } from './components/Reset/component';
import { Winner } from './components/Board/types';

export type GameStateType = 'game' | 'start' | 'reset';

function App() {
  const [winner, setWinner] = useState<Winner>();
  const [gameState, setGameState] = useState<GameStateType>('start');
  const [size, setSize] = useState(4);

  const onStart = () => {
    setGameState('game');
  };

  const onGameEnd = (win: Winner) => {
    setWinner(win);
    setGameState('reset');
  };

  const onReset = () => {
    setGameState('start');
    setWinner(undefined);
  };

  const onSetSize = (s: number) => {
    if (s < 3 || s > 10) return;
    setSize(s);
  };

  const gameStateTypesSwitch = (type: GameStateType) => {
    switch (type) {
      case 'game':
        return <Board onGameEnd={onGameEnd} size={size} />;
      case 'start':
        return <Start onStart={onStart} onSetSize={onSetSize} size={size} />;
      case 'reset':
        return <Reset onReset={onReset} winner={winner} />;
      default:
        return '';
    }
  };

  return <>{gameStateTypesSwitch(gameState)}</>;
}

export default App;
