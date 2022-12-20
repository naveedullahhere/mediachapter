
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Header } from './Component/layout/Header';
import { Footer } from './Component/layout/Footer';
import { MainRoutes } from './MainRoutes';
import { AppContext } from "./context/AppContext.js";
import { useState } from 'react';
import { URL, APP_NAME } from './config'



function App() {

  var AppName = APP_NAME;
  const [Title, setTitle] = useState(`${AppName}Home`);
  document.title = Title;

  return (
    <AppContext.Provider
      value={{
        setTitle, AppName, URL
      }}
    >
      <BrowserRouter>
        {/* <Cursor /> */}
        <Header />
        <MainRoutes />
        <Footer />
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
