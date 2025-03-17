import { useEffect } from 'react';

const SetEnemyBoard = ({ setEnemyBoard }) => {  // Destructure props to access setEnemyBoard
    // Define five different enemy board layouts
    const enemyBoards = [
        [  // Layout 1
            "C", "C", "C", "C", "C", null, null, null, null, null,
            null, null, null, null, null, "B", "B", "B", "B", null,
            null, null, "S", null, null, null, null, null, null, null,
            null, null, "S", null, null, "D", null, null, null, null,
            null, null, "S", null, null, "D", null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, "C", "C", "C", null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null
        ],
        [  // Layout 2
            "D", null, null, null, null, null, null, null, null, "S",
            "D", null, null, null, null, null, null, null, null, "S",
            null, null, null, null, null, null, null, null, null, "S",
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, "D", null, null, null, null, null,
            null, null, null, null, "D", null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            "C", "C", "C", null, null, null,"B", "B", "B", "B"
        ],
        [  // Layout 3
            "B", "B", "B", "B", null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, "S", null, "C", "C", "C", "C", "C", null,
            null, null, "S", null, null, null, null, null, null, null,
            null, null, "S", null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, "C", "C", "C", null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, "D", null, null, null, null, null, null, null, null,
            null, "D", null, null, null, null, null, null, null, null
        ],
        [  // Layout 4
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, "C", "S", null, null, null, null,
            null, null, "D", null, "C", "S", null, null, null, null,
            null, null, "D", null, "C", "S", null, null, null, null,
            null, null, null, null, "C", "B", "B", "B", "B", null,
            null, null, null, null, "C", "C", "C", "C", null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null
        ],
        [  // Layout 5
            "D", "D", null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, "S", "S", "S", null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, "C", "C", "C", "C", "C", null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, "B", "B", "B", "B", null, null,
            null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, "C", "C", "C",
            null, null, null, null, null, null, null, null, null, null
        ],
        // Add more layouts???
    ];

    // Select a random enemy board layout

    // Update enemy board state
    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * enemyBoards.length)
        const selectedBoard = enemyBoards[randomNumber];
        console.log(randomNumber);

        setEnemyBoard(selectedBoard);}, [setEnemyBoard]); // every time the board is changed, rerun the useeffect command (runs endlessly the parent component)
    // make usre random number is genereated when you need it.


    return null; // You can return something here if needed, or leave it empty
};

export default SetEnemyBoard;
