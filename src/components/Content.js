import React from 'react';
import { Card } from '.';

import css from './Content.module.css';

const Briefcase = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-4 w-4"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
		></path>
	</svg>
);

const Location = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-4 w-4"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
		></path>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
		></path>
	</svg>
);

const Calendar = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-4 w-4"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
		></path>
	</svg>
);

const work = [
	{
		from: 'January 2021',
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

const education = [
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
		name: 'ETHS "Nikola Tesla" in Belgrade',
		title: 'Computer Technician',
		location: 'Belgrade, Serbia',
		img: 'tesla'
	}
];

const Block = ({ item, type = 'work' }) => {
	return (
		<li className={css?.block}>
			<img
				alt={item?.name}
				className={css?.blockLogo}
				src={`/static/${type}/${item?.img}.png`}
			/>
			<div className={css?.blockContent}>
				<span className={css?.blockContentTitle}>{item?.title}</span>
				<div className={css?.blockContentDescription}>
					<div className={css?.blockContentLeftSide}>
						<span className={css?.blockContentItem}>
							<Briefcase />
							<span>{item?.name}</span>
						</span>
						<span className={css?.blockContentItem}>
							<Location />
							<span>{item?.location}</span>
						</span>
					</div>
					<div className={css?.blockContentRightSide}>
						<span className={css?.blockContentItem}>
							<Calendar />
							<span>
								{item?.from} - {item?.to || 'Present'}
							</span>
						</span>
					</div>
				</div>
			</div>
		</li>
	);
};

const Content = () => {
	return (
		<>
			<Card title="Experience">
				<ul>
					{work?.map((item, index) => {
						return <Block item={item} key={index} type="work" />;
					})}
				</ul>
			</Card>
			<Card title="Education">
				<ul>
					{education?.map((item, index) => {
						return <Block item={item} key={index} type="edu" />;
					})}
				</ul>
			</Card>
		</>
	);
};

export { Content };
