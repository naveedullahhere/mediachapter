import React from 'react';
import { motion } from 'framer-motion';
import content from "../assets/content.png";
import { ContactForm } from '../ContactForm';

export const ContentWriting = () => {
    return (
        <>
            <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}>
                <div className="content-writing image-banner sec">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="h-100 col-sm-6 d-flex flex-column align-items-start justify-content-center">
                                <h1 className='text-white text-start'>An Energy That Builds Memorable Brands</h1>
                                <button className="btn btn-dark">
                                    GET A QUOTE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sec py-5">
                    <div className="container">
                        <div className="row text-start">
                            <div className="col-md-6 my-md-auto my-3">
                                <h1 className="heading">Content Writing</h1>
                                <h1 className="fs-4 heading line-height-sm fw-normal">Make Your SEO Successful with High-Quality Content

                                </h1>
                                <p className="para-sm text-muted my-4">
                                    Fresh, original, and flawless content can help you win clients and meet your goals. Get in touch with professional writers at Media Chapter today and produce the best content for your brand.
                                </p>
                                <p className="para-sm d-flex gap-2 align-items-center my-2">
                                    <i class="fa-regular fa-circle-dot text-danger"></i>Customer-focused Content
                                </p>
                                <p className="para-sm d-flex gap-2 align-items-center my-2">
                                    <i class="fa-regular fa-circle-dot text-danger"></i>Out-of-the-ideas Ideas
                                </p>
                                <p className="para-sm d-flex gap-2 align-items-center my-2">
                                    <i class="fa-regular fa-circle-dot text-danger"></i>100% Original
                                </p>
                            </div>
                            <div className="col-md-6 my-md-auto my-3">
                                <img src={content} alt="seo" className="w-100" />
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
                                <h1 className="heading fs-4">
                                    Web Content
                                </h1>
                                <p className="para-sm text-muted">
                                    A website is a salesman that never sleep. So, it’s
                                    important to make sure that your website has content
                                    that make visitors stay and take desired actions.
                                    Hire our professional writers to create such content.
                                </p>
                            </div>
                            <div className="col-md-6 my-3 px-md-5">
                                <h1 className="heading fs-4">
                                    Blog Posts
                                </h1>
                                <p className="para-sm text-muted">
                                    Blogging is the sure-fire way to win audience if
                                    done rightly. Our top-rated bloggers can help
                                    you create and post high-quality content
                                    that speaks to your target audience.
                                </p>
                            </div>
                            <div className="col-md-6 my-3 px-md-5">
                                <h1 className="heading fs-4">
                                    Press Release
                                </h1>
                                <p className="para-sm text-muted">
                                    A press release in another great way of marketing.
                                    Deliver your message effectively to your preferred
                                    media outlets, social media channels, and search
                                    engines with the help of our skilled writers.
                                </p>
                            </div>
                            <div className="col-md-6 my-3 px-md-5">
                                <h1 className="heading fs-4">
                                    Social Media Content
                                </h1>
                                <p className="para-sm text-muted">
                                    In a cut-throat environment on social media,
                                    only a good content can make your campaigns
                                    successful. Hire our acclaimed writers and produce
                                    innovative social media content.
                                </p>
                            </div>
                            <div className="col-12 mx-auto">
                                <button className="btn btn-main">
                                    see more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactForm />
            </motion.div>
        </>
    )
}
