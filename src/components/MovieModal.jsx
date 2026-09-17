function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  const posterLarge = movie.image
    ? movie.image.original || movie.image.medium
    : 'https://placehold.co/400x550?text=No+Image';

  const rating = movie.rating && movie.rating.average ? movie.rating.average : 'N/A';
  const genres = movie.genres && movie.genres.length > 0 ? movie.genres.join(', ') : 'Not specified';
  const cleanSummary = movie.summary ? movie.summary.replace(/<[^>]*>/g, '') : 'No summary available for this show.';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="modal-body">
          <img src={posterLarge} alt={movie.name} className="modal-image" />
          <div className="modal-details">
            <h2>{movie.name}</h2>
            <p className="modal-genres"><strong>Genres:</strong> {genres}</p>
            <p className="modal-rating"><strong>Rating:</strong> ⭐ {rating}</p>
            <p className="modal-premiered"><strong>Premiered:</strong> {movie.premiered || 'N/A'}</p>
            <p className="modal-summary"><strong>Summary:</strong></p>
            <p className="summary-text">{cleanSummary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
