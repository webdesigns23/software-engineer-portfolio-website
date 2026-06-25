import React from 'react'
import Projects from './Projects'
import { Astroid } from 'lucide-react'
import software from '../assets/images/software.png'
import "../styles/sections.css"

// Array of skills
const languages = ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'React', 'Python', 'Flask', 'SQL', 'C', 'Github', 'Postman'];
const other = ['Microsoft Office', 'Adobe Illustrator', 'Google Workspace'];

export default function Development() {
  return (
    <>
    <div id='development' className="section-divider slate">
      <span className='marker'><Astroid size={16}/></span>
      <span className='num'>03</span>
      <div className='line-divider'></div>
      <span className='section-label'>Development</span>
    </div>

    <section  className='portfolio-section slate'>
      <div className='section-statement slate'>
        <img src={software} alt='computer'/>
        <p >
          Learning, building, and evolving through code
        </p>
        <div className='skill-container'>
          <ul>
            {languages.map((lang) => (
              <li key={lang} className='skill-pill'>{lang}</li>
            ))}
          </ul>
        </div>  
        <div className='skill-container muted'>
          <ul>
            {other.map((skill) => (
              <li key={skill} className='skill-pill muted'>{skill}</li>
            ))}
          </ul>
        </div>       
      </div>
      
      <div className='section-info'>
        <p>
          After stepping away from dance, I found myself drawn to software engineering through the same process I'd always known, trial and error, taking something apart, fixing it, and building it better. A teammate on my hockey team suggested I try a few online courses, and it immediately clicked. I went on to complete the Flatiron School Software Engineering program, building a foundation in JavaScript, React, Python, Flask, SQL, and PostgreSQL. The more I learned, the more it felt familiar. You're still building something from scratch, still solving problems, still refining until it works the way you want it to.
        </p>
      </div>
    </section>
      
    <section>
      <div className='section-projects'>
        <Projects />
      </div>
    </section>
  </>
  )
}
