function Hero({ setPage }) {
  return (
    <div className="hero-banner">
      <h1>Unlimited Movies, TV Shows & More</h1>
      <p>Discover your favorite shows, explore new releases, and check out detailed ratings and summaries.</p>
      <button className="explore-btn" onClick={() => setPage('movies')}>
        Explore Movies
      </button>
    </div>
  );
}

export default Hero;
