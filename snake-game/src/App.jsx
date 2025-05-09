import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameBoard from './components/GameBoard'
import ScoreBoard from './components/ScoreBoard'
import GameOverScreen from './components/GameOverScreen'

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if(gameOver) {
      setBest(Math.max(score, best));
    }
    
  }, [gameOver]);

  return (
    <>
        {
          !gameOver ?
          <>
          <ScoreBoard score={score} best={best}/>
          <GameBoard score={score} setScore={setScore} gameOver={gameOver} setGameOver={setGameOver}/>
          </>
          :
          <GameOverScreen score={score} setScore={setScore} best={best} gameOver={gameOver} setGameOver={setGameOver}/>
        }
    </>
  )
}

export default App
