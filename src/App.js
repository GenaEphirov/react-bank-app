import React, {createContext} from "react";
import "./style.css";
import Header from './components/header/Header'
import UpperSideBar from './components/uppersidebar/UpperSideBar'


import getLanguage from './languagesAPI.js'
export const langContext = createContext(getLanguage('russian'))

export default function App() {
  let uppersidebar = {
    active: 'earnings',
  };
  return (
    <langContext.Provider value={getLanguage('russian')}>
      <Header />
      <UpperSideBar {...uppersidebar}/>
    </langContext.Provider>
  );
}
