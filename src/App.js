import './App.css';
import Header from './assets/components/Header/header';
import Footer from './assets/components/Footer/footer';
import CardCarousel from './assets/components/CardCarousel/cardCaorusel';
import Table from './assets/components/Table/Table';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<CardCarousel />} />
          <Route path="/dictionary" element={<Table />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
