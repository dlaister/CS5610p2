import Navbar from '../components/Navbar';
import '../styles/global.css';
import '../styles/sample.css';
import Footer from '../components/Footer';


function Sample() {
    return (
        <div className="sample">
            <Navbar />

            <main>
                <header>
                    <h2>Battleship Sample Game</h2>
                </header>

                <h3>
                    Timer: <span className="red-text">00:05:32</span>
                    <button className="restart-button">Restart</button>
                </h3>

                <div className="main-container">
                    {/* Enemy board example */}
                    <div className="container">
                        <div className="text-box">
                            <p className="italics">
                                Below is a sample of the enemy board where "X" represents your miss
                                and "/" represents your hit.
                            </p>
                        </div>

                        <div className="grid-container">
                            {/* Create the column headers */}
                            <div className="header"></div>
                            {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map((letter, index) => (
                                <div className="header" key={index}>{letter}</div>
                            ))}

                            {/* Rows */}
                            {[...Array(11)].map((_, rowIndex) => (
                                <div key={rowIndex} className="row">
                                    <div className="row-header">{rowIndex}</div>
                                    {[...Array(10)].map((_, colIndex) => (
                                        <div key={colIndex} className="cell"></div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Player board example */}
                    <div className="container">
                        <div className="text-box">
                            <p className="italics">
                                Below is a sample of the player board where "0" represents where your ships are and an "X" is where your ship was hit.
                            </p>
                        </div>

                        <div className="grid-container">
                            {/* Create the column headers */}
                            <div className="header"></div>
                            {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map((letter, index) => (
                                <div className="header" key={index}>{letter}</div>
                            ))}

                            {/* Rows */}
                            {[...Array(11)].map((_, rowIndex) => (
                                <div key={rowIndex} className="row">
                                    <div className="row-header">{rowIndex}</div>
                                    {[...Array(10)].map((_, colIndex) => (
                                        <div key={colIndex} className="cell"></div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Sample;
