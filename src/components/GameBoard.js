
const GameBoard = ({ logInfo, boxClickedHandler }) => {

  const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  if (logInfo.length > 0) {
    logInfo.forEach(element => {
      const {square, player} = element
      const {row, col} = square
      board[row][col] = player
    });

  }


  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => boxClickedHandler(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
