import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameBoard from './components/GameBoard'
import ScoreBoard from './components/ScoreBoard'

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setBest(Math.max(score, best));
  }, [gameOver]);

  return (
    <>
        <ScoreBoard score={score} best={best}/>
        <GameBoard score={score} setScore={setScore} gameOver={gameOver} setGameOver={setGameOver}/>
    </>
  )
}

export default App
