import { useEffect, useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard'
import ScoreBoard from './components/ScoreBoard'
import GameOverScreen from './components/GameOverScreen'
import MainScreen from './components/MainScreen'

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [playedOnce, setPlayedOnce] = useState(false);

  useEffect(() => {
    if(gameOver) {
      setBest(Math.max(score, best)); //check if score is greater than best
    }
    
  }, [gameOver]);

  return (
    <>
        {
          !playedOnce ?
          <>
            <MainScreen setPlayedOnce={setPlayedOnce}/>
          </>
          :
          !gameOver ? 
          <div className="wrapper">
            <ScoreBoard score={score} best={best}/>
            <GameBoard score={score} setScore={setScore} gameOver={gameOver} setGameOver={setGameOver}/>
          </div>
          :
            <GameOverScreen score={score} setScore={setScore} best={best} setGameOver={setGameOver}/>
        }
    </>
  )
}

export default App
