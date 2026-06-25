import React from 'react'
import { Astroid } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


export default function Contact() {
  return (
    <>
    <div id='contact' className="section-divider">
      <span className='marker'><Astroid size={16}/></span>
      <span className='num'>05</span>
      <div className='line-divider'></div>
      <span className='section-label'>Contact</span>
    </div>

    <section  className='portfolio-section'
      style={{ display: 'block', textAlign: 'center', padding: '56px 28px' }}>
      <p className='section-statement'>
        Open to software engineering roles.<br/>
        <span>Let's connect.</span>
      </p>
      
      <p style={{fontSize: '17px', color:'grey'}}>
        I'm  always up for a collaboration or a chat over coffee.
      </p>

      <div className='contact-links'>
        <a 
            href='https://github.com/webdesigns23'
            target='_blank'
            className='section-link'
          >
            <FaGithub size={45} />
          </a>
          <a 
            href='https://www.linkedin.com/in/sharmaine-perea-8270b9311/'
            target='_blank'
            className='section-link'
          >
            <FaLinkedin size={45} />
          </a>
      </div>
    </section>
    </>
  )
}
