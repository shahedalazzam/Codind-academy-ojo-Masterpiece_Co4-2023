import React, {createContext, useContext, useState} from 'react';

const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [name, setUserName] = useState({});
  const [mergedData, setMergedData] = useState([]);
  const updateMergedData = data => {
    setMergedData([...mergedData, data]);
  };

  return (
    <AppContext.Provider
      value={{
        mergedData,
        updateMergedData,
        name,
        setUserName,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};