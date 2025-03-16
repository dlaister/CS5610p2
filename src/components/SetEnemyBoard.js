import { useEffect } from "react";

const SHIPS = [
    { size: 5, name: "Carrier" },
    { size: 4, name: "Battleship" },
    { size: 3, name: "Cruiser" },
    { size: 3, name: "Submarine" },
    { size: 2, name: "Destroyer" }
];

// Helper function to generate random positions for placing ships
const generateRandomPosition = (size) => {
    const direction = Math.random() > 0.5 ? "horizontal" : "vertical"; // Randomly choose orientation
    let startRow, startCol;
    if (direction === "horizontal") {
        startRow = Math.floor(Math.random() * 10);
        startCol = Math.floor(Math.random() * (10 - size)); // Ensure ship fits horizontally
    } else {
        startRow = Math.floor(Math.random() * (10 - size)); // Ensure ship fits vertically
        startCol = Math.floor(Math.random() * 10);
    }
    return { startRow, startCol, direction };
};

// Helper function to check if a ship can be placed on the board
const checkIfPlaceable = (board, ship, startRow, startCol, direction) => {
    for (let i = 0; i < ship.size; i++) {
        let row = startRow;
        let col = startCol;
        if (direction === "horizontal") col += i;
        if (direction === "vertical") row += i;
        if (board[row][col] !== null) return false; // Spot already occupied
    }
    return true;
};

// Helper function to place a ship on the board
const placeShip = (board, ship, setEnemyBoard) => {
    const { size } = ship;
    let placed = false;
    while (!placed) {
        const { startRow, startCol, direction } = generateRandomPosition(size);
        if (checkIfPlaceable(board, ship, startRow, startCol, direction)) {
            let newBoard = [...board];
            for (let i = 0; i < size; i++) {
                let row = startRow;
                let col = startCol;
                if (direction === "horizontal") col += i;
                if (direction === "vertical") row += i;
                newBoard[row][col] = ship.name.charAt(0); // Place the ship (initial letter)
            }
            setEnemyBoard(newBoard); // Update board after placing the ship
            placed = true;
        }
    }
};

const SetEnemyBoard = ({ setEnemyBoard }) => {
    // We will initialize the enemy board once when the component mounts.
    useEffect(() => {
        let emptyBoard = Array(10)
            .fill(null)
            .map(() => Array(10).fill(null)); // 10x10 empty board

        // Place each ship randomly
        SHIPS.forEach((ship) => placeShip(emptyBoard, ship, setEnemyBoard));

        // Once the ships are placed, set the board state
        setEnemyBoard(emptyBoard);
    }, [setEnemyBoard]); // Dependency on setEnemyBoard to ensure the function is stable

    return null; // This component just sets up the board, no UI necessary
};

export default SetEnemyBoard;
