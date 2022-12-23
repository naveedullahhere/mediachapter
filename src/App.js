
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Header } from './Component/layout/Header';
import { Footer } from './Component/layout/Footer';
import { MainRoutes } from './MainRoutes';
import { AppContext } from "./context/AppContext.js";
import { useState, useEffect } from 'react';
import { URL, APP_NAME } from './config'
import { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from 'react-redux';
import { removeUserData, addUserData, updateUserData } from './actions';


function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user[0]);
  const [couponItems, setCouponItems] = useState([]);
  const [FilterCategory, setFilterCategory] = useState([]);
  const [FilterStore, setFilterStore] = useState([]);
  const [Title, setTitle] = useState(`${APP_NAME}Home`);
  const [data, setData] = useState([]);
  const [teams, setTeams] = useState([]);
  const [teamsImgPath, setTeamsImgPath] = useState("");
  const [img, setImg] = useState(null);
 
  var values = {
    teams, teamsImgPath, couponItems, setCouponItems, FilterCategory, setFilterCategory, FilterStore, setFilterStore, setTitle, APP_NAME, URL, data, setData, img, setImg, removeUserData, addUserData, updateUserData, dispatch, user
  }

  useEffect(() => {
    fetchTeams();
  }, [user]);


  const fetchTeams = () => {
    fetch(`${URL}api/team-member`)
      .then((response) => response.json())
      .then((actualData) => { setTeams(actualData.team); setTeamsImgPath(actualData.media_path); })
      .catch((err) => {
        setData([]);
      }
      );
  }

  document.title = Title;

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
