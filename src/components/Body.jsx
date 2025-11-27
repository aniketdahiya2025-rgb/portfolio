import avatarUrl from './Aniket Dahiya.gif';
import githubUrl from './github.svg';
import linkedinUrl from './linkedin.svg';
import avatar2Url from './Aniket Dahiya.jpg';
import instagramUrl from './instagram.svg';
import taskmasterUrl from './taskmaster.png';
import demowebsiteUrl from './demo_website.png';
import cssUrl from './CSS.png';
import jsUrl from './javascript.png';
import nodeUrl from './node.webp';
import ADUrl from './AniketDahiya.png';
import './Body.css';

export default function Body() {
  return (
    <div>
{/*This is the Home Section*/}
      <section id="home">
      <div className="bodysection">
        <div className="fix">
          <div>
            <h1 className="bodytext">Hi There,</h1>
            <h1 className="bodytext">I'm Aniket Dahiya</h1>
            <h3 className="bodytext">Frontend Developer | React Js Developer</h3>
            <a href="#about" class="bodytext" >About me ↓</a>
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
          <div><a href="#connect"><img src={avatar2Url} alt="avatar" className="avatarlite" /></a></div>
        </div>
      </div>
      </section>
      <hr class="hr"/>
{/*This is the About Section*/}
      <section id="about">
        <div class="section" id="about">
            <div class="sectionabout">
            <h1 class="heading">About</h1>
              <div>
                <div class="about">
                  <div class="aboutdisplay">
                    <img src={ADUrl} alt="AD logo" class="myimage"/>
                    <h2 class="worktitle">Aniket Dahiya</h2>
                  </div>
              <div class="abouttext">
                <h2 class="workdescription">Hello! I am Aniket Dahiya, a Frontend Developer</h2>
                <p class="workdescription">I am a passionate front-end developer. I have strong skills in React.js, JavaScript, HTML, and CSS. I specialize in building responsive and user-friendly web applications, including interactive single-page applications, dynamic websites, and custom user interfaces. I can create reusable components, integrate APIs, and optimize website performance to ensure a seamless user experience across devices. Whether it’s developing a portfolio site, an e-commerce platform, or progressive web apps, I bring creativity and technical expertise to every project. </p>
              </div>
              </div>
            </div>
          </div>
          </div>
      </section>
      <hr class="hr"/>
{/*This is the Skills section*/}
      <section id="Skills">
        <div class="section" id="skills">
        <div class="workfix">
          <h1 class="heading">Skills</h1>
          <div class="cards">
          <a href="https://www.w3schools.com/css/">
          <div class="card">
            <img src={cssUrl} alt="css logo" class="workimage"/>
            <h2 class="worktitle">CSS</h2>
            <p class="workdescription">CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation and layout of web pages, defining styles like colors, fonts, spacing, and positioning of HTML elements. It works alongside HTML to separate content from design, allowing consistent and flexible styling across multiple pages</p>
          </div>
          </a>
          <a href="https://www.w3schools.com/js/">
          <div class="card">
            <img src={jsUrl} alt="js logo" class="workimage"/>
            <h2 class="worktitle">Javascript</h2>
            <p class="workdescription">JavaScript is a versatile programming language that adds interactivity and dynamic behavior to web pages, enabling features like form validation, animations, and real-time content updates. It runs primarily in the browser but can also be used on servers, making it essential for modern web development </p>
          </div>
          </a>
          <a href="https://nodejs.org/en">
          <div class="card">
            <img src={nodeUrl} alt="js logo" class="workimage"/>
            <h2 class="worktitle">Node js</h2>
            <p class="workdescription">Node.js is a runtime environment that allows you to run JavaScript on the server side. It uses the  console.log()  function to output messages to the terminal or command line, which is useful for debugging and logging information.</p>
          </div>
          </a>
          </div>
          </div>
        </div>
      </section>
      <hr class="hr"/>
{/*This is the works Section*/}
            <section id="works">
      <div class="section" id="about">
        <div class="workfix">
            <h1 class="heading">Works</h1>
            <div class="cards">
                <a href="https://github.com/aniketdahiya2025-rgb/gdgocwebtechtask3.git">
                <div class="card">
                    <img src={taskmasterUrl} alt="Taskmaster Pro" class="workimage"/>
                    <h2 class="worktitle">Taskmaster Pro</h2>
                    <p class="workdescription">A Task Management Application built with React.js, featuring user authentication, task CRUD operations, and responsive design for efficient task organization.</p>
                </div>
                </a>
                <a href="https://github.com/aniketdahiya2025-rgb/gdgocwebtechtask2.git">
                <div class="card">
                  <img src={demowebsiteUrl} alt="Demo Website" class="workimage"/>
                  <h2 class="worktitle">Demo Website</h2>
                  <p class="workdescription">Demo website building quite helpful in learning HTML and CSS</p>
                </div>
                </a>
            </div>
        </div>
      </div>
      </section>
      <hr class="hr"/>
      <section id="connect">
        <div class="section" id="connect">
          <div class="workfix">
            <div class="flexdisplay">
              <div><h2 class="heading">Get in Touch!</h2>
              <p class="workdescription2">Let's Talk</p>
              <p class="workdescription2">To contact me fill the adjacent form</p>
              </div>
              <div>
                <form class="contactform">
                <div>
                <label for="name">Name</label>
                <input type="text" />
                </div>
                <div>
                <label for="email">Email</label>
                <input type="email" />
                </div>
                <div>
                <label for="message">Message</label>
                <textarea rows="5" columns="30"></textarea>
                </div>
                <div class="submitbutton">
                <input type="submit"/>
                </div>
                </form>
                </div>
            </div>
            <div class="emailid">
              <a href="aniketdahiya2025@gmail.com">✉aniketdahiya2025@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


// hii