import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CardCarousel from './components/CardCarousel/CardCarousel';
import Table from './components/Table/Table';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/flash-a-card/cards" element={<CardCarousel />} />
            <Route path="/flash-a-card" element={<Table />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
