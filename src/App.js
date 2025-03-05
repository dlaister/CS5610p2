import Home from './pages/Home';
import Rules from './pages/Rules';
import Sample from './pages/Sample';
import Scores from './pages/Scores';
import Navbar from './components/Navbar';
import './styles/global.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="/sample" element={<Sample />} />
                <Route path="/scores" element={<Scores />} />
            </Routes>
        </Router>
    );
}

export default App;
