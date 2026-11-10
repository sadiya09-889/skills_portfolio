import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { projects } from '../data/projects'

function Projects() {
	const [activeIndex, setActiveIndex] = useState(0)
	const project = projects[activeIndex]

	return (
		<section className="page-section" aria-labelledby="projects-heading">
			<div className="section-inner">
				<p className="section-kicker"><span className="section-number">02</span> Selected work</p>
				<h1 id="projects-heading" className="section-heading">Small experiments.<br />Serious intent.</h1>
				<p className="section-intro">A rotating casefile of full-stack systems and applied AI explorations — each one a little more curious than the last.</p>
				<div className="project-shell">
					<div className="project-index" role="tablist" aria-label="Project casefiles">
						<p>Casefile index</p>
						{projects.map((item, index) => <button key={item.title} className="project-tab" type="button" role="tab" aria-selected={activeIndex === index} onClick={() => setActiveIndex(index)}><span>0{index + 1}</span>{item.title}</button>)}
					</div>
					<AnimatePresence mode="wait">
						<motion.article key={project.title} className="paper-card project-feature" role="tabpanel" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .28 }}>
							<p className="label">Casefile / 0{activeIndex + 1}</p>
							<h2>{project.title}</h2>
							<p className="project-summary">{project.summary}</p>
							<div className="project-layout">
								<div><p className="label">What I built</p><ul className="bullet-list">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div>
								<div><p className="label">Tools in the room</p><div className="tag-list">{project.technologies.map((technology) => <span key={technology} className="tag">{technology}</span>)}</div></div>
							</div>
							<div className="project-actions"><a href={project.githubUrl} target="_blank" rel="noreferrer">View on GitHub ↗</a><a href={project.liveUrl}>Open project ↗</a></div>
							<div className="project-visual" aria-hidden="true"><span className="project-visual-mark">SB</span></div>
						</motion.article>
					</AnimatePresence>
				</div>
			</div>
		</section>
	)
}

export default Projects
