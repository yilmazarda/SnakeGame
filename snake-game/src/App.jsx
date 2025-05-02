import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrapper">
        <div className="score-board">
          <div className="score">
            <p>Score</p>
            <p>0</p>
          </div>
          <div className="best">
            <p>Best</p>
            <p>0</p>
          </div>
        </div>

        <div className="play-board">
          
        </div>
      </div>
    </>
  )
}

export default App
