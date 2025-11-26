
import logoUrl from './Logo.svg';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navdisplay">
      <div className="navlogo">
        <img className="logo" src={logoUrl} alt="Logo" />
      </div>
      <div className="navlinks">
        <Link className="navitems" to="/">Home</Link>
        <Link className="navitems" to="/about">About</Link>
        <Link className="navitems" to="/services">Skills</Link>
        <Link className="navitems" to="/experience">Experience</Link>
        <Link className="navitems" to="/works">Works</Link>
        <Link className="navitems" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}