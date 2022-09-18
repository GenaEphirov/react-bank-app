import React, {createContext} from "react";
import "./style.css";
import Header from './components/header/Header'
import getLanguage from './languagesAPI.js'

export const langContext = createContext(getLanguage('russian'))

export default function App() {
  return (
    <langContext.Provider value={getLanguage('russian')}>
      <Header />
    </langContext.Provider>
  );
}
