import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';
import Footer from '../components/Footer';

function MoviesPage({ setPage }) {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    setLoading(true);

    if (query.trim() === '') {
      fetch('https://api.tvmaze.com/shows')
        .then((res) => res.json())
        .then((data) => {
          setMovies(data);
          setLoading(false);
        });
    } else {
      fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
          const results = data.map((item) => item.show);
          setMovies(results);
          setLoading(false);
        });
    }
  };

  return (
    <div className="page-container">
      <Navbar setPage={setPage} />

      <div className="movies-content">
        <div className="search-section">
          <h2>Explore Movies & Shows</h2>
          <input
            type="text"
            className="search-input"
            placeholder="Search movie or show by name..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        {loading ? (
          <p className="loading-text">Loading shows...</p>
        ) : movies.length === 0 ? (
          <p className="no-results">No movies found matching your search.</p>
        ) : (
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onSelectMovie={(item) => setSelectedMovie(item)}
              />
            ))}
          </div>
        )}
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}

      <Footer />
    </div>
  );
}

export default MoviesPage;
