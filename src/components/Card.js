import React from 'react';

import css from './Card.module.css';

const Card = ({ children, title }) => {
	return (
		<div className={css?.card}>
			{title ? <h2>{title}</h2> : null}
			<div className={css?.content}>{children}</div>
		</div>
	);
};

export { Card };
