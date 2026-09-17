function MovieCard({ movie, onSelectMovie }) {
  const posterUrl = movie.image ? movie.image.medium : 'https://placehold.co/210x295?text=No+Image';
  const rating = movie.rating && movie.rating.average ? movie.rating.average : 'N/A';
  const releaseDate = movie.premiered ? movie.premiered : 'Unknown';

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={movie.name} className="movie-poster" />
      <div className="movie-info">
        <h3 className="movie-title">{movie.name}</h3>
        <p className="movie-rating">⭐ Rating: {rating}</p>
        <p className="movie-date">📅 Premiered: {releaseDate}</p>
        <button className="details-btn" onClick={() => onSelectMovie(movie)}>
          See Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
