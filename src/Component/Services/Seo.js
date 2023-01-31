import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import seo from "../assets/seo.png";
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import { ContactForm } from '../ContactForm';
import { SkillsCircle } from '../SkillsCircle';

export const Seo = () => {
    const { APP_NAME, setTitle } = useContext(AppContext);
    setTitle(`${APP_NAME}SEO`);
    return (
        <motion.div initial={{ transition: { duration: 1 }, opacity: 0 }} animate={{ transition: { duration: 1 }, opacity: 1 }} exit={{ transition: { duration: 1 }, opacity: 0 }}>
            <div className="seo image-banner sec ">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="h-100 col-sm-6 d-flex flex-column align-items-start justify-content-center">
                            <h1 className='text-white text-start'>Make Your Brand
                                Recognizable with Our
                                Astounding SEO Services</h1>
                            <Link to={'/contact'} className="btn btn-dark">
                                GET A QUOTE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec py-5">
                <div className="container">
                    <div className="row text-start">
                        <div className="col-md-6 my-md-auto my-3">
                            <h1 className="heading">SEO</h1>
                            <h1 className="fs-4 heading line-height-sm fw-normal">Boost Your Website Ranking with Advanced SEO Services
                            </h1>
                            <p className="para-sm text-muted my-4">
                                Want your website to appear on Google’s first page when someone
                                searches the keyword relevant to your business? You can achieve
                                this feat with our result-oriented SEO services.
                            </p>
                            <p className="para-sm d-flex gap-2 align-items-center my-2">
                                <i className="fa-regular fa-circle-dot text-danger"></i>Boost Ranking
                            </p>
                            <p className="para-sm d-flex gap-2 align-items-center my-2">
                                <i className="fa-regular fa-circle-dot text-danger"></i>Maximize Your Website’s Visibility
                            </p>
                            <p className="para-sm d-flex gap-2 align-items-center my-2">
                                <i className="fa-regular fa-circle-dot text-danger"></i>Bring Leads and Sales
                            </p>
                        </div>
                        <div className="col-md-6 my-md-auto my-3">
                            <img src={seo} alt="seo" className="w-100" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <h2 className="heading">
                                Our Seo  Services Cover Everything
                            </h2>
                            <p className="para-sm text-muted">
                                We help startups rise as industry leaders with our innovative digital marketing strategies
                                and flawless execution. Take a look below and find out what exactly you need
                            </p>
                        </div>
                        <div className="col-md-6 my-3 px-md-5 position-relative">
                            <SkillsCircle value={64} />

                            <h1 className="heading fs-4">
                                Keyword Research
                            </h1>
                            <p className="para-sm text-muted">
                                We have a dedicated research team that can help you find relevant and high-volume keywords googled by your target audience to find products and services same as provided by you.
                            </p>
                        </div>
                        <div className="col-md-6 my-3 px-md-5 position-relative">
                            <SkillsCircle value={49} />

                            <h1 className="heading fs-4">
                                Link Building
                            </h1>
                            <p className="para-sm text-muted">
                                Getting links from high-ranking and authoritative sites is a key to rank higher on search engine result pages (SERPs). Link builders at Media Chapter always generate powerful links.
                            </p>
                        </div>
                        <div className="col-md-6 my-3 px-md-5 position-relative">
                            <SkillsCircle value={68} />

                            <h1 className="heading fs-4">
                                Local Search
                            </h1>
                            <p className="para-sm text-muted">
                                You can’t only drive organic audience to your
                                website but also bring foot traffic to your physical
                                store with our smart SEO services.
                            </p>
                        </div>
                        <div className="col-md-6 my-3 px-md-5 position-relative">
                            <SkillsCircle value={56} />

                            <h1 className="heading fs-4">
                                eCommerce SEO
                            </h1>
                            <p className="para-sm text-muted">
                                Nobody will come across your online store until it
                                starters appearing on Google’s first page. Bring your
                                eCommerce website in the eyes of searchers
                                with our top-notch SEO services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm />
        </motion.div>
    )
}
