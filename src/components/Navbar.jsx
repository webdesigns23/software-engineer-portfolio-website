import React from 'react'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
	<nav className='portfolio-nav'>
		<a href='#about' className='nav-contact'>01. About Me</a>
		<a href='#brand' className='nav-contact'>02. Brand</a>
		<a href='#development' className='nav-contact'>03. Development</a>
		<a href='#projects' className='nav-contact'>04. Projects</a>
		<a href='#contact' className='nav-contact'>05. Contact</a>
	</nav>
  )
}
