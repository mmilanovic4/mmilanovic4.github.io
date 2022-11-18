import React from 'react';
import { Card } from './Card';
import { Block } from './Block';
import { Pill } from './Pill';

import css from './Layout.module.css';
import { IconAt, IconGitHub, IconInstagram, IconYouTube } from '../icons';
import { education, information, skills, work } from '../data';

const Layout = () => {
	return (
		<div className={css?.container}>
			<div className={css?.leftSide}>
				<Card>
					<div className={css?.profile}>
						<a>
							<img
								alt="Miloš Milanović"
								className={css?.profileAvatar}
								src="/static/profile.jpg"
							/>
						</a>
						<h2 className={css?.profileTitle}>Miloš Milanović</h2>
						<p className={css?.profileSubtitle}>Web Developer</p>
					</div>
				</Card>
				<Card title="Information">
					<div className={css?.information}>
						<ul>
							{information?.map((item) => {
								return (
									<li key={item?.key}>
										<strong>{item?.key}</strong>
										<span>{item?.value}</span>
									</li>
								);
							})}
						</ul>
					</div>
				</Card>
				<Card title="Skills">
					<div className={css?.pillWrapper}>
						{skills?.map((item) => {
							return <Pill key={item}>{item}</Pill>;
						})}
					</div>
				</Card>
			</div>
			<div className={css?.rightSide}>
				<Card title="Hello! 👋">
					<div className={css?.socialNetworks}>
						<a href="mailto:mmilanovic016@gmail.com">
							<IconAt />
						</a>
						<a href="https://github.com/mmilanovic4" target="_blank">
							<IconGitHub />
						</a>
						<a href="https://www.instagram.com/mmilanovic4" target="_blank">
							<IconInstagram />
						</a>
						<a
							href="https://www.youtube.com/@mmilanovic4"
							target="_blank"
						>
							<IconYouTube />
						</a>
					</div>
				</Card>
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
			</div>
		</div>
	);
};

export { Layout };
