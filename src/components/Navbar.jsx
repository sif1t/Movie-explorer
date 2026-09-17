function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <div className="logo" onClick={() => setPage('home')}>
        🎬 MovieExplorer
      </div>
      <div className="nav-links">
        <button className="nav-btn" onClick={() => setPage('home')}>
          Home
        </button>
        <button className="nav-btn" onClick={() => setPage('movies')}>
          Movies
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
