import React, { useContext } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from './Component/Home';
import { About } from './Component/About';
import { Graphics } from './Component/Services/Graphics';
import { WebDevelopment } from './Component/Services/WebDevelopment';
import { Seo } from './Component/Services/Seo';
import { DigitalMarketing } from './Component/Services/DigitalMarketing';
import { ContentWriting } from './Component/Services/ContentWriting';
import { Portfolio } from './Component/Portfolio';
import { AnimatePresence } from 'framer-motion';
import { Contact } from './Component/Contact';
import { Blog } from './Component/Blog';
import { Login } from './Component/Auth/Login';
import { Register } from './Component/Auth/Register';
import { AppContext } from './context/AppContext';
import { TermsNConditions } from './Component/TermsNConditions';
import { Privacy } from './Component/Privacy';
import { BlogDetails } from './Component/BlogDetails';
import { MyAccount } from './Component/Dashboard/MyAccount';
import { Projects } from './Component/Dashboard/Projects';
import { Invoices } from './Component/Dashboard/Invoices';
import { SingleProject } from './Component/Dashboard/SingleProject';
import { Spinner } from './Component/Spinner';
import { PrivateRoutes } from './PrivateRoutes';
import { SingleInvoice } from './Component/Dashboard/SingleInvoice';
import { Chat } from './Component/Dashboard/Chat';
import { NotFound } from './Component/404';
import { Pricing } from './Component/Pricing';
import { ProjectDiscussion } from './Component/Dashboard/ProjectDiscussion';
import { SingleProjectDiscussion } from './Component/Dashboard/ChatComponents/SingleProject';


export const MainRoutes = () => {
    const { isPageLoading, user } = useContext(AppContext);

    const { pathname } = useLocation();

    return (
        <AnimatePresence>
            {isPageLoading ?
                <div className="my-4">
                    <Spinner />
                </div>
                :
                <Routes key={pathname} location={pathname}>
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
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/terms-conditions" element={<TermsNConditions />} />
                    <Route path="/privacy-policy" element={<Privacy />} /> 
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/blog/:singleBlog" element={<BlogDetails />} />
                    <Route element={<PrivateRoutes />}>
                        <Route path="/my-account" element={<MyAccount />} exact />
                        <Route path="/projects" element={user && user.data.user_type === "user" ? <Projects /> : <Projects />} />
                        <Route path="/projects/:singleProject" element={user && user.data.user_type === "user" ? <SingleProject /> : <NotFound />} />
                        <Route path="/invoices" element={user && user.data.user_type === "user" ? <Invoices /> : <NotFound />} />
                        <Route path="/invoices/:singleInvoice" element={user && user.data.user_type === "user" ? <SingleInvoice /> : <NotFound />} exact />
                        <Route path="/private-chat" element={<Chat />} />
                        <Route path="/project-discussion" element={<ProjectDiscussion />} />
                        {/* <Route path="/project-discussion/:project" element={user && user.data.user_type === "user" ? <SingleProjectDiscussion /> : <NotFound />} exact /> */}
                        <Route path="/project-discussion/:project" element={ <SingleProjectDiscussion />} exact />
                    </Route>
                </Routes>
            }
        </AnimatePresence>
    )
}
