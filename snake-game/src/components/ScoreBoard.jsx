import React from 'react'

const ScoreBoard = ({ score, best }) => {
  return (
    <div className="wrapper">
        <div className="score-board">
          <div className="score">
              <p className='oswald-regular'>Score</p>
              <p className='oswald-regular'>{score}</p>
          </div>
          <div className="best">
              <p className='oswald-regular' style={{color: "red"}}>Best</p>
              <p className='oswald-regular' style={{color: "red"}}>{best}</p>
          </div>
        </div>
    </div>
  )
}

export default ScoreBoard