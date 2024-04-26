// import React, { useState, useEffect } from 'react';

// const Maze = ({ maze, playerPosition, setPlayerPosition, resetGame, WALL_COLOR, PATH_COLOR, CELL_SIZE, PLAYER_COLOR, GOAL_COLOR }) => {
//     const [goalPosition, setGoalPosition] = useState({ x: 0, y: 0 });

//     // Update goal position when maze changes
//     useEffect(() => {
//         if (maze) {
//             const goal = maze.reduce((acc, row, y) => {
//                 const x = row.findIndex(cell => cell === 2);
//                 if (x !== -1) return { x, y };
//                 return acc;
//             }, { x: 0, y: 0 });
//             setGoalPosition(goal);
//         }
//     }, [maze]);

//     useEffect(() => {
//         const handleKeyDown = (event) => {
//             if (maze) {
//                 const { key } = event;
//                 let { x, y } = playerPosition;

//                 // Update player position based on key pressed
//                 if (key === 'ArrowUp' && y > 0 && maze[y - 1][x] !== 1) {
//                     y -= 1;
//                 } else if (key === 'ArrowDown' && y < maze.length - 1 && maze[y + 1][x] !== 1) {
//                     y += 1;
//                 } else if (key === 'ArrowLeft' && x > 0 && maze[y][x - 1] !== 1) {
//                     x -= 1;
//                 } else if (key === 'ArrowRight' && x < maze[0].length - 1 && maze[y][x + 1] !== 1) {
//                     x += 1;
//                 }

//                 // Update player position state
//                 setPlayerPosition({ x, y });
//             }
//         };

//         // Add event listener for keydown event
//         document.addEventListener('keydown', handleKeyDown);

//         // Remove event listener on component unmount
//         return () => {
//             document.removeEventListener('keydown', handleKeyDown);
//         };
//     }, [maze, playerPosition, setPlayerPosition]);

//     useEffect(() => {
//         const gameLoop = setInterval(() => {
//             if (maze) {
//                 // Fill screen with black
//                 const canvas = document.getElementById('mazeCanvas');
//                 const ctx = canvas.getContext('2d');
//                 ctx.fillStyle = WALL_COLOR;
//                 ctx.fillRect(0, 0, canvas.width, canvas.height);

//                 // Draw maze
//                 for (let y = 0; y < maze.length; y++) {
//                     for (let x = 0; x < maze[y].length; x++) {
//                         const color = maze[y][x] === 1 ? WALL_COLOR : PATH_COLOR;
//                         ctx.fillStyle = color;
//                         ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
//                     }
//                 }

//                 // Draw player
//                 const { x: playerX, y: playerY } = playerPosition;
//                 ctx.fillStyle = PLAYER_COLOR;
//                 ctx.beginPath();
//                 ctx.arc(playerX * CELL_SIZE + CELL_SIZE / 2, playerY * CELL_SIZE + CELL_SIZE / 2, CELL_SIZE / 3, 0, 2 * Math.PI);
//                 ctx.fill();

//                 // Draw goal
//                 const { x: goalX, y: goalY } = goalPosition;
//                 ctx.fillStyle = GOAL_COLOR;
//                 ctx.beginPath();
//                 ctx.arc(goalX * CELL_SIZE + CELL_SIZE / 2, goalY * CELL_SIZE + CELL_SIZE / 2, CELL_SIZE / 3, 0, 2 * Math.PI);
//                 ctx.fill();

//                 // Check for win condition
//                 if (playerPosition.x === goalX && playerPosition.y === goalY) {
//                     console.log("You win!");
//                     resetGame(); // Assuming resetGame is a prop function passed down from the parent component
//                 }
//             }
//         }, 1000 / 60); // Adjust the interval as needed (60 frames per second)

//         return () => clearInterval(gameLoop); // Cleanup on unmount
//     }, [maze, playerPosition, resetGame, WALL_COLOR, PATH_COLOR, CELL_SIZE, PLAYER_COLOR, GOAL_COLOR, goalPosition]);

//     return (
//         <canvas id="mazeCanvas" width={maze && maze[0].length * CELL_SIZE} height={maze && maze.length * CELL_SIZE}></canvas>
//     );
// };

// export default Maze;
