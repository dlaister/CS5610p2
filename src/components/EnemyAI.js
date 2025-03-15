// src/components/EnemyAI.js
import { useState } from 'react';

const EnemyAI = ({ ships, setEnemyBoard }) => {
    const BOARD_SIZE = 10;

    // Function to randomly assign positions for ships
    const randomPosition = (size, isHorizontal) => {
        let position;
        if (isHorizontal) {
            const row = Math.floor(Math.random() * BOARD_SIZE);
            const col = Math.floor(Math.random() * (BOARD_SIZE - size + 1));
            position = Array.from({ length: size }, (_, i) => row * BOARD_SIZE + (col + i));
        } else {
            const row = Math.floor(Math.random() * (BOARD_SIZE - size + 1));
            const col = Math.floor(Math.random() * BOARD_SIZE);
            position = Array.from({ length: size }, (_, i) => (row + i) * BOARD_SIZE + col);
        }
        return position;
    };

    // Function to place ships on the enemy board randomly
    const placeShip = (ship, newEnemyBoard) => {
        const { size, id } = ship;
        let placed = false;

        while (!placed) {
            const isHorizontal = Math.random() > 0.5;
            const positions = randomPosition(size, isHorizontal);

            // Check if any of the positions are already occupied
            const isValidPlacement = positions.every((pos) => newEnemyBoard[pos] === null);

            if (isValidPlacement) {
                positions.forEach((pos) => newEnemyBoard[pos] = id);
                placed = true;
            }
        }
    };

    // Place ships on the enemy board
    const placeShipsRandomly = () => {
        let newEnemyBoard = Array(100).fill(null);

        ships.forEach((ship) => placeShip(ship, newEnemyBoard));

        setEnemyBoard(newEnemyBoard); // Update the enemy board state with the AI's ship placements
    };

    // Call this function when the game is reset or loaded
    const placeAIShips = () => {
        placeShipsRandomly();
    };

    return (
        <div>
            {/* You can add some debug info here if needed */}
            <button onClick={placeAIShips}>Place AI Ships</button>
        </div>
    );
};

export default EnemyAI;
