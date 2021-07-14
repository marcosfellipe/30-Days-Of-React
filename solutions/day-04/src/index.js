// index.js
import React from "react";
import ReactDOM from "react-dom";
// To get the root element from the HTML document

import htmlLogo from "./images/html_logo.png";
import cssLogo from "./images/css_logo.png";
import reactLogo from "./images/react_logo.png";
import { Subscribe } from "./components/Subscribe";
import { UserCard } from "./components/UserCard";
import { TechList } from "./components/TechList";
import { ColorList } from "./components/ColorList";
import "./index.css";

// JSX element, header
const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const author = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
};
const date = "Oct 2, 2020";

// JSX element, header
const header = (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
);

// JSX element, main
const techs = [
  {
    title: "HTML",
    src: htmlLogo,
    alt: "HTML 5",
  },
  {
    title: "CSS",
    src: cssLogo,
    alt: "CSS 3",
  },
  {
    title: "React",
    src: reactLogo,
    alt: "ReactJS",
  },
];

const SKILLS = [
  "HTML",
  "CSS",
  "Sass",
  "JS",
  "React",
  "Redux",
  "Node",
  "MongoDB",
  "Python",
  "Flask",
  "Django",
  "NumPy",
  "Pandas",
  "Data Analysis",
  "MYSQL",
  "GraphQL",
  "D3.js",
  "Gatsby",
  "Docker",
  "Heroku",
  "Git",
];

// JSX element, main
const main = (
  <main>
    <div className="main-wrapper">
      <p>
        Prerequisite to get started{" "}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <TechList techs={techs} />
      <Subscribe />
      <UserCard skills={SKILLS} />
      <ColorList quantity={5} />
    </div>
  </main>
);

const copyRight = "Copyright 2020";

// JSX element, footer
const footer = (
  <footer>
    <div className="footer-wrapper">
      <p>{copyRight}</p>
    </div>
  </footer>
);

// JSX element, app
const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
