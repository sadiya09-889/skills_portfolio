export type Experience = {
	role: string
	company: string
	location: string
	startDate?: string
	endDate?: string
	highlights: string[]
	technologies: string[]
}

export const experience: Experience[] = [
	{
		role: 'Full Stack Developer Intern',
		company: 'Nerds and Geeks',
		location: 'Bengaluru',
		startDate: 'Jan 2026',
		endDate: 'Jun 2026',
		highlights: [
			'Built a production Library Management System for Garden City University.',
			'Used React.js with TypeScript, Vite, Tailwind CSS, Supabase, and PostgreSQL.',
			'Implemented OTP authentication and DELNET/IRINS integrations.',
		],
		technologies: ['React.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
	},
	{
		role: 'Machine Learning Intern',
		company: 'InternPe',
		location: 'Remote',
		highlights: [
			'Developed an SVM classification model for diabetes prediction.',
			'Implemented Linear Regression trend modeling with Matplotlib and Seaborn.',
			'Benchmarked five machine learning algorithms for IPL match score prediction.',
		],
		technologies: ['Python', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Machine Learning'],
	},
]
