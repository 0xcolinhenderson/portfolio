import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Carousel from "./Carousel";

const items = [
  "Item 1",
  "Item 2",
  "Item 3"
];

const App = () => {
  return (
    <div>
      <header>
        <h1>colin henderson</h1>
        <div className="button-container">
          <button className="icon-button">
            <img src="/github.svg" alt="github-icon" />
          </button>
          <button className="icon-button">
            <img src="/linkedin.svg" alt="linkedin-icon" />
          </button>
          <button className="icon-button">
            <img src="/email.svg" alt="email-icon" />
          </button>
        </div>
      </header>
      <div id="content">
        <section id="text">
          <h2 className="greeting"><span style={{ fontWeight: "normal", color: "rgb(255, 170, 0)" }}>hi!</span> i'm colin henderson.</h2>
          <p align="left">
            I'm currently a third year student at <a href="https://engineering.ucsc.edu/">UC Santa Cruz</a> studying Computer Science. I mainly
            focus on building web applications, with an emphasis on Python and React. {<br />}{<br />}
            Outside of programming, I really love writing, recording, and producing music. 
            If you're interested in getting a track produced, mixed, or mastered, please reach out to me <a href="mailto:colin.ch.henderson@gmail.com">here</a>.
          </p>
        </section>
        <section id="text">
          <h2 className="greeting">projects</h2>
        </section>
        <section id="projects">
          <Carousel items={items} />
        </section>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);