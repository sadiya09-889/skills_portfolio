import { useEffect, useState } from 'react'

function TechMeshBackground() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setMousePosition({
				x: (event.clientX / window.innerWidth) * 20,
				y: (event.clientY / window.innerHeight) * 20,
			})
		}

		window.addEventListener('mousemove', handleMouseMove)
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [])

	return (
		<div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-50 pointer-events-none" aria-hidden="true">
			<div
				className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] opacity-40 transition-transform duration-200 ease-out [background-size:24px_24px]"
				style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
			/>

			<div className="absolute left-[10%] top-[-5%] h-[450px] w-[450px] animate-pulse rounded-full bg-blue-400/15 blur-[100px]" />
			<div className="absolute bottom-[5%] right-[10%] h-[550px] w-[550px] animate-blob rounded-full bg-indigo-500/10 blur-[120px]" />

			<div className="absolute bottom-0 left-0 right-0 h-[300px] overflow-hidden opacity-30">
				<svg
					className="absolute bottom-0 h-full w-[200%] animate-[wave_15s_linear_infinite]"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M0,30 C150,90 350,-20 500,40 C650,100 900,10 1200,50 L1200,120 L0,120 Z" fill="none" stroke="#3b82f6" strokeDasharray="6 6" strokeWidth="1.5" />
					<path d="M0,60 C200,10 400,80 600,30 C800,-20 1000,90 1200,40 L1200,120 L0,120 Z" fill="none" stroke="#6366f1" strokeWidth="1" />
				</svg>
			</div>

			<style>{`
				@keyframes wave {
					0% { transform: translateX(0); }
					100% { transform: translateX(-50%); }
				}

				@keyframes blob {
					0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
					50% { transform: translate3d(-5%, -4%, 0) scale(1.08); }
				}

				.animate-blob { animation: blob 18s ease-in-out infinite; }

				@media (prefers-reduced-motion: reduce) {
					.animate-pulse,
					.animate-blob,
					.animate-\[wave_15s_linear_infinite\] { animation: none; }
				}
			`}</style>
		</div>
	)
}

export default TechMeshBackground