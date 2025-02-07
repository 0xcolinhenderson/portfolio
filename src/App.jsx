import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Carousel from "./Carousel";

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
      </header>
      <div id="content">
        <section id="text">
          <h2 className="maintext"><span style={{ fontWeight: "normal", color: "var(--main-color)" }}>hi!</span> i'm colin henderson.</h2>
          <p align="left">
            I'm currently a third year student at <a target="_blank" href="https://engineering.ucsc.edu/">UC Santa Cruz</a> studying Computer Science. I mainly
            focus on building web applications, with an emphasis on Python and React. {<br />}{<br />}
            Outside of programming, I really love writing, recording, and producing music. 
            If you're interested in getting a track produced, mixed, or mastered, please reach out to me <a href="mailto:colin.ch.henderson@gmail.com">here</a>.
          </p>
        </section>
        <section id="text">
          <h2 className="textheader">
            projects
            <button className="toggle-button hover-grow" onClick={toggleProjects}>
              <img src={showProjects ? "/down.svg" : "/up.svg"} alt="toggle-icon" />
            </button>
          </h2>
        </section>
        {showProjects && (
          <section id="projects" className="show">
            <Carousel items={items} />
          </section>
        )}
        <section id="text">
          <h2 className="textheader">
            resume
            <button className="toggle-button hover-grow" onClick={void 0}>
              <img src={dummy ? "/down.svg" : "/up.svg"} alt="toggle-icon" />
            </button>
          </h2>
        </section>
        <section id="text">
          <h2 className="textheader">
            coursework
            <button className="toggle-button hover-grow" onClick={void 0}>
              <img src={dummy ? "/down.svg" : "/up.svg"} alt="toggle-icon" />
            </button>
          </h2>
        </section>
        <section id="text">
          <h2 className="textheader">
            contact
            <button className="toggle-button hover-grow" onClick={void 0}>
              <img src={dummy ? "/down.svg" : "/up.svg"} alt="toggle-icon" />
            </button>
          </h2>
        </section>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);