import { useState } from "react"
import Players from "./components/Players"
import GameBoard from "./components/GameBoard"

function App() {

  const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [markedBox, setMarkedBox] = useState(board)
  const [logInfo, setLogInfo] = useState([])

  const boxClickedHandler = (rowIndex, colIndex) => {

    setMarkedBox((prevBoard) => {
      const updatedBoard = [...prevBoard.map(innerArray => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = playerOneTurn ? 'X' : 'O';
      return updatedBoard
    })

    setLogInfo((prevLogInfo) => {
      let player = 'X'
      if (prevLogInfo.length > 0 && prevLogInfo[0].player === 'X') {
        player = 'O'
      }
      const updatedLogInfo = [{square: {row: rowIndex, col: colIndex}, player: player},...logInfo]
      return updatedLogInfo;
    });


    nextPlayer();
  }

  const [playerOneTurn, setPlayerOneTurn] = useState(true)

  const nextPlayer = () => {
    setPlayerOneTurn((prevPlayerOneTurn) => !prevPlayerOneTurn)
  }

  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Players name='Player 1' symbol='X' isActive = {playerOneTurn} />
        <Players name='Player 2' symbol='O' isActive = {!playerOneTurn}/>
      </ol>
      <GameBoard playerOneTurn={playerOneTurn} onNextTurn={nextPlayer} markedBox={markedBox} boxClickedHandler={boxClickedHandler} />
    </div>
  )
}

export default App
