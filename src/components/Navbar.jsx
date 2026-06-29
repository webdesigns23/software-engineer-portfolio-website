import React from 'react'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
	<nav className='portfolio-nav'>
		<a href='#about' className='nav'>01. About Me</a>
		<a href='#brand' className='nav'>02. Brand</a>
		<a href='#development' className='nav'>03. Development</a>
		<a href='#projects' className='nav'>04. Projects</a>
		<a href='#contact' className='nav'>05. Contact</a>
	</nav>
  )
}
