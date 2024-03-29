export const yearOfBirth = 1993;

export const information = [
	{ key: 'Age', value: new Date()?.getFullYear() - yearOfBirth },
	{ key: 'Location', value: 'Belgrade, Serbia' },
	{ key: 'Time zone', value: 'GMT+2' }
];

export const skills = ['JavaScript', 'React', 'HTML', 'CSS', 'SQL', 'Git'];

export const work = [
	{
		from: 'June 2020',
		to: null,
		name: 'LoanQ',
		title: 'Full-Stack Web Developer',
		img: 'lnq',
		location: 'Sydney, Australia'
	},
	{
		from: 'September 2018',
		to: null,
		name: 'Salestrekker',
		title: 'Full-Stack Web Developer',
		img: 'st',
		location: 'Sydney, Australia'
	},
	{
		from: 'December 2016',
		to: 'July 2018',
		name: 'High-Tech Bridge',
		title: 'Junior Security Engineer',
		img: 'htb',
		location: 'Geneva, Switzerland'
	}
];

export const education = [
	{
		from: 2016,
		to: 2018,
		name: 'Singidunum University',
		title: 'Master of Informatics',
		location: 'Belgrade, Serbia',
		img: 'singidunum'
	},
	{
		from: 2012,
		to: 2016,
		name: 'Singidunum University',
		title: 'Bachelor of Science in Informatics',
		location: 'Belgrade, Serbia',
		img: 'singidunum'
	},
	{
		from: 2008,
		to: 2012,
		name: 'ETHS "Nikola Tesla"',
		title: 'Computer Technician',
		location: 'Belgrade, Serbia',
		img: 'tesla'
	}
];
