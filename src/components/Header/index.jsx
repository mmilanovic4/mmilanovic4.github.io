import React, { useContext } from 'react';
import { DataContext } from '../../data/DataContext';

const Header = () => {
	const context = useContext(DataContext);
	return (
		<header className="header">
			<img src="/static/profile.jpg" alt="Profile pic" />
			<div>
				<h1>{context?.longName}</h1>
				<p>{context?.summary}</p>
				<div className="visible-on-print">
					<a href={context?.networks?.email?.href}>
						{context?.networks?.email?.href?.replace('mailto:', '')}
					</a>
				</div>
				<span className="header-networks">
					{Object?.keys(context?.networks)?.map((key) => {
						return (
							<a
								key={key}
								href={context?.networks[key]?.href}
								target="_blank"
								title={context?.networks[key]?.text}
							>
								<img
									src={`/static/icons/networks/${key}.svg`}
									alt={context?.networks[key]?.text}
								/>
							</a>
						);
					})}
				</span>
			</div>
		</header>
	);
};

export { Header };
