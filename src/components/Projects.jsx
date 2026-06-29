import React from 'react'
import { Astroid, ArrowUpRight } from 'lucide-react'
import { featured, projects } from '../data/projects'
import '../styles/Projects.css'


function FeaturedCard({project}) {
	return (
		<div className='featured-card'>
			<div className='image-container'>
				<img src={project.src} alt={project.name}  className='featured-card-img'/>
			</div>
			<div className='featured-card-info'>
				<h2>
					<Astroid/>
					{" "} Featured
				</h2>
				<h3>{project.name}</h3>
				<p>{project.description}</p>
				<ul>
					{project.tech.map((t) => (
							<li key={t}>{t}</li>
					))}
				</ul>
				<section className='link-section'>
					<a className='feat-link' href={project.live} target='_blank'>Live <ArrowUpRight/></a>
					<a className='feat-link' href={project.github} target='_blank'>Github <ArrowUpRight/></a>
				</section>
			</div>
		</div>
	)
}

function ProjectCard({project}) {
	return (
		<div className='project-card'>
			<img src={project.src} alt={project.name} className='proj-card-image'/>
			<h3 className='proj-card-title'>
				<Astroid size={14}/>
				{" "} {project.name}
			</h3>
			<p>{project.description}</p>
			<ul>
				{project.tech.map((t) => (
					<li key={t}>{t}</li>
				))}
			</ul>
			<section className='link-section'>
				<a className='proj-link' href={project.github} target='_blank'>Github <ArrowUpRight/></a>
			</section>
		</div>
	)
}

export default function Projects() {
	return (
		<>
		<div id='projects' className="section-divider slate">
			<span className='marker'><Astroid size={16}/></span>
			<span className='num'>04</span>
			<div className='line-divider'></div>
			<span className='section-label'>Projects</span>
		</div>

		<section className='feat-projects-container'>
			<FeaturedCard project={featured}/>
		</section>

		<section className='projects-container'>
			{projects.map((p) => (
				<ProjectCard key={p.id} project={p}/>
			))}			
		</section>		
		</>
	)
}

