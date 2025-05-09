import React from 'react'

const GameOverScreen = ({ score, best, gameOver, setGameOver}) => {
  return (
    <div className='game-over-screen'>
        <h1>Game Over</h1>
        <h2>Best: {best} <br/>Score: {score}</h2>
        <button className="play-again-button" onClick={() => setGameOver(prev => !prev)}>Play Again</button>
    </div>

  )
}

export default GameOverScreen