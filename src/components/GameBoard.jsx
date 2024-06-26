import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  function handlePlayerMove(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const newGameBoard = [
        ...prevGameBoard.map(innerArray => [...innerArray]),
      ];
      newGameBoard[rowIndex][colIndex] = "X";
      return newGameBoard;
    });
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>handlePlayerMove(rowIndex,colIndex)}>{symbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
