import Navbar from '../components/Navbar';
import '../styles/sample.css';
import Footer from '../components/Footer';

function Sample() {
    return (
        <div className="sample">
            <Navbar />

            <main>
                <header>
                    <h1>Battleship Sample Game</h1>
                </header>

                <h3>Timer: <span className="red-text">00:05:32 </span><button className="restart-button">Restart</button></h3>

                <div className="main-container">
                    {/* Enemy board example */}
                    <div className="container">
                        <div className="text-box">
                            <p className="italics">Below is a sample of the enemy board where "X" represents your miss and "/" represents your hit.</p>
                        </div>

                        <div className="grid-container">
                            {/* Create the column headers */}
                            <div className="header"></div>
                            <div className="header">A</div>
                            <div className="header">B</div>
                            <div className="header">C</div>
                            <div className="header">D</div>
                            <div className="header">E</div>
                            <div className="header">F</div>
                            <div className="header">G</div>
                            <div className="header">H</div>
                            <div className="header">I</div>
                            <div className="header">J</div>

                            {/* Row 0 */}
                            <div className="row-header">0</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell hit">√</div>
                            <div className="cell hit">√</div>
                            <div className="cell hit">√</div>
                            <div className="cell hit">√</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>

                            {/* Row 1 */}
                            <div className="row-header">1</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>

                            {/* Row 2 */}
                            <div className="row-header">2</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell miss">X</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>

                            {/* Row 3 */}
                            <div className="row-header">3</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell miss">X</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>

                            {/* Row 4 */}
                            <div className="row-header">4</div>
                            <div className="cell miss">X</div>
                            <div className="cell hit">√</div>
                            <div className="cell hit">√</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell miss">X</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>

                            {/* Row 5 */}
                            <div className="row-header">5</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell miss">X</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>

                            {/* Row 6 */}
                            <div className="row-header">6</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell miss">X</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>

                            {/* Row 7 */}
                            <div className="row-header">7</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell miss">X</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>

                            {/* Row 8 */}
                            <div className="row-header">8</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell miss">X</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>

                            {/* Row 9 */}
                            <div className="row-header">9</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell miss">X</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell miss">X</div>


                            {/* Row 10 */}
                            <div className="row-header">10</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell hit">√</div>
                        </div>
                    </div>

                    {/* Player board example */}
                    <div className="container">
                        <div className="text-box">
                            <p className="italics">Below is a sample of the player board where "0" represents where your ships are and an "X" is where your ship was hit.</p>
                        </div>

                        <div className="grid-container">
                            {/* Create the column headers */}
                            <div className="header"></div>
                            <div className="header">A</div>
                            <div className="header">B</div>
                            <div className="header">C</div>
                            <div className="header">D</div>
                            <div className="header">E</div>
                            <div className="header">F</div>
                            <div className="header">G</div>
                            <div className="header">H</div>
                            <div className="header">I</div>
                            <div className="header">J</div>

                            {/* Row 0 */}
                            <div className="row-header">0</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell miss">X</div>
                            <div className="cell miss">X</div>
                            <div className="cell miss">X</div>
                            <div className="cell miss">X</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>

                            {/* Row 1 */}
                            <div className="row-header">1</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>

                            {/* Row 2 */}
                            <div className="row-header">2</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell ship">0</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>

                            {/* Row 3 */}
                            <div className="row-header">3</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell ship">0</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>

                            {/* Row 4 */}
                            <div className="row-header">4</div>
                            <div className="cell"></div>
                            <div className="cell miss">X</div>
                            <div className="cell miss">X</div>
                            <div className="cell ship">0</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell ship">0</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>

                            {/* Row 5 */}
                            <div className="row-header">5</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell ship">0</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>

                            {/* Row 6 */}
                            <div className="row-header">6</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell ship">0</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>

                            {/* Row 7 */}
                            <div className="row-header">7</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell ship">0</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>

                            {/* Row 8 */}
                            <div className="row-header">8</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell ship">0</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>

                            {/* Row 9 */}
                            <div className="row-header">9</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell ship">0</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>

                            {/* Row 10 */}
                            <div className="row-header">10</div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell ship">0</div>
                            <div className="cell miss">X</div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Sample;
