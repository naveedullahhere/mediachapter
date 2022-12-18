
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './Component/Home';
import { About } from './Component/About';
import { Header } from './Component/layout/Header';
import { Footer } from './Component/layout/Footer';
import { Graphics } from './Component/Services/Graphics';
import { WebDevelopment } from './Component/WebDevelopment';
import { Seo } from './Component/Seo';
import { DigitalMarketing } from './Component/DigitalMarketing';
import { ContentWriting } from './Component/ContentWriting';
import { Portfolio } from './Component/Portfolio';
import { Contact } from './Component/Contact';
import { Blog } from './Component/Blog';


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
          <Route path="/seo" element={<Seo />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/content-writing" element={<ContentWriting />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
