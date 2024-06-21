import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import NewsList from './Components/NewsList'; // Correct import path
import Favorites from './Components/Favorites'; // Correct import path
import './App.css';

const App = () => {
  const [category, setCategory] = useState('general');

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="categories">
          {['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'].map((cat) => (
            <button key={cat} onClick={() => handleCategoryChange(cat)}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        <main>
          <Routes>
            <Route path="/" element={<NewsList category={category} />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
