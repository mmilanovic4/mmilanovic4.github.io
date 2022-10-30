import React from 'react';
import data from '../../data.json';

const Header = () => {
	return (
		<header className="header">
			<img src="/static/profile.jpg" alt="Profile pic" />
			<div>
				<h1>{data?.longName}</h1>
				<p>{data?.summary}</p>
				<div className="visible-on-print">
					<a href={data?.networks?.email?.href}>
						{data?.networks?.email?.href?.replace('mailto:', '')}
					</a>
				</div>
				<span className="header-networks">
					{Object?.keys(data?.networks)?.map((key) => {
						return (
							<a
								key={key}
								href={data?.networks[key]?.href}
								target="_blank"
								title={data?.networks[key]?.text}
							>
								<img
									src={`/static/icons/networks/${key}.svg`}
									alt={data?.networks[key]?.text}
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
