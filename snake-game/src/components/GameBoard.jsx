import React, { useEffect, useState } from 'react'

const GameBoard = ({ score, setScore, gameOver, setGameOver }) => {
  const boardSize = 20;
  const [snakePosition, setSnakePosition] = useState([10,10]);
  const [direction, setDirection] = useState('right');
  const [nextDirection, setNextDirection] = useState('right');
  const [foodPosition, setFoodPosition] = useState([0,0]);

  useEffect(() => {
    let x = Math.floor(Math.random() * (boardSize-1));
    let y = Math.floor(Math.random() * (boardSize-1));
    setFoodPosition([x,y])
  }, [score]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      
      setSnakePosition(([row, col]) => {
        let newCol = col;
        let newRow = row;
        if (nextDirection === 'right') {
          newCol = (col + 1) % boardSize
        } else if (nextDirection === 'left') {
          newCol = col === 0 ? boardSize - 1 : col - 1;
        } else if (nextDirection === 'down') {
          newRow = (row + 1) % boardSize;
        } else if (nextDirection === 'up') {
          newRow = row === 0 ? boardSize - 1 : row - 1;
        }

        return [newRow, newCol];
      });
      setDirection(nextDirection);
    }, 500); // 500ms = yarım saniyede bir hareket
  
    return () => clearInterval(intervalId); // temizle
  }, [nextDirection]);

  useEffect(() => {
    if (snakePosition[0] === foodPosition[0] && snakePosition[1] === foodPosition[1]) {
      setScore(prev => prev + 1);
    }
  }, [snakePosition, foodPosition]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowUp" &&  direction !== 'down') {
        setNextDirection('up');
      }
      if (e.key === "ArrowDown" &&  direction !== 'up') {
        setNextDirection('down');
      }
      if (e.key === "ArrowLeft" &&  direction !== 'right') {
        setNextDirection('left');
      }
      if (e.key === "ArrowRight" &&  direction !== 'left') {
        setNextDirection('right');
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

  const isFoodCell = (row, col) => {
    return foodPosition[0] === row && foodPosition[1] === col;
  }

  const createBoard = () => {
    const cells = [];
    for (let row=0; row<boardSize; row++) {
      for (let col=0; col<boardSize; col++) {
        const isSnake = isSnakeCell(row, col);
        const isFood = isFoodCell(row, col);
        cells.push(
        <div 
        className={`cell ${isSnake ? 'snake' : ''} ${isFood ? 'food' : ''}`}
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