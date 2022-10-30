import React, { createContext } from 'react';
import data from './data.json';

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
	return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export { DataContext, DataContextProvider };
