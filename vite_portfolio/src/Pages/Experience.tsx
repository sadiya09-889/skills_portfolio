import { motion } from 'framer-motion'
import { experience } from '../data/experience'

function Experience() {
	return (
		<section className="page-section" aria-labelledby="experience-heading">
			<div className="section-inner">
				<p className="section-kicker"><span className="section-number">03</span> On the clock</p>
				<h1 id="experience-heading" className="section-heading">Building, learning,<br />shipping.</h1>
				<p className="section-intro">Hands-on work across full-stack product engineering and applied machine learning — with a bias toward useful outcomes.</p>
				<div className="timeline">
					{experience.map((entry, index) => (
						<motion.article key={`${entry.company}-${entry.role}`} className="timeline-item" initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .55, delay: index * .12 }}>
							<span className="timeline-dot" aria-hidden="true" />
							<div className="paper-card timeline-card">
								<div className="timeline-head"><div><h2 className="timeline-title">{entry.role}</h2><p className="timeline-company">{entry.company}</p></div><p className="timeline-date">{entry.startDate && entry.endDate ? `${entry.startDate} — ${entry.endDate}` : 'Internship'}<br />{entry.location}</p></div>
								<div className="timeline-content"><div><p className="label">Contributions</p><ul className="bullet-list">{entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div><div><p className="label">Technologies</p><div className="tag-list">{entry.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div></div></div>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	)
}

export default Experience
