
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './Component/Home';
import { About } from './Component/About';
import { Header } from './Component/layout/Header';
import { Footer } from './Component/layout/Footer';
import { Graphics } from './Component/Services/Graphics';
import { WebDevelopment } from './Component/WebDevelopment';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/graphic-design" element={<Graphics />} />
          <Route path="/web-development" element={<WebDevelopment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
