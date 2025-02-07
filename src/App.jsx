import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Carousel from "./Carousel";
import Typewriter from "typewriter-effect";

const items = [
  "Item 1",
  "Item 2",
  "Item 3"
];

const App = () => {
  const [showProjects, setShowProjects] = useState(false);

  const dummy = false;
  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  return (
    <div>
      <header>
        <h1>colin henderson</h1>
        <div className="button-container">
          <a href="https://github.com/0xcolinhenderson/" target="_blank">
            <button className="icon-button">
              <img src="/github.svg" alt="github-icon" />
            </button>
          </a>
          <button className="icon-button">
            <a href="https://linkedin.com/in/colinchenderson/" target="_blank">
              <img src="/linkedin.svg" alt="linkedin-icon" />
            </a>
          </button>
          <a href="mailto:colin.ch.henderson@gmail.com" target="_blank">
            <button className="icon-button">
              <img src="/email.svg" alt="email-icon" />
            </button>
          </a>
          <button className="location-button">
            <img src="/location.svg" alt="location-icon" />
          </button>
          <p className="location-text">santa cruz, ca</p>
        </div>
        <h4>[ last updated: 2/07/25 0:25:09 ]</h4>
      </header>
      <div id="content">
        <section id="text">
          <h2 className="maintext">
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
          <p align="left">
            I'm currently a third year student at <a target="_blank" href="https://engineering.ucsc.edu/">UC Santa Cruz</a> studying Computer Science. I mainly
            focus on building web applications, with an emphasis on Python and React. {<br />}{<br />}
            Outside of programming, I really love writing, recording, and producing music. 
            If you're interested in getting a track produced, mixed, or mastered, please reach out to me <a href="mailto:colin.ch.henderson@gmail.com">here</a>.
          </p>
        </section>
        <section id="text">
          <h3 className="textheader">
            <button className="textheader toggle-button hover-grow" onClick={toggleProjects}>
              projects&nbsp;<img src={showProjects ? "/down.svg" : "/up.svg"} alt="toggle-icon" />
            </button>
          </h3>
        </section>
        <section id="projects" className={showProjects ? "show" : ""}>
          <Carousel items={items} />
        </section>
        <section id="text">
          <button className="textheader toggle-button hover-grow" style={{ paddingBottom: '2rem' }} onClick={void 0}>
            coursework&nbsp;<img src={dummy ? "/down.svg" : "/up.svg"} alt="toggle-icon" />
          </button>
        </section>
        <section id="text">
          <button className="textheader toggle-button hover-grow" style={{ paddingBottom: '2rem' }} onClick={void 0}>
            contact&nbsp;<img src={dummy ? "/down.svg" : "/up.svg"} alt="toggle-icon" />
          </button>
        </section>
        <section id="text">
          <button className="textheader toggle-button hover-grow" style={{ paddingBottom: '2rem' }} onClick={void 0}>
            resume&nbsp;<img src={"/download.svg"} alt="toggle-icon" />
          </button>
        </section>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);