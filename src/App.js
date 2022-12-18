
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Header } from './Component/layout/Header';
import { Footer } from './Component/layout/Footer';
import { MainRoutes } from './MainRoutes';


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <MainRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
