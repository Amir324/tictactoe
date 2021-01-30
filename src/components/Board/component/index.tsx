import React, { FC, useEffect, useState } from 'react';
import Cell, { CellValue } from '../../Cell/component';
import { generateWinningCombinations } from '../../../utils';
import { BoardProps } from '../types';
import { BoardWrapper } from '../style';

const Board: FC<BoardProps> = ({ onGameEnd, size }) => {
  const [cells, setCells] = useState<CellValue[]>(
    Array(size * size).fill(undefined),
  );
  const [turn, setTurn] = useState<CellValue>('o');
  const winningConditions = generateWinningCombinations(size);

  const onCLickHandler = (id: number) => {
    if (cells[id]) return;
    cells[id] = turn;
    setCells(cells);
    setTurn((prev: string | undefined) => (prev === 'o' ? 'x' : 'o'));
  };

  useEffect(() => {
    if (cells.every(c => !c)) return;
    winningConditions.forEach(cond => {
      const line = cond.map(index => cells[index]);
      if (line[0] && new Set([...line]).size === 1) {
        onGameEnd(line[0]);
      }
    });

    // check if tie
    const allCellsFilled = cells.every(Boolean);
    if (allCellsFilled) {
      onGameEnd('tie');
    }
  }, [cells, onGameEnd, turn, winningConditions]);

  return (
    <BoardWrapper size={size}>
      {cells.map((c, i) => (
        <Cell key={i} index={i} value={c} onClick={onCLickHandler} />
      ))}
    </BoardWrapper>
  );
};

export default Board;
