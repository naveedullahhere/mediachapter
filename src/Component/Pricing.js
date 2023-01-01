import { motion } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom';
import { ContactForm } from './ContactForm';

export const Pricing = () => {
    return (
        <motion.div initial={{ transition: { duration: 1 }, opacity: 0 }} animate={{ transition: { duration: 1 }, opacity: 1 }} exit={{ transition: { duration: 1 }, opacity: 0 }}>
            <div className="sec py-md-5 py-3 my-md-5">

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="heading fs-2">
                                But Packages
                            </h1>
                            <p className="para-sm fs-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed molestiae veniam nulla
                            </p>
                        </div>
                        <div className="col-12 px-0 pricing">

                            <div class="row mx-auto w-100">
                                <div className="col-3">

                                    <div class="bg-radiant">
                                        <p className='mb-0 text-white'>
                                            PROJECT TYPE
                                        </p>
                                    </div>

                                </div>
                                <div className="col-6">

                                    <div class="bg-radiant">
                                        <p className='mb-0 text-white'>
                                            PRICING
                                        </p>
                                    </div>
                                </div>
                                <div className="col-3">

                                    <div class="bg-radiant">
                                        <p className='mb-0 text-white'>
                                            COLUMN TITLE
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row mx-auto w-100">
                                <div className="col-3">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center ">
                                        <p className='mb-0 text-uppercase'>
                                            Graphic design
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center ">
                                        <p className='mb-0'>
                                            Starting From $49 <span>to</span> $499
                                        </p>
                                    </div>
                                </div>
                                <div className="col-3">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center ">
                                        <p className='mb-0'>
                                            <a href='#pricing' class="btn-custom">GET IN TOUCH!</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row mx-auto w-100">
                                <div className="col-3">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center  ">
                                        <p className='mb-0 text-uppercase'>
                                            Digital Marketing
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center">
                                        <p className='mb-0'>
                                            Starting From $349 <span>to</span> $6,999
                                        </p>
                                    </div>
                                </div>
                                <div className="col-3">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center  ">
                                        <p className='mb-0'>
                                            <a href='#pricing' class="btn-custom">GET IN TOUCH!</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row mx-auto w-100">
                                <div className="col-3">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center  ">
                                        <p className='mb-0 text-uppercase'>
                                            Content writing
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center">
                                        <p className='mb-0'>
                                            Starting From $100 <span>to</span> $1,199
                                        </p>
                                    </div>
                                </div>
                                <div className="col-3">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center  ">
                                        <p className='mb-0'>
                                            <a href='#pricing' class="btn-custom">GET IN TOUCH!</a>
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div class="row mx-auto w-100">
                                <div className="col-3">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center ">
                                        <p className='mb-0 text-uppercase'>
                                            Website development
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center  ">
                                        <p className='mb-0'>
                                            Starting From $249 <span>to</span> $15,000
                                        </p>
                                    </div>
                                </div>
                                <div className="col-3">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center ">
                                        <p className='mb-0'>
                                            <a href='#pricing' class="btn-custom">GET IN TOUCH!</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row mx-auto w-100">
                                <div className="col-3">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center bg-light">
                                        <p className='mb-0 text-uppercase'>
                                            LOGO
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center bg-light">
                                        <p className='mb-0'>
                                            Starting From $49 <span>to </span>$524
                                        </p>
                                    </div>
                                </div>
                                <div className="col-3">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center bg-light">
                                        <p className='mb-0'>
                                            <a href='#pricing' class="btn-custom">GET IN TOUCH!</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row mx-auto w-100">
                                <div className="col-3">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center bg-light">
                                        <p className='mb-0'>
                                            SEO
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center bg-light">
                                        <p className='mb-0'>
                                            Starting From $449 <span>to </span>$2,149
                                        </p>
                                    </div>
                                </div>
                                <div className="col-3">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center bg-light">
                                        <p className='mb-0'>
                                            <a href='#pricing' class="btn-custom">GET IN TOUCH!</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row mx-auto w-100">
                                <div className="col-3">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center  ">
                                        <p className='mb-0'>
                                            SMM
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center">
                                        <p className='mb-0'>
                                            Starting From $349 <span>to </span>$1,199
                                        </p>
                                    </div>
                                </div>
                                <div className="col-3">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center  ">
                                        <p className='mb-0'>
                                            <a href='#pricing' class="btn-custom">GET IN TOUCH!</a>
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div id="pricing">

                <ContactForm action={'/'} />

            </div>
        </motion.div>
    )
}
