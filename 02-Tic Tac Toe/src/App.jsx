import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function handlePlayer(tunrs) {
  let currentActiveTurn = "X";

  if (tunrs.length > 0 && tunrs[0].player === "X") {
    currentActiveTurn = "O";
  }
  return currentActiveTurn;
}

function App() {
  const [gameTurn, setGameTurn] = useState([]);

  const gameBoard = [...initialGameBoard.map((inner) => [...inner])];

  let winner;

  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column];
    const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol;
    }
  }

  let activePlayer = handlePlayer(gameTurn);

  function handleActivePlayer(rowIndex, colIndex) {
    setGameTurn((prevTurn) => {
      let currentActiveTurn = handlePlayer(prevTurn);

      const updatedTurn = [{ square: { row: rowIndex, col: colIndex }, player: currentActiveTurn }, ...prevTurn];
      return updatedTurn;
    });
  }

  const draw = gameTurn.length === 9 && !winner;

  function handleRestart() {
    setGameTurn([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={"Player1"} symbol={"X"} isActive={activePlayer === "X"} />
          <Player initialName={"Player2"} symbol={"O"} isActive={activePlayer === "O"} />
        </ol>
        {(winner || draw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectedSquare={handleActivePlayer} board={gameBoard} />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
