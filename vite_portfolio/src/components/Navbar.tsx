import { useEffect, useState } from 'react'

type NavigationItem = {
	label: string
	href: string
}

const navigationItems: NavigationItem[] = [
	{ label: 'About', href: '#top' },
	{ label: 'Education', href: '#education' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Experience', href: '#experience' },
]

function Navbar() {
	const [activeSection, setActiveSection] = useState('#top')
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		const sections = navigationItems.map((item) => document.querySelector(item.href))
		const observer = new IntersectionObserver(
			(entries) => entries.forEach((entry) => {
				if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`)
			}),
			{ rootMargin: '-20% 0px -65% 0px' },
		)
		sections.forEach((section) => section && observer.observe(section))
		return () => observer.disconnect()
	}, [])

	return (
		<header className="site-header">
			<nav className="site-nav" aria-label="Main navigation">
				<a className="brand-mark" href="#top" onClick={() => setMenuOpen(false)}><span className="brand-dot" />Sadiya Banu</a>
				<div className="nav-links">
					{navigationItems.map((item) => <a key={item.href} className="nav-link" href={item.href} aria-current={activeSection === item.href ? 'page' : undefined}>{item.label}</a>)}
				</div>
				<a className="nav-cta" href="#footer">Let&apos;s talk <span aria-hidden="true">↗</span></a>
				<button className="mobile-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? '×' : '☰'}</button>
				<div className="mobile-menu" hidden={!menuOpen}>
					{navigationItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
					<a href="#footer" onClick={() => setMenuOpen(false)}>Let&apos;s talk ↗</a>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
