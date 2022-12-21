
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Header } from './Component/layout/Header';
import { Footer } from './Component/layout/Footer';
import { MainRoutes } from './MainRoutes';
import { AppContext } from "./context/AppContext.js";
import { useState, useEffect } from 'react';
import { URL, APP_NAME } from './config'
import { Toaster } from "react-hot-toast";



function App() {

  var AppName = APP_NAME;
  const [Title, setTitle] = useState(`${AppName}Home`);
  const [data, setData] = useState([]);
  const [img, setImg] = useState(null);
  const [singleUrl, setSingleUrl] = useState(null);

  useEffect(() => {
    fetch(`${URL}api/blogs?token=152784823qtjzdfg213&paginate=2&since_id=0`)
      .then((response) => response.json())
      .then((actualData) => { setData(actualData.data.data); setImg(actualData.media_path); setSingleUrl(actualData.single_blog); })
      .catch((err) => {
        setData([]);
      });
  }, []);

  document.title = Title;

  return (
    <AppContext.Provider
      value={{
        setTitle, AppName, URL, data, setData, img, setImg
      }}
    >
      <BrowserRouter>
        {/* <Cursor /> */}
        <Header />
        <MainRoutes />
        <Footer />
        <Toaster position="top-right" containerStyle={{ "transform": "translateY(104px)" }} />
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
