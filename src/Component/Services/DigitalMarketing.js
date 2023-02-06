import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppContext } from '../../context/AppContext';
import digital from "../assets/digitalmarketing.png";
import { ContactForm } from '../ContactForm';
import { SkillsCircle } from '../SkillsCircle';


export const DigitalMarketing = () => {
    const { APP_NAME, setTitle } = useContext(AppContext);
    setTitle(`${APP_NAME}Digital Marketing`);
    return (
        <motion.div initial={{ transition: { duration: 1 }, opacity: 0 }} animate={{ transition: { duration: 1 }, opacity: 1 }} exit={{ transition: { duration: 1 }, opacity: 0 }}>
            <div className="digital-marketing image-banner sec">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="h-100 col-sm-6 d-flex flex-column align-items-start justify-content-center">
                            <h1 className='text-white text-start'>Drive More Leads, More
                                Revenue with Our
                                Digital Marketing Services</h1>
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
                            <h1 className="heading">Digital Marketing</h1>
                            <h1 className="fs-4 heading line-height-sm fw-normal">Elevate Your Brand with Our Digital Marketing Services
                            </h1>
                            <p className="para-sm text-muted my-4">
                                Media Chapter is the digital marketing agency that can help you bring traffic to your newly-launched startup and convert them into qualified leads or potential customers. Get your hands on our digital marketing services today and double your business.
                            </p>
                            <p className="para-sm d-flex gap-2 align-items-center my-2">
                                <i className="fa-regular fa-circle-dot text-danger"></i>Drive traffic
                            </p>
                            <p className="para-sm d-flex gap-2 align-items-center my-2">
                                <i className="fa-regular fa-circle-dot text-danger"></i>Increase conversion rate
                            </p>
                            <p className="para-sm d-flex gap-2 align-items-center my-2">
                                <i className="fa-regular fa-circle-dot text-danger"></i>Boost return on investment (ROI)
                            </p>
                        </div>
                        <div className="col-md-6 my-md-auto my-3">
                            <img src={digital} alt="seo" className="w-100" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <h2 className="heading fs-2">
                                Our Digital Marketing Services Cover Everything

                            </h2>
                            <p className="para-sm text-muted">
                                We help startups rise as industry leaders with our innovative digital marketing strategies
                                and flawless execution. Take a look below and find out what exactly you need
                            </p>
                        </div>
                        <div className="col-md-6 my-3 px-md-5">
                            <SkillsCircle value={70} />
                            <h1 className="heading fs-4">
                                Search Engine Optimization (SEO)
                            </h1>
                            <p className="para-sm text-muted">
                                Our top-level SEO specialists are here to help you
                                rank higher on Google and maximize your brand’s
                                visibility in the search results.
                            </p>
                        </div>
                        <div className="col-md-6 my-3 px-md-5">
                            <SkillsCircle value={78} />
                            <h1 className="heading fs-4">
                                Social Media Marketing (SMM)
                            </h1>
                            <p className="para-sm text-muted">
                                At Media Chapter, we create social media campaigns that drive organic traffic to your
                                business and grow your brand effectively.
                            </p>
                        </div>
                        <div className="col-md-6 my-3 px-md-5">
                            <SkillsCircle value={74} />
                            <h1 className="heading fs-4">
                                Social Media Marketing (SMM)
                            </h1>
                            <p className="para-sm text-muted">
                                Get potential leads instantly on your website with
                                well-researched and data-driven PPC campaigns
                                created by our first-rated PPC specialists.
                            </p>
                        </div>
                        <div className="col-md-6 my-3 px-md-5">
                            <SkillsCircle value={75} />
                            <h1 className="heading fs-4">
                                Content Writing
                            </h1>
                            <p className="para-sm text-muted">
                                No matter how powerful links you create, you can’t
                                make SEO successful without fresh and engaging
                                content. Connect with our top creative writers
                                and get top-quality content.
                            </p>
                        </div>
                        {/* <div className="col-12 mx-auto">
                            <button className="btn btn-main">
                                see more
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
            <ContactForm />
        </motion.div>
    )
}
