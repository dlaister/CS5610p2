import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Sample from './pages/Sample';
import Scores from './pages/Scores';
import Play from "./pages/Play";
import NotFound from "./pages/NotFound";
import Footer from './components/Footer';


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rules" element={<Rules />} />
                    <Route path="/sample" element={<Sample />} />
                    <Route path="/scores" element={<Scores />} />
                    <Route path="/play" element={<Play />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
