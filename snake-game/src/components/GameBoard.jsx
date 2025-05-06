import React, { useEffect, useReducer, useRef, useState } from 'react'

const GameBoard = ({ score, setScore, gameOver, setGameOver }) => {
  const boardSize = 20;
  const [snakePosition, setSnakePosition] = useState([[10,10]]);
  const [direction, setDirection] = useState('right');
  const [nextDirection, setNextDirection] = useState('right');
  const [foodPosition, setFoodPosition] = useState([0,0]);

  useEffect(() => {
    let x = Math.floor(Math.random() * (boardSize-1));
    let y = Math.floor(Math.random() * (boardSize-1));
    setFoodPosition([x,y])
  }, [score]);

  useEffect(() => {
    for(let i=1; i<snakePosition.length; i++) {
      if(snakePosition[0][0] === snakePosition[i][0] && snakePosition[0][1] === snakePosition[i][1]) {
        setGameOver(true);
      }
    }
  }, [snakePosition]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const head = snakePosition[0];

      let newHead;
      
      switch(nextDirection) {
        case 'right':
          newHead = [head[0], (head[1]+1) % boardSize];
          break;
        case 'left':
          newHead = [head[0], head[1] === 0 ? boardSize - 1 : head[1] - 1];
          break;
        case 'down':
          newHead = [(head[0]+1) % boardSize, head[1]];
          break;
        case 'up':
          newHead = [head[0] === 0 ? boardSize - 1 : head[0] - 1, head[1]];
          break;
      }
      const ateFood = newHead[0] === foodPosition[0] && newHead[1] === foodPosition[1];

      let newSnake;
      if (ateFood) {
        newSnake = [newHead, ...snakePosition];
        setScore(prev => prev + 1);
      } else {
        newSnake = [newHead, ...snakePosition.slice(0, -1)];
      }
      
      setSnakePosition(newSnake);
      setDirection(nextDirection);
    }, 500); // 500ms = one step each half second
  
    return () => clearInterval(intervalId); // temizle
  }, [snakePosition, nextDirection]);


  const directionRef = useRef(direction);

  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const currentDirection = directionRef.current;
      if (e.key === "ArrowUp" &&  currentDirection !== 'down') {
        setNextDirection('up');
      }
      if (e.key === "ArrowDown" &&  currentDirection !== 'up') {
        setNextDirection('down');
      }
      if (e.key === "ArrowLeft" &&  currentDirection !== 'right') {
        setNextDirection('left');
      }
      if (e.key === "ArrowRight" &&  currentDirection !== 'left') {
        setNextDirection('right');
      }
    };
      
    window.addEventListener('keydown', handleKeyDown);

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  const isSnakeCell = (row, col) => {
    for(let snakeCell = 0; snakeCell < snakePosition.length; snakeCell++) {
      if(snakePosition[snakeCell][0] === row && snakePosition[snakeCell][1] === col) {
        return true;
      }
    }
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