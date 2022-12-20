
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Header } from './Component/layout/Header';
import { Footer } from './Component/layout/Footer';
import { MainRoutes } from './MainRoutes';
import { Cursor } from './Component/layout/Cursor';



function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Cursor /> */}
        <Header />
        <MainRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
