import { useState } from "react";
import Players from "./components/Players";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

const deriveActivePlayer = (logInfo) => {
  let activePlayer = 'X'
  if (logInfo.length > 0 && logInfo[0].player === "X") {
    activePlayer = "O";
  }
  return activePlayer
}

function App() {
  const [logInfo, setLogInfo] = useState([]);
  let activePlayer = deriveActivePlayer(logInfo);

  const boxClickedHandler = (rowIndex, colIndex) => {
    setLogInfo((prevLogInfo) => {
      // let player = "X";
      // if (prevLogInfo.length > 0 && prevLogInfo[0].player === "X") {
      //   player = "O";
      // }
      const activePlayer = deriveActivePlayer(prevLogInfo);

      const updatedLogInfo = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...logInfo,
      ];
      return updatedLogInfo;
    });

    // nextPlayer();
    
  };

  // const nextPlayer = () => {
  //   let playerOneTurn = true
  //   if (logInfo.length > 0 && logInfo[0].player === "X") {
  //     playerOneTurn = false;
  //     return playerOneTurn
  //   }
    
  // };



  return (
    <div>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players name="Player 1" symbol="X" isActive={activePlayer} />
          <Players name="Player 2" symbol="O" isActive={activePlayer} />
        </ol>
        <GameBoard logInfo={logInfo} boxClickedHandler={boxClickedHandler} />
      </div>
      <Log logInfo={logInfo} />
    </div>
  );
}

export default App;
