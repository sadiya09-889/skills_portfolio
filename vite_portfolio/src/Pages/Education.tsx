import { motion } from 'framer-motion'
import { education } from '../data/education'

function Education() {
	return (
		<section className="page-section" aria-labelledby="education-heading">
			<div className="section-inner">
				<p className="section-kicker"><span className="section-number">01</span> Foundations</p>
				<h1 id="education-heading" className="section-heading">Learning with<br />intention.</h1>
				<p className="section-intro">A foundation in artificial intelligence, robotics, and the engineering discipline needed to bring ideas into the real world.</p>
				{education.map((entry) => (
					<motion.article key={entry.institution} className="paper-card education-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .6 }}>
						<div className="education-year">{entry.startDate}<br />—<br />{entry.endDate}</div>
						<div>
							<h2 className="education-title">{entry.degree}</h2>
							<p className="education-institution">{entry.institution} · {entry.location}</p>
							<div className="education-side">
								<div><p className="label">Coursework</p><div className="tag-list">{entry.coursework.map((course) => <span className="tag" key={course}>{course}</span>)}</div></div>
								<span className="gpa">CGPA {entry.cgpa}</span>
							</div>
						</div>
					</motion.article>
				))}
			</div>
		</section>
	)
}

export default Education
