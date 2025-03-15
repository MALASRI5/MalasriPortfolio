import React from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Contact from './components/Contact/contact';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import SriImage from './components/Projects/image/sri.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="about" className="about-section">
          <div className="about-container">
            <img src={SriImage} alt='Malasri' className="profile-image" />
            <div className="about-text">
              <h1>S.MALASRI</h1>
              <h2>Full Stack Developer</h2>
              <p>
                I am a third-year Computer Science student, passionate about Full Stack development.
                Enthusiastic about creating dynamic, user-friendly webpages, I actively seek to enhance my coding skills.
                I am a self-motivated and meticulous person who loves to learn and grow in the tech industry.
              </p>
              <button className='btn about'>Hire Me</button>
              <button className='btn about'>Resume</button>
            </div>
          </div>
          <Skills />
          <Projects />
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
