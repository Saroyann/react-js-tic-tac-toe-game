import { useState } from 'react'

function Square({ value, onSquareClick }) {
  return <button className='square' onClick={onSquareClick}>{value}</button>
}

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function hanndleClick(i) {
    const nextSquare = squares.slice();

    if (squares[i] || calculateWinner(squares)) return;

    nextSquare[i] = xIsNext ? 'X' : 'O'
    setSquares(nextSquare);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status ='';
  for(let i = 0 ; i < winner.length ; i++) {
    if(winner[i] === false) {
      status = 'draw'
    }
  }
  if(winner) {
    status = 'winner ' + winner;
  } else {
    status = 'next player ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
    <div className='status'>{status}</div>
    <div className='board'>
      <Square value={squares[0]} onSquareClick={() => hanndleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => hanndleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => hanndleClick(2)} />
      <Square value={squares[3]} onSquareClick={() => hanndleClick(3)} />
      <Square value={squares[4]} onSquareClick={() => hanndleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => hanndleClick(5)} />
      <Square value={squares[6]} onSquareClick={() => hanndleClick(6)} />
      <Square value={squares[7]} onSquareClick={() => hanndleClick(7)} />
      <Square value={squares[8]} onSquareClick={() => hanndleClick(8)} />
    </div>
    </>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return false;
}
