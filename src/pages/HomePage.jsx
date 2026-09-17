import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function HomePage({ setPage }) {
  return (
    <div className="page-container">
      <Navbar setPage={setPage} />
      <Hero setPage={setPage} />
      <Footer />
    </div>
  );
}

export default HomePage;
