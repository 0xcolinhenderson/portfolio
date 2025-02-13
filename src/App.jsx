import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import Typewriter from "typewriter-effect";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import ProjectCard from "./ProjectCard";
import { classes } from "./classes";
import { projects } from "./projects";

import "./style.css";

const App = () => {
  //tabs
  const [selectedTab, setSelectedTab] = useState("intro");
  const [fade, setFade] = useState("fade-in");

  //form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [fadeOut, setFadeOut] = useState(false);
  const [messageType, setMessageType] = useState('');

  const handleTabClick = (tab) => {
    if (tab !== selectedTab) {
      setFade("fade-out");
      setTimeout(() => {
        setSelectedTab(tab);
        setFade("fade-in");
      }, 500);
    }
  };

  useEffect(() => {
    setFade("fade-in");
  }, [selectedTab]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sanitizeInput = (input) => {
    const element = document.createElement('div');
    element.innerText = input;
    return element.innerHTML;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      message: sanitizeInput(formData.message)
    };

    if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.message) {
      setErrorMessage("All fields are required.");
      setMessageType('failure');
      setFadeOut(false);
      setTimeout(() => setFadeOut(true), 4500);
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(sanitizedData.email)) {
      setErrorMessage("Please enter a valid email address.");
      setMessageType('failure');
      setFadeOut(false);
      setTimeout(() => setFadeOut(true), 4500);
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }

    console.log("Form submitted with sanitized data:", sanitizedData);
    setErrorMessage("Form submitted.");
    setMessageType('success');
    setFadeOut(false);
    setTimeout(() => setFadeOut(true), 4500);
    setTimeout(() => setErrorMessage(''), 5000);
  };

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
                resume
              </h3>
            </section>
          </div>
          <div className={`displayedContent ${fade}`}>
            {selectedTab === "intro" && (
              <>
                <p>
                  I'm currently a third year student at <a className="link" target="_blank" href="https://engineering.ucsc.edu/">UC Santa Cruz</a> studying in Computer Science.
                </p>
                <p>
                  I love software development, and I'm always actively looking for opportunities to learn and grow as a developer. I have experience with a variety of languages and frameworks,
                  including C++, Python, JavaScript, C#, and Java.
                </p>
                <p>
                  Outside of programming, I really love writing, recording, and producing music.
                  If you're interested in getting a track produced, mixed, or mastered, please reach out to me <a className="link" href="mailto:colin.ch.henderson@gmail.com">here</a>.
                </p>
                <p>
                  This site was made with React + Vite. Feel free to take a look at the source in the <span className="highlight" id="projects" onClick={() => handleTabClick("projects")}>projects </span>tab.
                </p>
              </>
            )}
            {selectedTab === "projects" && (
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    image={project.image}
                    name={project.name}
                    subtitle={project.subtitle}
                    languages={project.languages}
                    webLink={project.webLink}
                    githubLink={project.githubLink}
                  />
                ))}
              </div>
            )}
            {selectedTab === "coursework" && (
              <>
                <p>University of California, Santa Cruz</p>
                <p className="subtitle">2022 - Present</p>
                <DataTable className="custom-datatable" value={classes} tableStyle={{ fontWeight: "100", minWidth: '50rem' }}>
                    <Column field="quarter" header="Quarter"></Column>
                    <Column field="title" header="Title"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="grade" header="Grade"></Column>
                    <Column field="units" header="Units"></Column>
                </DataTable>
              </>
            )}
            {selectedTab === "contact" && (
              <>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>
                      name
                    </label>
                    <input type="text" name="name" placeholder="name" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>
                      email
                    </label>
                    <input type="email" name="email" placeholder="email@email.com" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="form-group-full">
                    <label>
                      message
                    </label>
                    <textarea name="message" placeholder="your message here..." value={formData.message} onChange={handleChange}></textarea>
                  </div>
                  <div className="submit-container">
                    <input type="submit" value="submit" />
                    {errorMessage && <div className={`error-message ${fadeOut ? 'fade-out' : ''}`} id={messageType}>{errorMessage}</div>}
                  </div>
                </form>
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