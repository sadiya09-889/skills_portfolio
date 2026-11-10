import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

function Home() {
	const pointerX = useMotionValue(0)
	const pointerY = useMotionValue(0)
	const rotateX = useSpring(useTransform(pointerY, [-300, 300], [4, -4]), { stiffness: 120, damping: 20 })
	const rotateY = useSpring(useTransform(pointerX, [-300, 300], [-5, 5]), { stiffness: 120, damping: 20 })

	return (
		<section className="hero-section" onPointerMove={(event) => {
			pointerX.set(event.clientX - window.innerWidth / 2)
			pointerY.set(event.clientY - window.innerHeight / 2)
		}}>
			<div className="hero-grid">
				<motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
					<p className="availability"><span /> Open to thoughtful collaborations</p>
					<h1 className="hero-title">Ideas into <em>useful</em> things.</h1>
					<p className="hero-copy">I&apos;m Sadiya — a full-stack developer and aspiring AI/ML engineer building products where clear interfaces meet intelligent systems.</p>
					<div className="hero-actions">
						<a className="button-primary" href="#projects">See selected work <span aria-hidden="true">↘</span></a>
						<a className="button-secondary" href="#footer">Start a conversation <span aria-hidden="true">↗</span></a>
					</div>
					<div className="hero-meta" aria-label="Professional highlights">
						<div className="hero-meta-item"><strong>9.0</strong><span>GPA / 10.0</span></div>
						<div className="hero-meta-item"><strong>React + AI</strong><span>Current toolkit</span></div>
						<div className="hero-meta-item"><strong>Bengaluru</strong><span>Based in India</span></div>
					</div>
				</motion.div>

				<motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }} style={{ perspective: 1200 }}>
					<motion.div className="signal-board" style={{ rotateX, rotateY }}>
						<div className="signal-top"><span>SB / 026</span><span>Live signal board</span></div>
						<div className="signal-orbit" aria-hidden="true" />
						<h2 className="signal-title">Curiosity in.<br /><mark>Systems out.</mark></h2>
						<div className="signal-grid">
							<div className="signal-cell"><strong>01</strong><span>observe</span></div>
							<div className="signal-cell"><strong>02</strong><span>prototype</span></div>
							<div className="signal-cell"><strong>03</strong><span>ship</span></div>
							<div className="signal-cell"><strong>∞</strong><span>learn again</span></div>
						</div>
						<p className="signal-caption">full-stack / machine learning / human-first details</p>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}

export default Home
