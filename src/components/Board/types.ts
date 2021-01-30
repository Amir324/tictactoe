import { CellValue } from '../Cell/component';

export type BoardWrapperProps = {
  size: number;
};

export type Winner = CellValue | 'tie';

export type BoardProps = {
  onGameEnd(winner: Winner): void;
  size: number;
};
