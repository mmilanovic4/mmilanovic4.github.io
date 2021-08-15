import React, { useContext } from 'react';
import { DataContext } from '../../data/DataContext';

const Main = () => {
	const context = useContext(DataContext);
	return (
		<main className="main">
			<section>
				<h2>Work</h2>
				<ul className="resume-list">
					{context?.work?.reverse()?.map((row, index) => {
						return (
							<li key={index}>
								<span className="resume-list-years">
									{row?.from || ''} - {row?.to || ''}
								</span>
								<span className="resume-list-details">
									{row?.company && <strong>{row?.company}</strong>}
									{row?.position && <small>{row?.position}</small>}
								</span>
							</li>
						);
					})}
				</ul>
			</section>
			<section>
				<h2>Education</h2>
				<ul className="resume-list">
					{context?.education?.reverse()?.map((row, index) => {
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
		</main>
	);
};

export { Main };
