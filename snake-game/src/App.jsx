import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameBoard from './components/GameBoard'

function App() {
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="wrapper">
        <div className="score-board">
          <div className="score">
            <p className='oswald-regular'>Score</p>
            <p className='oswald-regular'>{score}</p>
          </div>
          <div className="best">
            <p className='oswald-regular'>Best</p>
            <p className='oswald-regular'>0</p>
          </div>
        </div>

        <GameBoard score={score} setScore={setScore}/>
      </div>
    </>
  )
}

export default App
