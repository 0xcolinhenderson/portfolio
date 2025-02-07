import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const App = () => {
  return (
    <div>
      <header>
        <h1>colin henderson</h1>
      </header>
      <div id="content">
        <section id="intro">
          <h2 className="greeting"><span style={{ fontWeight: "normal", color: "rgb(255, 170, 0)" }}>hi!</span> i'm colin henderson.</h2>
          <p align="left">
            I'm currently a third year student at <a href="https://engineering.ucsc.edu/">UC Santa Cruz</a> studying Computer Science.{<br />}{<br />}
            Outside of programming, I really love writing, recording, and producing music. 
            If you're interested in getting a track produced, mixed, or mastered, please reach out to me <a href="mailto:colin.ch.henderson@gmail.com">here</a>.
          </p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
        </section>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);