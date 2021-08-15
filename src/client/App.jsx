import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { DataContextProvider } from './data/DataContext';

const App = () => {
	return (
		<DataContextProvider>
			<Header />
			<Main />
			<Footer />
		</DataContextProvider>
	);
};

export { App };
