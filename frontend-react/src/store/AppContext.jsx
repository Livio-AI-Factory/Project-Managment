import React, { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [curPage, setCurPage] = useState('projects');
  const [loggedIn, setLoggedIn] = useState(false);
  const [renderTick, setRenderTick] = useState(0);

  const triggerRender = useCallback(() => setRenderTick(t => t + 1), []);

  return (
    <AppContext.Provider value={{ curPage, setCurPage, loggedIn, setLoggedIn, triggerRender, renderTick }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
