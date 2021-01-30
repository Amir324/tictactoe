export const generateWinningCombinations = (n: number) => {
  const result = [];

  let row: number[] = [];
  for (let i = 0; i < n * n + 1; i += 1) {
    if (row.length < n) {
      row.push(i);
    } else {
      result.push(row);
      row = [i];
    }
  }

  let column = [];

  for (let i = 0; i < n; i += 1) {
    column = [];
    let value = i;
    for (let y = 0; y < n; y += 1) {
      column.push(value);
      value += n;
    }
    result.push(column);
  }

  const diagonal = [];
  const reverseDiagonal = [];
  const step = n - 1;
  const reverseStep = n + 1;
  let value = 0;
  let reverseValue = 0;
  for (let i = 0; i < n; i += 1) {
    value += step;
    diagonal.push(value);

    reverseDiagonal.push(reverseValue);
    reverseValue += reverseStep;
  }
  result.push(diagonal);
  result.push(reverseDiagonal);

  return result;
};
