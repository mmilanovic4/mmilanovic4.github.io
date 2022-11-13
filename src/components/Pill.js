import React from 'react';

import css from './Pill.module.css';

const Pill = ({ children }) => {
	return <div className={css?.pill}>{children}</div>;
};

export { Pill };
