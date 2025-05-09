import React from 'react'

const MainScreen = ({ setPlayedOnce }) => {
  return (
    <div className="main-screen">
        <img className="snake-image" src="snake.png" />
        <h1>Snake Game</h1>
        <button className="play-again-button" onClick={() => setPlayedOnce(prev => !prev)}>Play</button>
    </div>
  )
}

export default MainScreen