import React from 'react';
import './App.css';

const initialBoard = [
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
];


const pieceClasses = {
  'r': 'fas fa-chess-rook', 'n': 'fas fa-chess-knight', 'b': 'fas fa-chess-bishop', 'q': 'fas fa-chess-queen', 'k': 'fas fa-chess-king', 'p': 'fas fa-chess-pawn',
  'R': 'fas fa-chess-rook', 'N': 'fas fa-chess-knight', 'B': 'fas fa-chess-bishop', 'Q': 'fas fa-chess-queen', 'K': 'fas fa-chess-king', 'P': 'fas fa-chess-pawn'
};

const Board = () => {
  const size = 8; 
  const rows = [];
  
  for (let row = 0; row < size; row++) {
    const squares = [];
    for (let col = 0; col < size; col++) {
      const isDark = (row + col) % 2 === 0;
      const piece = initialBoard[row][col];
      const pieceClass = piece ? pieceClasses[piece] : '';
      const pieceColor = row < 2 ? 'black' : 'white';
      
      squares.push(
        <div
          key={`${row}-${col}`}
          className={`square ${isDark ? 'dark' : 'light'} ${pieceColor}`}
        >
          {piece && <i className={pieceClass}></i>}
        </div>
      );
    }
    rows.push(
      <div key={row} className="row">
        {squares}
      </div>
    );
  }
  
  return <div className="board">{rows}</div>;
};

const App = () => {
  return (
    <div className="App">
      <Board />
    </div>
  );
};

export default App;
