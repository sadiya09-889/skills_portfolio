type FooterLink = { label: string; href: string }

const socialLinks: FooterLink[] = [
	{ label: 'GitHub', href: 'https://github.com/sadiya09-889' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/sadiya-banu' },
	{ label: 'Email', href: 'mailto:sadiyabanu7705@gmail.com' },
]

function Footer() {
	return (
		<footer id="footer" className="footer">
			<div className="footer-inner">
				<p className="section-kicker" style={{ color: 'var(--yellow)' }}><span className="section-number" style={{ color: 'rgba(255,253,248,.45)' }}>04</span> Next signal</p>
				<h2 className="footer-title">Have a good <em>problem?</em></h2>
				<div className="footer-row">
					<div className="footer-links">{socialLinks.map((link) => <a key={link.label} href={link.href} target={link.label === 'Email' ? undefined : '_blank'} rel={link.label === 'Email' ? undefined : 'noreferrer'}>{link.label} ↗</a>)}</div>
					<span className="footer-small">© 2026 Sadiya Banu · Built with curiosity</span>
				</div>
			</div>
		</footer>
	)
}

export default Footer
