import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src.style.css'

//REACT COMPONENT: Square
// Need this.state so the Square rcomponant stores the click. 
class Square extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: null,
    };
  }
    render() {
      return (
        <button 
        className="square" 
        onClick={() => this.props.onClick({value: 'X'})} //event handler to store click.
        >
          {this.props.value} // Render method 
        </button>
      );
    }
  }

  // REACT COMPONENT subclass: Board
  // lifting state into the parent component. 
  // Board component to maintain which squares are filled. 
  class Board extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        square: Array(9).fill(null), // array of 9 nulls. 
      };
    }
    renderSquare(i) { 
      return <Square value={this.state.squares[i]} 
      onClick={() => this.handleclick(i)}  
      />; // passing a prop called value to the Square component
    };
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
//   REACT COMPONENT: GAME
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  