import React from 'react';
import data from '../../data.json';

const Footer = () => {
	return (
		<footer className="footer">
			<p>
				&copy; {data?.longName}, {new Date()?.getFullYear()}.
			</p>
		</footer>
	);
};

export { Footer };
