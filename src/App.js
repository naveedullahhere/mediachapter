
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Home } from './Component/Home';
import { Header } from './Component/layout/Header';
import { Footer } from './Component/layout/Footer';


function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
