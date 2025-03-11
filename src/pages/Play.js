import { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/global.css';
import '../styles/sample.css';
import '../styles/play.css';
import Footer from '../components/Footer';

function Play() {
    // Board state: 10x10 grid (null represents empty)
    const [board, setBoard] = useState(Array(100).fill(null));

    // Ship state: Array of ships (example ships with random positions for now)
    const [ships, setShips] = useState([
        { id: '5x1', size: 5, placed: false, positions: [] },
        { id: '4x1', size: 4, placed: false, positions: [] },
        { id: '3x1', size: 3, placed: false, positions: [] },
        { id: '3x1', size: 3, placed: false, positions: [] },
        { id: '2x1', size: 2, placed: false, positions: [] },
    ]);

    // Handle drag start event to track which ship is being dragged
    const handleDragStart = (e, ship) => {
        e.dataTransfer.setData('ship', JSON.stringify(ship));  // Store the ship being dragged
    };

    // Handle drop event to place the ship on the board
    const handleDrop = (e, index) => {
        const ship = JSON.parse(e.dataTransfer.getData('ship'));
        const newBoard = [...board];

        // Check if the placement is valid (add your logic here for overlap, bounds)
        const newShipPositions = getShipPositions(index, ship.size);  // You'll define getShipPositions

        // If valid, place the ship
        if (newShipPositions) {
            ship.placed = true;
            ship.positions = newShipPositions;
            setShips([...ships]); // Update ships state
            // Mark positions on the board
            newShipPositions.forEach(pos => newBoard[pos] = ship.id);
            setBoard(newBoard); // Update board state
        }
    };

    // Helper function to calculate the positions of a ship based on start cell and size
    const getShipPositions = (startIndex, size) => {
        // Example logic: horizontal placement (adjust as needed)
        const positions = [];
        for (let i = 0; i < size; i++) {
            const newIndex = startIndex + i;
            if (newIndex < 100 && Math.floor(newIndex / 10) === Math.floor(startIndex / 10)) {
                positions.push(newIndex);
            } else {
                return null; // Invalid placement (out of bounds or wrapping)
            }
        }
        return positions;
    };

    return (
        <div className="play">
            <Navbar />
            <main>
                <header>
                    <h1>Battleship Sample Game</h1>
                </header>

                {/* Timer and Restart Button */}
                <h3>
                    Timer: <span className="red-text">00:05:32 </span>
                    <button className="restart-button">Restart</button>
                </h3>

                {/* Available Ships Box */}
                <div className="available-ships">
                    {ships.map((ship) => (
                        <div
                            key={ship.id}
                            className="ship"
                            draggable="true"
                            onDragStart={(e) => handleDragStart(e, ship)}
                        >
                            {ship.id}
                        </div>
                    ))}
                </div>

                {/* Player Board (10x10 Grid) */}
                <div className="player-board">
                    {board.map((cell, index) => (
                        <div
                            key={index}
                            className={`board-cell ${cell ? 'occupied' : ''}`}
                            onDrop={(e) => handleDrop(e, index)}
                            onDragOver={(e) => e.preventDefault()} // Allow drop
                        >
                            {cell && <span>{cell}</span>}
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Play;
