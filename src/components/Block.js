import React from 'react';
import { IconBriefcase, IconCalendar, IconLocation } from '../icons';

import css from './Block.module.css';

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
							<IconBriefcase />
							<span>{item?.name}</span>
						</span>
						<span className={css?.blockContentItem}>
							<IconLocation />
							<span>{item?.location}</span>
						</span>
					</div>
					<div className={css?.blockContentRightSide}>
						<span className={css?.blockContentItem}>
							<IconCalendar />
							<span>{`${item?.from} - ${item?.to || 'Present'}`}</span>
						</span>
					</div>
				</div>
			</div>
		</li>
	);
};

export { Block };
