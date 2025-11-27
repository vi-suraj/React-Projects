import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleActivePlayer(rowIndex, colIndex) {
    setActivePlayer((currentActivePlayer) => (currentActivePlayer === "X" ? "O" : "X"));
    setGameTurn((prevTurn) => {
      let currentActiveTurn = "X";

      if (prevTurn.length > 0 && prevTurn[0].player === "X") {
        currentActiveTurn = "O";
      }

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
      <Log />
    </main>
  );
}

export default App;
