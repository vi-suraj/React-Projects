import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

function handlePlayer(tunrs) {
  let currentActiveTurn = "X";

  if (tunrs.length > 0 && tunrs[0].player === "X") {
    currentActiveTurn = "O";
  }
  return currentActiveTurn;
}

function App() {
  const [gameTurn, setGameTurn] = useState([]);

  let activePlayer = handlePlayer(gameTurn);

  function handleActivePlayer(rowIndex, colIndex) {
    setGameTurn((prevTurn) => {
      let currentActiveTurn = handlePlayer(prevTurn);

      const updatedTurn = [{ square: { row: rowIndex, col: colIndex }, player: currentActiveTurn }, ...prevTurn];
      return updatedTurn;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={"Player1"} symbol={"X"} isActive={activePlayer === "X"} />
          <Player initialName={"Player2"} symbol={"O"} isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectedSquare={handleActivePlayer} turns={gameTurn} />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
