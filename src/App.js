import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <div className="square dark"><i className="fas fa-chess-rook black"></i></div>
          <div className="square light"><i className="fas fa-chess-knight black"></i></div>
          <div className="square dark"><i className="fas fa-chess-bishop black"></i></div>
          <div className="square light"><i className="fas fa-chess-queen black"></i></div>
          <div className="square dark"><i className="fas fa-chess-king black"></i></div>
          <div className="square light"><i className="fas fa-chess-bishop black"></i></div>
          <div className="square dark"><i className="fas fa-chess-knight black"></i></div>
          <div className="square light"><i className="fas fa-chess-rook black"></i></div>
        </div>
        <div className="row">
          <div className="square light"><i className="fas fa-chess-pawn black"></i></div>
          <div className="square dark"><i className="fas fa-chess-pawn black"></i></div>
          <div className="square light"><i className="fas fa-chess-pawn black"></i></div>
          <div className="square dark"><i className="fas fa-chess-pawn black"></i></div>
          <div className="square light"><i className="fas fa-chess-pawn black"></i></div>
          <div className="square dark"><i className="fas fa-chess-pawn black"></i></div>
          <div className="square light"><i className="fas fa-chess-pawn black"></i></div>
          <div className="square dark"><i className="fas fa-chess-pawn black"></i></div>
        </div>
        <div className="row">
          <div className="square dark"></div>
          <div className="square light"></div>
          <div className="square dark"></div>
          <div className="square light"></div>
          <div className="square dark"></div>
          <div className="square light"></div>
          <div className="square dark"></div>
          <div className="square light"></div>
        </div>
        <div className="row">
          <div className="square light"></div>
          <div className="square dark"></div>
          <div className="square light"></div>
          <div className="square dark"></div>
          <div className="square light"></div>
          <div className="square dark"></div>
          <div className="square light"></div>
          <div className="square dark"></div>
        </div>
        <div className="row">
          <div className="square dark"></div>
          <div className="square light"></div>
          <div className="square dark"></div>
          <div className="square light"></div>
          <div className="square dark"></div>
          <div className="square light"></div>
          <div className="square dark"></div>
          <div className="square light"></div>
        </div>
        <div className="row">
          <div className="square light"></div>
          <div className="square dark"></div>
          <div className="square light"></div>
          <div className="square dark"></div>
          <div className="square light"></div>
          <div className="square dark"></div>
          <div className="square light"></div>
          <div className="square dark"></div>
        </div>
        <div className="row">
          <div className="square dark"><i className="fas fa-chess-pawn white"></i></div>
          <div className="square light"><i className="fas fa-chess-pawn white"></i></div>
          <div className="square dark"><i className="fas fa-chess-pawn white"></i></div>
          <div className="square light"><i className="fas fa-chess-pawn white"></i></div>
          <div className="square dark"><i className="fas fa-chess-pawn white"></i></div>
          <div className="square light"><i className="fas fa-chess-pawn white"></i></div>
          <div className="square dark"><i className="fas fa-chess-pawn white"></i></div>
          <div className="square light"><i className="fas fa-chess-pawn white"></i></div>
        </div>
        <div className="row">
          <div className="square light"><i className="fas fa-chess-rook white"></i></div>
          <div className="square dark"><i className="fas fa-chess-knight white"></i></div>
          <div className="square light"><i className="fas fa-chess-bishop white"></i></div>
          <div className="square dark"><i className="fas fa-chess-queen white"></i></div>
          <div className="square light"><i className="fas fa-chess-king white"></i></div>
          <div className="square dark"><i className="fas fa-chess-bishop white"></i></div>
          <div className="square light"><i className="fas fa-chess-knight white"></i></div>
          <div className="square dark"><i className="fas fa-chess-rook white"></i></div>
        </div>
      </div>
    </div>
  );
};

export default App;
