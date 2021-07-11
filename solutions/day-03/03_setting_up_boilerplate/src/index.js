// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import asabenehImage from './images/asabeneh.jpg'
import htmlLogo from './images/html_logo.png'
import cssLogo from './images/css_logo.png'
import reactLogo from './images/react_logo.png'

// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

// JSX element, main
const techs = [
  {
    title: 'HTML',
    src: htmlLogo,
    alt: 'HTML 5'
  },
  {
    title: 'CSS',
    src: cssLogo,
    alt: 'CSS 3'
  },
  {
    title: 'React',
    src: reactLogo,
    alt: 'ReactJS'
  }
]
const techsFormatted = techs.map((tech) => (
  <li key={tech.title} style={{textAlign: 'center'}}>
    <p>{tech.title}</p>
    <img src={tech.src} alt={tech.alt} style={{width: '200px'}} />
  </li>
))

const subscribe = (
  <section className="subscribe">
    <h1 className="subscribe__title">Subscribe</h1>
    <p className="subscribe__instruction">Sign up with your email address to receive news and updates.</p>
    <form onSubmit={(e) => e.preventDefault()} className="subscribe__form">
      <input type="text" placeholder="First name" className="subscribe__input" />
      <input type="text" placeholder="Last name" className="subscribe__input" />
      <input type="email" placeholder="Email" className="subscribe__input" />
      <button type="submit" className="subscribe__submit">Subscribe</button>
    </form>
  </section>
)

const SKILLS = [
  "HTML", "CSS", "Sass", "JS", "React", "Redux", "Node", "MongoDB",
  "Python", "Flask", "Django", "NumPy", "Pandas", "Data Analysis",
  "MYSQL", "GraphQL", "D3.js", "Gatsby", "Docker", "Heroku", "Git"
]

const userCard = (
  <section className="user-card">
    <img src={asabenehImage} alt='asabeneh avatar' className="user-card__avatar"/>
    <p className="user-card__name">Asabeneh Yetayeh</p>
    <p>Senior Developer, Finland</p>
    <h2 className="user-card__skills-title">Skills</h2>
    <ul className="user-card__skills-list">
      {SKILLS.map(skill => <li key={skill} className="user-card__skill">{skill}</li>)}
    </ul>
    <p>Joined on Aug 30, 2020</p>
  </section>
)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul style={{display: 'flex'}}>{techsFormatted}</ul>
      {subscribe}
      {userCard}
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)
