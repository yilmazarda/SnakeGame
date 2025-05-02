import React, { useEffect, useState } from 'react'

const GameBoard = () => {
  const boardSize = 20;
  const [snakePosition, setSnakePosition] = useState([10,10])
  const [direction, setDirection] = useState('right')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSnakePosition(([row, col]) => {
        if (direction === 'right') {
          return [row, col + 1];
        } else if (direction === 'left') {
          return [row, col - 1];
        } else if (direction === 'down') {
          return [row + 1, col];
        } else if (direction === 'up') {
          return [row - 1, col];
        }
      });
    }, 500); // 500ms = yarım saniyede bir hareket
  
    return () => clearInterval(intervalId); // temizle
  }, [direction]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowUp" &&  direction !== 'down') {
        setDirection('up');
      }
      if (e.key === "ArrowDown" &&  direction !== 'up') {
        setDirection('down');
      }
      if (e.key === "ArrowLeft" &&  direction !== 'right') {
        setDirection('left');
      }
      if (e.key === "ArrowRight" &&  direction !== 'left') {
        setDirection('right');
      }
    };
      
    window.addEventListener('keydown', handleKeyDown);

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    }
  }, [direction]);

  const isSnakeCell = (row, col) => {
    return snakePosition[0] === row && snakePosition[1] === col;
  }

  const createBoard = () => {
    const cells = [];
    for (let row=0; row<boardSize; row++) {
      for (let col=0; col<boardSize; col++) {
        const isSnake = isSnakeCell(row, col);
        cells.push(
        <div 
        className={`cell ${isSnake ? 'snake' : ''}`}
        key={`${row}-${col}`}
        data-row={row}
        data-col={col}></div>)
      }
    }
    return cells;
  }


  return (
    <div className="game-board">
      {createBoard()}
    </div>
  )
}

export default GameBoard