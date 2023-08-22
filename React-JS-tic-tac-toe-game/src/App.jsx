import { useState } from 'react'

function Square({value, onSquareClick}) {
return  <button className='square' onClick={onSquareClick}>{value}</button>
}

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] =useState(true);

  function hanndleClick(i) {
    const nextSquare = squares.slice();
    nextSquare[i] = 'X';
    setSquares(nextSquare);
  }

  return (
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
  )
}
