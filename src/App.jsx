import About from './contains/about/about';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Home from './contains/Home/Home';
import Experiment from './contains/Experiment/Experiment';
import footer from './components/Footer/footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiments" element={<Experiment />} />
        <Route path="/about" element={<About />} />
        <Route path="/fotter" element={<Footer />} />


      </Routes>
    </Router>

  );
}

export default App;
