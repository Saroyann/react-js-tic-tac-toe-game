import { useState } from 'react'

function Square({value, onSquareClick}) {
return  <button className='square' onClick={onSquareClick}>{value}</button>
}

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <div className='board'>
    <Square value={squares[0]} />
    <Square value={squares[1]} />
    <Square value={squares[2]} />
    <Square value={squares[3]} />
    <Square value={squares[4]} />
    <Square value={squares[5]} />
    <Square value={squares[6]} />
    <Square value={squares[7]} />
    <Square value={squares[8]} />
    </div>
  )
}

// meski ku bukan yang pertama di hati mu tapi, cinta ku terbaik untukmuu meski ku bukan bintang di langiiit tapi  cintaku yang terbaiik lmaoo..aseli capek hidup kyajk gubu terus akau bakal bunuh diri aja kali yak? ga sih kan aku pengen hidup ngapain mati?? manusia sejati nya tidak ada yang ingin mati, mereka hanya ingin lepas dari beban kehidupan..biarpun merek abunuh diri mereka [sti bakal menjai aa ys mendiai auyaf menjad a-payuff emdnjai [u7ajf mnedjki ap yang mendia [aayjn]]]
