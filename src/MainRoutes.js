import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from './Component/Home';
import { About } from './Component/About';
import { Graphics } from './Component/Services/Graphics';
import { WebDevelopment } from './Component/Services/WebDevelopment';
import { Seo } from './Component/Services/Seo';
import { DigitalMarketing } from './Component/Services/DigitalMarketing';
import { ContentWriting } from './Component/Services/ContentWriting';
import { Portfolio } from './Component/Portfolio';
import { Contact } from './Component/Contact';
import { Blog } from './Component/Blog'; 


export const MainRoutes = () => {
    const { pathname } = useLocation();
    return (
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
    )
}
