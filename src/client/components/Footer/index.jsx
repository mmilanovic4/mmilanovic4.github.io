import React, { useContext } from 'react';
import { DataContext } from '../../data/DataContext';

const Footer = () => {
	const context = useContext(DataContext);
	return (
		<footer className="footer">
			<p>
				&copy; {context?.longName}, {new Date()?.getFullYear()}.
			</p>
		</footer>
	);
};

export { Footer };
