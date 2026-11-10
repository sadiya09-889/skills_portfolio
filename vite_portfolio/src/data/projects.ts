export type Project = {
	title: string
	summary: string
	highlights: string[]
	technologies: string[]
	githubUrl: string
	liveUrl: string
}

export const projects: Project[] = [
	{
		title: 'Library Management System',
		summary: 'A production library platform built for Garden City University.',
		highlights: [
			'Built end-to-end catalog, circulation, and discovery workflows.',
			'Implemented OTP authentication and DELNET/IRINS integrations.',
			'Connected a typed React frontend to Supabase and PostgreSQL.',
		],
		technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
		githubUrl: 'https://github.com/sadiya09-889',
		liveUrl: '#contact',
	},
	{
		title: 'Robust-MENOL',
		summary: 'An applied machine learning project built around reliable model experimentation.',
		highlights: [
			'Prepared structured data for repeatable training and evaluation.',
			'Compared model behavior across varied inputs and performance metrics.',
			'Focused on clear, interpretable results for practical decision-making.',
		],
		technologies: ['Python', 'Scikit-learn', 'Pandas', 'Data Analytics'],
		githubUrl: 'https://github.com/sadiya09-889',
		liveUrl: '#contact',
	},
	{
		title: 'SteadyHand_AI',
		summary: 'An AI and computer vision exploration focused on steadier human-computer interaction.',
		highlights: [
			'Explored visual signals as inputs for responsive AI-assisted feedback.',
			'Iterated on computer vision processing and model inference workflows.',
			'Designed the project around fast, understandable real-time responses.',
		],
		technologies: ['Python', 'PyTorch', 'OpenCV', 'Computer Vision'],
		githubUrl: 'https://github.com/sadiya09-889',
		liveUrl: '#contact',
	},
]
