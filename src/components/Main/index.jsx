import React from 'react';
import data from '../../data.json';

const Main = () => {
	const reversedWorkArray = [...data?.work];
	// reversedWorkArray?.reverse();

	const reversedEducationArray = [...data?.education];
	// reversedEducationArray?.reverse();

	return (
		<main className="main">
			<section>
				<h2>Work</h2>
				<ul className="resume-list">
					{reversedWorkArray?.map((row, index) => {
						return (
							<li key={index}>
								<span className="resume-list-years">
									{row?.from || ''} - {row?.to || ''}
								</span>
								<span className="resume-list-details">
									{row?.company && <strong>{row?.company}</strong>}
									{row?.position && <small>{row?.position}</small>}
									{row?.clients && (
										<small>
											<strong>Notable clients: </strong>
											{row?.clients?.join(', ') || '-'}
										</small>
									)}
								</span>
							</li>
						);
					})}
				</ul>
			</section>
			<section>
				<h2>Education</h2>
				<ul className="resume-list">
					{reversedEducationArray?.map((row, index) => {
						return (
							<li key={index}>
								<span className="resume-list-years">
									{row?.from || ''} - {row?.to || ''}
								</span>
								<span className="resume-list-details">
									{row?.institution && <strong>{row?.institution}</strong>}
									{row?.degree && <small>{row?.degree}</small>}
								</span>
							</li>
						);
					})}
				</ul>
			</section>
			<section>
				<h2>About</h2>
				<div className="about-row">
					<strong>Age: </strong>
					{new Date()?.getFullYear() - data?.yearOfBirth}
				</div>
				<div className="about-row">
					<strong>Native language: </strong>
					{data?.nativeLanguage}
				</div>
				<div className="about-row">
					<strong>Other languages: </strong>
					{data?.otherLanguages?.join(', ') || '-'}
				</div>
			</section>
		</main>
	);
};

export { Main };
