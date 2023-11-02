import React from 'react'

const Gameover = ({ winner }) => {
  return (
    <div id='game-over'>
        <h2>Game Over!</h2>
        {winner === 'draw' ? <p>It's a draw</p> : <p>{winner} won! </p> }
        <p><button>Rematch</button></p>
    </div>
  )
}

export default Gameover