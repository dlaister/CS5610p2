// import { useEffect } from "react";
//
// const SHIPS = [
//     { size: 5, name: "Carrier" },
//     { size: 4, name: "Battleship" },
//     { size: 3, name: "Cruiser" },
//     { size: 3, name: "Submarine" },
//     { size: 2, name: "Destroyer" }
// ];
//
// // Generate a random ship placement
// const generateRandomPosition = (size, boardSize) => {
//     const isHorizontal = Math.random() > 0.5; // Randomly choose orientation
//     let startRow, startCol;
//
//     if (isHorizontal) {
//         startRow = Math.floor(Math.random() * boardSize);
//         startCol = Math.floor(Math.random() * (boardSize - size));
//     } else {
//         startRow = Math.floor(Math.random() * (boardSize - size));
//         startCol = Math.floor(Math.random() * boardSize);
//     }
//
//     return { startRow, startCol, isHorizontal };
// };
//
// // Check if a ship can be placed
// const canPlaceShip = (board, size, startRow, startCol, isHorizontal, boardSize) => {
//     for (let i = 0; i < size; i++) {
//         let row = startRow;
//         let col = startCol;
//         if (isHorizontal) col += i;
//         else row += i;
//
//         if (row >= boardSize || col >= boardSize || board[row * boardSize + col] !== null) {
//             return false; // Out of bounds or occupied
//         }
//     }
//     return true;
// };
//
// // Place ship on the board
// const placeShip = (board, ship, boardSize) => {
//     let newBoard = [...board];
//     let placed = false;
//
//     while (!placed) {
//         const { startRow, startCol, isHorizontal } = generateRandomPosition(ship.size, boardSize);
//         if (canPlaceShip(newBoard, ship.size, startRow, startCol, isHorizontal, boardSize)) {
//             for (let i = 0; i < ship.size; i++) {
//                 let row = startRow;
//                 let col = startCol;
//                 if (isHorizontal) col += i;
//                 else row += i;
//                 newBoard[row * boardSize + col] = ship.name.charAt(0); // Use ship initial
//             }
//             placed = true;
//         }
//     }
//
//     return newBoard;
// };
//
// const SetEnemyBoard = ({ setEnemyBoard }) => {
//     useEffect(() => {
//         let board = Array(100).fill(null);
//         SHIPS.forEach(ship => {
//             board = placeShip(board, ship, 10);
//         });
//         setEnemyBoard(board);
//     }, [setEnemyBoard]);
//
//     return null; // No UI, just logic
// };
//
// export default SetEnemyBoard;
