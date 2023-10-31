import { useState } from "react";
import Players from "./components/Players";
import GameBoard from "./components/GameBoard";

function App() {
  const [logInfo, setLogInfo] = useState([]);

  const boxClickedHandler = (rowIndex, colIndex) => {
    setLogInfo((prevLogInfo) => {
      let player = "X";
      if (prevLogInfo.length > 0 && prevLogInfo[0].player === "X") {
        player = "O";
      }
      const updatedLogInfo = [
        { square: { row: rowIndex, col: colIndex }, player: player },
        ...logInfo,
      ];
      return updatedLogInfo;
    });

    nextPlayer();
  };

  const [playerOneTurn, setPlayerOneTurn] = useState(true);

  const nextPlayer = () => {
    setPlayerOneTurn((prevPlayerOneTurn) => !prevPlayerOneTurn);
  };

  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Players name="Player 1" symbol="X" isActive={playerOneTurn} />
        <Players name="Player 2" symbol="O" isActive={!playerOneTurn} />
      </ol>
      <GameBoard logInfo={logInfo} boxClickedHandler={boxClickedHandler} />
    </div>
  );
}

export default App;
