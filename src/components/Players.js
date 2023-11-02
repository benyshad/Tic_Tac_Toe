import React from 'react'
import { useState } from 'react'

const Players = ({ name, symbol, isActive, onRename }) => {
  const[playerName, setPlayerName] = useState(name)
  const [editing, setEditing] = useState(false)

  const editingHandler = () => {
    setEditing((editing) => !editing)

    if (editing) {
      onRename(symbol, playerName)
    }
  }

  const nameChangeHandler = (event) => {
    setPlayerName(event.target.value)
  }

  


  return (
    <li className={isActive === symbol ? 'active' : undefined}>
        <span className="player">
          {editing ? <input type="text" value={playerName} onChange={nameChangeHandler} /> : <span className="player-name"> {playerName} </span> }
          <span className="player-symbol"> {symbol} </span>
        </span>
        <button onClick={editingHandler}>{editing ? 'Save' : 'Edit'}</button>
    </li>
  )
}

export default Players