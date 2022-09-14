import React, { useState } from "react";
import Cell from "../components/Cell";

/* const boardStructure = [
  [{
    color: "w",
    canMove: false,
  }, {
    color: "b",
    canMove: false,
  }, "w", "b", "w", "b", "w", "b"],
  ["b", "w", "b", "w", "b", "w", "b", "w"],
  ["w", "b", "w", "b", "w", "b", "w", "b"],
  ["b", "w", "b", "w", "b", "w", "b", "w"],
  ["w", "b", "w", "b", "w", "b", "w", "b"],
  ["b", "w", "b", "w", "b", "w", "b", "w"],
  ["w", "b", "w", "b", "w", "b", "w", "b"],
  ["b", "w", "b", "w", "b", "w", "b", "w"],
]; */

const boardStructure = [
  [
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
  ],
  [
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
  ],
  [
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
  ],
  [
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
  ],
  [
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
  ],
  [
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
  ],
  [
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
  ],
  [
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
    {
      color: "b",
      canMove: false,
    },
    {
      color: "w",
      canMove: false,
    },
  ],
];

const ChessBoard = () => {
  const [board, setBoard] = useState(
    JSON.parse(JSON.stringify(boardStructure))
  ); // Deep Copy

  // Get all possible moves for a knight
  const getKnightMoves = (row, col) => {
    // Set Board Default
    setBoard(JSON.parse(JSON.stringify(boardStructure))); // Deep Copy
    console.log("Row: ", row, "Col: ", col);
    const moves = [];
    // Up 2, left 1
    if (row - 2 >= 0 && col - 1 >= 0) {
      moves.push([row - 2, col - 1]);
    }
    // Up 2, right 1
    if (row - 2 >= 0 && col + 1 < 8) {
      moves.push([row - 2, col + 1]);
    }
    // Up 1, left 2
    if (row - 1 >= 0 && col - 2 >= 0) {
      moves.push([row - 1, col - 2]);
    }
    // Up 1, right 2
    if (row - 1 >= 0 && col + 2 < 8) {
      moves.push([row - 1, col + 2]);
    }
    // Down 2, left 1
    if (row + 2 < 8 && col - 1 >= 0) {
      moves.push([row + 2, col - 1]);
    }
    // Down 2, right 1
    if (row + 2 < 8 && col + 1 < 8) {
      moves.push([row + 2, col + 1]);
    }
    // Down 1, left 2
    if (row + 1 < 8 && col - 2 >= 0) {
      moves.push([row + 1, col - 2]);
    }
    // Down 1, right 2
    if (row + 1 < 8 && col + 2 < 8) {
      moves.push([row + 1, col + 2]);
    }
    console.log(moves);
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      newBoard[row][col].canMove = true;
      moves.forEach((move) => {
        newBoard[move[0]][move[1]].canMove = true;
      });
      return newBoard;
    });
  };
  return (
    <div
      style={{
        border: "1px solid gray",
        display: "inline-block",
        margin: "3rem",
      }}
    >
      {board.map((row, rowIndex) => {
        return (
          <div className="row" key={rowIndex}>
            {row.map((cell, cellIndex) => {
              return (
                <Cell
                  key={cellIndex}
                  color={cell.color}
                  canMove={cell.canMove}
                  onClick={() => getKnightMoves(rowIndex, cellIndex)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ChessBoard;
