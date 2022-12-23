
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

  const [isUserLogin, setIsUserLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [couponItems, setCouponItems] = useState([]);
  const [FilterCategory, setFilterCategory] = useState([]);
  const [FilterStore, setFilterStore] = useState([]);
  const [Title, setTitle] = useState(`${APP_NAME}Home`);
  const [projects, setProjects] = useState([]);
  const [data, setData] = useState([]);
  const [teams, setTeams] = useState([]);
  const [teamsImgPath, setTeamsImgPath] = useState("");
  const [img, setImg] = useState(null);
  const [singleUrl, setSingleUrl] = useState(null);


  if (getCookie("USER")) {
    setUserName(JSON.parse(getCookie("USER")).data.name);
    setUserId(JSON.parse(getCookie("USER")).data.user_token);
  }

  var values = {
    isUserLogin, setIsUserLogin, teams, teamsImgPath, userName, setUserName, couponItems, setCouponItems, FilterCategory, setFilterCategory, FilterStore, setFilterStore, setTitle, APP_NAME, URL, data, setData, img, setImg, setCookieinLocal, setUserId, userId, projects
  }

  useEffect(() => {
    if (getCookie("USER")) {
      setIsUserLogin(true);
      setUserName(JSON.parse(getCookie("USER")).data.name);
      setUserId(JSON.parse(getCookie("USER")).data.user_token);

      fetch(`${URL}api/project/${JSON.parse(getCookie("USER")).data.user_token}?status=`)
        .then((response) => response.json())
        .then((actualData) => { setProjects(actualData) })
        .catch((err) => {
          setProjects([]);
        })
    }

    else {
      setIsUserLogin(false);
    }

    fetch(`${URL}api/blogs?token=152784823qtjzdfg213&paginate=2&since_id=0`)
      .then((response) => response.json())
      .then((actualData) => { setData(actualData.data.data); setImg(actualData.media_path); setSingleUrl(actualData.single_blog); })
      .catch((err) => {
        setData([]);
      }
      );

    fetch(`${URL}api/team-member`)
      .then((response) => response.json())
      .then((actualData) => { setTeams(actualData.team); setTeamsImgPath(actualData.media_path); })
      .catch((err) => {
        setData([]);
      }
      );
  }, [userId]);



  function setCookieinLocal(name, value, days = 1) {

    var expires = "";

    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  document.title = Title;


  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }



  return (
    <AppContext.Provider value={values} >
      <BrowserRouter>
        <Header />
        <MainRoutes />
        <Footer />
        <Toaster position="top-right" containerStyle={{ "transform": "translateY(104px)" }} />
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
