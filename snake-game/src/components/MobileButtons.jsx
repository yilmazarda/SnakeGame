import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
const MobileButtons = ({ setNextDirection, direction}) => {
    const changeDirection = (newDirection) => {
        if (direction === newDirection) return;
        if (direction === 'left' && newDirection === 'right') return;
        if (direction === 'right' && newDirection === 'left') return;
        if (direction === 'up' && newDirection === 'down') return;
        if (direction === 'down' && newDirection === 'up') return;
        setNextDirection(newDirection);
    }
  return (
    <div className="mobile-buttons">
        <button className="button left" onTouchStart={() => changeDirection('left')}><FaArrowLeft/></button>
        <button className="button down" onTouchStart={() => changeDirection('down')}><FaArrowDown/></button>
        <button className="button up" onTouchStart={() => changeDirection('up')}><FaArrowUp/></button>
        <button className="button right" onTouchStart={() => changeDirection('right')}><FaArrowRight/></button>
    </div>
  )
}

export default MobileButtons