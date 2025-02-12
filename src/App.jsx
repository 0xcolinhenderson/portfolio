import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Typewriter from "typewriter-effect";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("intro");
  const [fade, setFade] = useState("fade-in");

  const handleTabClick = (tab) => {
    if (tab !== selectedTab) {
      setFade("fade-out");
      setTimeout(() => {
        setSelectedTab(tab);
        setFade("fade-in");
      }, 400);
    }
  };

  useEffect(() => {
    setFade("fade-in");
  }, [selectedTab]);

  return (
    <div>
      <header>
        <h1>colin henderson</h1>
        <div className="header-icons">
          <a className="linkButton" href="https://github.com/0xcolinhenderson/" target="_blank">
            <img src="/portfolio/github.svg" alt="github-icon" />
          </a>
          <a className="linkButton" href="https://linkedin.com/in/colinchenderson/" target="_blank">
            <img src="/portfolio/linkedin.svg" alt="linkedin-icon" />
          </a>
          <a className="linkButton" href="mailto:colin.ch.henderson@gmail.com" target="_blank">
            <img src="/portfolio/email.svg" alt="email-icon" />
          </a>
          <img id="location" src="/portfolio/location.svg" alt="location-icon" />
          <p id="location-text">santa cruz, ca</p>
        </div>
        <h4>[ last updated: 2/10/25 23:19:19 ]</h4>
      </header>
      <div id="content">
        <section id="intro">
          <h2 className="title">
            <Typewriter
              options={{
                autoStart: true,
                loop: false,
                delay: 75,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('<span style="font-weight: normal; color: var(--main-color);">hi!</span>')
                  .pauseFor(2000)
                  .typeString(' i\'m colin henderson.')
                  .start();
              }}
            />
          </h2>
        </section>
        <div className="menu-container">
          <div className="menu">
            <section id="intro" onClick={() => handleTabClick("intro")}>
              <h3 className={`sectionHeader hover-effect ${selectedTab === "intro" ? "active" : ""}`}>
                intro
              </h3>
            </section>
            <section id="projects" onClick={() => handleTabClick("projects")}>
              <h3 className={`sectionHeader hover-effect ${selectedTab === "projects" ? "active" : ""}`}>
                projects
              </h3>
            </section>
            <section id="coursework" onClick={() => handleTabClick("coursework")}>
              <h3 className={`sectionHeader hover-effect ${selectedTab === "coursework" ? "active" : ""}`}>
                coursework
              </h3>
            </section>
            <section id="contact" onClick={() => handleTabClick("contact")}>
              <h3 className={`sectionHeader hover-effect ${selectedTab === "contact" ? "active" : ""}`}>
                contact
              </h3>
            </section>
            <section id="resume" onClick={() => handleTabClick("resume")}>
              <h3 className={`sectionHeader hover-effect ${selectedTab === "resume" ? "active" : ""}`}>
                <a className="resumeDownload hover-effect" href="/">
                  resume
                </a>
              </h3>
            </section>
          </div>
          <div className={`displayedContent ${fade}`}>
            {selectedTab === "intro" && (
              <>
                <p>
                  I'm currently a third year student at <a className="link" target="_blank" href="https://engineering.ucsc.edu/">UC Santa Cruz</a> studying Computer Science. I mainly
                  focus on building web applications, with an emphasis on Python and React.
                </p>
                <p>
                  Outside of programming, I really love writing, recording, and producing music.
                  If you're interested in getting a track produced, mixed, or mastered, please reach out to me <a className="link" href="mailto:colin.ch.henderson@gmail.com">here</a>.
                </p>
              </>
            )}
            {selectedTab === "projects" && (
              <>
                <p>Projects</p>
              </>
            )}
            {selectedTab === "coursework" && (
              <>
                <p>Coursework</p>
              </>
            )}
            {selectedTab === "contact" && (
              <>
                <p>Contact</p>
              </>
            )}
            {selectedTab === "resume" && (
              <>
                <p>Resume</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);