import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../styles/global.css';
import '../styles/play.css';
import Footer from '../components/Footer';

function Play() {
    const BOARD_SIZE = 10;

    // Board state (10x10 grid represented as a 1D array)
    const [board, setBoard] = useState(Array(100).fill(null));
    const [enemyBoard, setEnemyBoard] = useState(Array(100).fill(null));

    // Ship state
    const [ships, setShips] = useState([
        { id: 'Carrier 5x1', size: 5, placed: false, positions: [], isHorizontal: true },
        { id: 'Battleship 4x1', size: 4, placed: false, positions: [], isHorizontal: true },
        { id: 'Cruiser 3x1', size: 3, placed: false, positions: [], isHorizontal: true },
        { id: 'Submarine 3x1', size: 3, placed: false, positions: [], isHorizontal: true },
        { id: 'Destroyer 2x1', size: 2, placed: false, positions: [], isHorizontal: true },
    ]);

    // Game state
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [timer, setTimer] = useState(0);

    // Timer logic (start on first move, stop when game is over)
    useEffect(() => {
        let interval;
        if (gameStarted && !gameOver) {
            interval = setInterval(() => setTimer((t) => t + 1), 1000);
        }
        return () => clearInterval(interval);
    }, [gameStarted, gameOver]);

    // Handle ship drag start
    const handleDragStart = (e, ship) => {
        if (ship.placed) {
            e.preventDefault(); // Prevent dragging if ship is placed
        } else {
            e.dataTransfer.setData('ship', JSON.stringify(ship));
            e.target.style.opacity = '0.5'; // Makes dragging effect visible
        }
    };

    const handleDragEnd = (e) => {
        e.target.style.opacity = '1'; // Restore opacity after dragging
    };

    // Handle dropping a ship onto the board
    const handleDrop = (e, index) => {
        e.preventDefault();
        const ship = JSON.parse(e.dataTransfer.getData('ship'));

        if (ship.placed) return; // Prevent re-placing the same ship

        const newBoard = [...board];
        const newShipPositions = getShipPositions(index, ship.size, ship.isHorizontal);

        if (!newShipPositions) return; // Prevent invalid placement

        // Prevent ship overlap
        if (newShipPositions.some(pos => newBoard[pos] !== null)) {
            alert("Ships cannot overlap!");
            return;
        }

        // Place ship
        ship.placed = true;
        ship.positions = newShipPositions;
        setShips((prevShips) => prevShips.map(s => s.id === ship.id ? { ...s, placed: true, positions: newShipPositions } : s));

        newShipPositions.forEach(pos => newBoard[pos] = ship.id);
        setBoard(newBoard);
    };

    // Get ship positions based on orientation (horizontal/vertical)
    const getShipPositions = (startIndex, size, isHorizontal) => {
        const positions = [];
        for (let i = 0; i < size; i++) {
            let newIndex;
            if (isHorizontal) {
                newIndex = startIndex + i;
                if (newIndex < 100 && Math.floor(newIndex / BOARD_SIZE) === Math.floor(startIndex / BOARD_SIZE)) {
                    positions.push(newIndex);
                } else {
                    return null; // Prevent wrapping around
                }
            } else {
                newIndex = startIndex + i * BOARD_SIZE; // Vertical placement
                if (newIndex < 100) {
                    positions.push(newIndex);
                } else {
                    return null; // Prevent wrapping around
                }
            }
        }
        return positions;
    };

    // Rotate ship (toggle horizontal/vertical)
    const handleRotate = (shipId) => {
        setShips((prevShips) => prevShips.map(ship => {
            if (ship.id === shipId && !ship.placed) {
                return { ...ship, isHorizontal: !ship.isHorizontal };
            }
            return ship;
        }));
    };

    // Attack enemy board
    const attackEnemy = (index) => {
        if (!gameStarted) setGameStarted(true);
        if (gameOver || enemyBoard[index] !== null) return;

        let newBoard = [...enemyBoard];
        let hit = Math.random() > 0.5 ? "H" : "M";
        newBoard[index] = hit;
        setEnemyBoard(newBoard);

        // Check for game over
        if (!newBoard.includes(null)) {
            setGameOver(true);
        }
    };

    // Reset game (including timer)
    const resetGame = () => {
        setBoard(Array(100).fill(null));
        setEnemyBoard(Array(100).fill(null));
        setShips(ships.map(ship => ({ ...ship, placed: false, positions: [], isHorizontal: true })));
        setGameStarted(false);
        setTimer(0);
        setGameOver(false);
    };

    return (
        <div className="play">
            <Navbar />

            <main className="main">
                <header>
                    <h1>Battleship Sample Game</h1>
                </header>

                {/* Timer */}
                <p>Time: {timer} seconds</p>

                {/* Ship Selection & Drag Area */}
                <div className="ship-selection">
                    <h2>Available Ships</h2>
                    {ships.filter(ship => !ship.placed).map((ship) => (
                        <div key={ship.id} className="ship-container">
                            {/* Ship name with rotate button */}
                            <div
                                className="ship"
                                draggable={!ship.placed}
                                onDragStart={(e) => handleDragStart(e, ship)}
                                onDragEnd={handleDragEnd}
                            >
                                {ship.id}
                            </div>
                            {/* Rotate button */}
                            <button
                                onClick={() => handleRotate(ship.id)}
                                disabled={ship.placed}
                                className="ship-button"
                            >
                                {ship.isHorizontal ? 'Vertical' : 'Horizontal'}
                            </button>
                        </div>
                    ))}
                </div>


                {/* Player Board */}
                <h2>Your Board</h2>
                <div className="grid-container">
                    {board.map((cell, index) => (
                        <div
                            key={index}
                            className={`cell ${cell ? 'ship' : ''}`}
                            onDrop={(e) => handleDrop(e, index)}
                            onDragOver={(e) => e.preventDefault()}
                        >
                            {cell ? "S" : ""}
                        </div>
                    ))}
                </div>

                {/* Enemy Board */}
                <h2>Enemy Board</h2>
                <div className="grid-container">
                    {enemyBoard.map((cell, index) => (
                        <div
                            key={index}
                            className={`cell ${cell === "H" ? 'hit' : cell === "M" ? 'miss' : ''}`}
                            onClick={() => attackEnemy(index)}
                        >
                            {cell === "H" ? "✔" : cell === "M" ? "✖" : ""}
                        </div>
                    ))}
                </div>

                {/* Reset Button */}
                <button onClick={resetGame} className="restart-button">
                    Reset Game
                </button>

                {/* Game Over Notification */}
                {gameOver && <p className="game-over">Game Over!</p>}
            </main>

            <Footer />
        </div>
    );
}

export default Play;
