import { useState } from "react";
import Players from "./components/Players";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Gameover from "./components/Gameover";

const deriveActivePlayer = (logInfo) => {
  let activePlayer = 'X'
  if (logInfo.length > 0 && logInfo[0].player === "X") {
    activePlayer = "O";
  }
  return activePlayer
}

const checkForWinner = (board) => {
  const winningCombo =[
    [board[0][0], board[0][1], board[0][2]],
    [board[1][0], board[1][1], board[1][2]],
    [board[2][0], board[2][1], board[2][2]],
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]],
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]]
  ]

  const players = ['X', 'O']
  let winner = null;
  winningCombo.forEach(combo => {
    players.forEach(player => {
      if (winner === null) {
        if (combo[0] === player) {
          if (combo[1] === player) {
            if (combo[2] === player) {
              return winner = player
            }
          }
        }
      }
    });
    return winner
  });
  return winner
}

function App() {
  const [logInfo, setLogInfo] = useState([]);
  let activePlayer = deriveActivePlayer(logInfo);
  let winner = null

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
      return board
    });
  }
  if (logInfo.length === 9) {
    winner = 'draw'
  }
  winner = checkForWinner(board)
  if (winner) {
    console.log(winner);
  }

  const boxClickedHandler = (rowIndex, colIndex) => {
    setLogInfo((prevLogInfo) => {
      const activePlayer = deriveActivePlayer(prevLogInfo);

      const updatedLogInfo = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...logInfo,
      ];
      return updatedLogInfo;
    });

  };

  return (
    <div>
      <div id="game-container">
        {winner && <Gameover winner={winner}/>}
        <ol id="players" className="highlight-player">
          <Players name="Player 1" symbol="X" isActive={activePlayer} />
          <Players name="Player 2" symbol="O" isActive={activePlayer} />
        </ol>
        <GameBoard board={board} logInfo={logInfo} boxClickedHandler={boxClickedHandler} />
      </div>
      <Log logInfo={logInfo} />
    </div>
  );
}

export default App;
