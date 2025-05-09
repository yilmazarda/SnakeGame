import React from 'react'

const GameOverScreen = ({ score, best, setGameOver }) => {
  return (
    <div className='game-over-screen'>
        <h1>Game Over</h1>
        <h2> <span style={{color: "red"}}>Best: {best}</span> <br/> Score: {score}</h2>
        <button className="play-again-button" onClick={() => setGameOver(prev => !prev)}>Play Again</button>
    </div>

  )
}

export default GameOverScreen