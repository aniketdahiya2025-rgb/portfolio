import avatarUrl from './Aniket Dahiya.gif';
import githubUrl from './github.svg';
import linkedinUrl from './linkedin.svg';
import avatar2Url from './Aniket Dahiya.jpg';
import instagramUrl from './instagram.svg';
import './Body.css';

export default function Body() {
  return (
    <div>
      <div className="bodysection">
        <div className="fix">
          <div>
            <h1 className="bodytext">Hi There,</h1>
            <h1 className="bodytext">I'm Aniket Dahiya</h1>
            <h3 className="bodytext">Frontend Developer | React Js Developer</h3>
            <a href="#about">About me ↓</a>
          </div>
          <div>
            <img className="avatar" src={avatarUrl} alt="Aniket Dahiya" />
          </div>
        </div>
        <div>
          <footer>
            <a href="https://github.com/aniketdahiya2025-rgb"><img src={githubUrl} alt="Github Logo" className="smlinks" /></a>
            <a href="https://www.linkedin.com/in/aniket-dahiya-98aa36375"><img src={linkedinUrl} alt="linkedin Logo" className="smlinks" /></a>
            <a href="https://www.instagram.com/aniketdahiya2025"><img src={instagramUrl} alt="Instagram Logo" className="smlinks" /></a>
          </footer>
          <div><img src={avatar2Url} alt="avatar" className="avatarlite" /></div>
        </div>
      </div>
    </div>
  );
}