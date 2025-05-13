# Snake Game

A classic Snake game built with React. Control a snake to eat food and grow longer without crashing into yourself.

## Screenshots

![Desktop View](/screenshots/screenshot-desktop.png)

![Mobile View](/screenshots/screenshot-mobile.png)

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [How to Play](#how-to-play)
- [Controls](#controls)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Future Improvements](#future-improvements)
- [License](#license)

## Features

- Classic Snake gameplay
- Score tracking
- Best score tracking
- Responsive design with mobile controls
- Sound effects for eating food and game over
- Clean and intuitive UI

## Demo

To see the game in action, clone the repository and follow the installation instructions below.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yilmazarda/snake-game.git
cd snake-game
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173/` (or the port shown in your terminal)

## How to Play

1. Click the "Play" button on the main screen to start the game
2. Control the snake using keyboard arrows or WASD keys (mobile users can use on-screen buttons)
3. Eat the red food to grow longer and increase your score
4. Avoid crashing into yourself
5. Try to beat your high score!

## Controls

### Desktop:
- **Arrow Keys**: Change direction (Up, Down, Left, Right)
- **WASD Keys**: Alternative controls (W = Up, A = Left, S = Down, D = Right)

### Mobile:
- **On-screen buttons**: Tap the directional arrows at the bottom of the screen

## Technologies Used

- React
- Vite
- React Icons
- CSS3
- HTML5
- JavaScript (ES6+)

## Project Structure

```
snake-game/
├── public/
│   ├── snake.png
│   └── sounds/
│       ├── eat.mp3
│       └── lose.mp3
├── src/
│   ├── components/
│   │   ├── GameBoard.jsx       # Main game logic and board rendering
│   │   ├── GameOverScreen.jsx  # Game over display
│   │   ├── MainScreen.jsx      # Welcome screen
│   │   ├── MobileButtons.jsx   # Mobile controls
│   │   └── ScoreBoard.jsx      # Score display
│   ├── App.css                 # Main styles
│   ├── App.jsx                 # Main application component
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point
└── README.md
```

## Game Mechanics

- The snake moves continuously in the current direction
- The game board is 20x20 cells
- The snake wraps around the board edges (if you go off one side, you appear on the opposite side)
- Food appears randomly on the board
- Each time the snake eats food:
  - Its length increases by one
  - The score increases by one
  - A new food appears elsewhere on the board
- The game ends when the snake runs into itself
- The best score is saved for the current session

## Future Improvements

- Add difficulty levels (speed settings)
- Implement obstacles or maze mode
- Add power-ups
- Create a leaderboard with local storage
- Add game pause functionality
- Add theme options (different colors/styles)
- Implement responsive design for different screen sizes

## License

This project is open source and available for personal and educational use.

---

Enjoy the game! If you have any questions or suggestions, please open an issue or submit a pull request.
