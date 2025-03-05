import { Helmet } from "react-helmet";

// TODO - fill in correct information in placeholders below!!!
function Home() {
    return (
        <div>
            <Helmet>
                <title>Scoreboard - Battleship Game</title>
                <meta name="description" content="Check the current scoreboard for Battleship!" />
            </Helmet>
            <h1>Current Scores</h1>
            <p>Here you can see the current game scores...</p>
        </div>
    );
}

function Rules() {
    return (
        <div>
            <Helmet>
                <title>Rules - Battleship Game</title>
                <meta name="description" content="Learn the rules of Battleship!" />
            </Helmet>
            <h1>Game Rules</h1>
            <p>Here are the rules for the game...</p>
        </div>
    );
}

function Sample() {
    return (
        <div>
            <Helmet>
                <title>Sample - Battleship Game</title>
                <meta name="description" content="This is a sample page for Battleship!" />
            </Helmet>
            <h1>Sample Scores</h1>
            <p>Here is a sample of the game scores...</p>
        </div>
    );
}

function Scores() {
    return (
        <div>
            <Helmet>
                <title>Scores - Battleship Game</title>
                <meta name="description" content="Check the current game scores!" />
            </Helmet>
            <h1>Current Scores</h1>
            <p>Here you can see the current game scores...</p>
        </div>
    );
}

// Named exports
export { Home, Rules, Sample, Scores };
