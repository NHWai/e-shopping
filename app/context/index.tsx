"use client";
import React, { createContext, useState } from "react";

interface StateType {
  count: number;
  addItem: () => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

const initialState: StateType = { count: 0, addItem: () => {} };

const AppContext = createContext(initialState);

export const AppContextProvider = (props: ProviderProps) => {
  const [count, setCount] = useState(0);

  function addItem() {
    setCount((pre) => pre + 1);
  }

  return (
    <AppContext.Provider value={{ count, addItem }}>
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContext;
