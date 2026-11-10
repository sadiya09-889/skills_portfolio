export type Education = {
	degree: string
	institution: string
	location: string
	startDate: string
	endDate: string
	cgpa: string
	coursework: string[]
}

export const education: Education[] = [
	{
		degree: 'B.Tech in Artificial Intelligence and Robotics',
		institution: 'Garden City University',
		location: 'Bengaluru',
		startDate: 'Oct 2023',
		endDate: 'Jun 2027',
		cgpa: '9.0/10.0',
		coursework: [
			'Deep Learning',
			'Machine Learning',
			'IoT Systems',
			'Computer Vision',
			'Transformer Architectures',
			'Data Analytics',
		],
	},
]
