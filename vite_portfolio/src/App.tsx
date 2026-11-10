import './App.css'
import Education from './Pages/Education'
import Experience from './Pages/Experience'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
	return (
		<div className="app-shell">
			<Navbar />
			<div id="top" className="scroll-mt-24">
				<Home />
			</div>
			<div id="education" className="scroll-mt-24">
				<Education />
			</div>
			<div id="projects" className="scroll-mt-24">
				<Projects />
			</div>
			<div id="experience" className="scroll-mt-24">
				<Experience />
			</div>
			<Footer />
		</div>
	)
}

export default App