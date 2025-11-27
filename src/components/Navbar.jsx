
import logoUrl from './Logo.svg';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navdisplay">
      <div className="navlogo">
        <img className="logo" src={logoUrl} alt="Logo" />
      </div>
      <div className="navlinks">
        <a href="#home" className="navitems" to="/">Home</a>
        <a href="#about" className="navitems" to="/about">About</a>
        <a href="#skills"className="navitems" to="/services">Skills</a>
        <a  href="#works" className="navitems" to="/works">Works</a>
        <a href="#connect" className="navitems" to="/contact">Contact</a>
      </div>
    </nav>
  );
}