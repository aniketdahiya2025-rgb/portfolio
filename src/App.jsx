import './App.css';
import logoUrl from './components/Logo.svg';
import githubUrl from './components/github.svg';
import linkedinUrl from './components/linkedin.svg';
import avatarUrl from './components/Aniket Dahiya.gif';
import avatar2Url from './components/Aniket Dahiya.jpg';
import instagramUrl from './components/instagram.svg';
import worksUrl from './pages/Works.jsx';

function App() {
  return (
  <>
{/* This is the navbar section */}
<nav class="navdisplay">
  <div class="navlogo">
  <img className="logo" src={logoUrl} alt="Logo"/>
  </div>
  <div class="navlinks">
  <a class="navitems" href="#home">Home</a>
  <a class="navitems" href="#about">About</a>
  <a class="navitems" href="#services">Skills</a>
  <a class="navitems" href="#contact">Experience</a>
  <a class="navitems" href="/pages/Works.jsx">Works</a>
  <a class="navitems" href="#blog">Experience</a>
  <a class="navitems" href="#contact">Contact</a>
  </div>
</nav>
{/* This is the body section */}
<div class="bodysection">
  <div class="fix">
    <div>
      <h1 class="bodytext">Hi There,</h1>
      <h1 class="bodytext">I'm Aniket Dahiya</h1>
      <h3 class="bodytext">Frontend Developer | React Js Developer</h3>
      <a class="aboutme" href="about">About me ↓</a>
    </div>
    <div>
      <img class="avatar" src={avatarUrl} alt="Aniket Dahiya"/>
    </div>
  </div>
    <div>
{/* This is the social media links section */}
    <footer>
    <a href="https://github.com/aniketdahiya2025-rgb"><img src={githubUrl} alt="Github Logo" class="smlinks"/></a>
    <a href="https://www.linkedin.com/in/aniket-dahiya-98aa36375?utm_source=share_via&utm_content=profile&utm_medium=member_android"><img src={linkedinUrl} alt="linkedin Logo" class="smlinks" /></a>
    <a href="https://www.instagram.com/aniketdahiya2025?igsh=ZnBjMGZ2cm94dDY5"><img src={instagramUrl} alt="Instagram Logo" class="smlinks"/></a>
    </footer>
    <div><a href="about.html"><img src={avatar2Url} alt="avatar" class="avatarlite"/></a></div>
  </div>
</div>


  </>
  );
}
export default App;
