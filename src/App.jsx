import { useState } from 'react';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="app">
      {currentPage === 'home' ? (
        <HomePage setPage={setCurrentPage} />
      ) : (
        <MoviesPage setPage={setCurrentPage} />
      )}
    </div>
  );
}

export default App;
