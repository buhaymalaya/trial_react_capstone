import { useState, useEffect } from 'react';

export default function MazeGameComponent() {
  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    const fetchGameState = async () => {
      try {
        const response = await fetch('https://capstone-draft-flask.onrender.com/maze/game_state');

        if (!response.ok) {
          throw new Error(`Failed to fetch game state: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setGameState(data);
      } catch (error) {
        if (error instanceof TypeError) {
            console.error('Network error occurred:', error.message);
          } else {
            console.error('Error fetching game state:', error.message);
      }
    }
};
    fetchGameState();
  }, []);

  if (!gameState) {
    return <div>Loading...</div>;
  }

  const { maze, player_position, goal_position } = gameState;

  const renderMazeGrid = () => {
    return maze.map((row, rowIndex) => (
      <div key={rowIndex} style={{ display: 'flex' }}>
        {row.map((cell, columnIndex) => (
          <div
            key={`${rowIndex}-${columnIndex}`}
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: cell === 1 ? 'black' : 'white',
              border: '1px solid gray',
            }}
          >
            {player_position[0] === columnIndex && player_position[1] === rowIndex && 'P'}
            {goal_position[0] === columnIndex && goal_position[1] === rowIndex && 'G'}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div>
      {renderMazeGrid()}
    </div>
  );
}
