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
                        <div className="col-md-6 mx-auto mb-md-3">
                            <h1 className="heading fs-2">
                                Buy Packages
                            </h1>
                            <p className="para-sm fs-6">
                                Take a look at our affordable packages and choose one that suits your budget and needs.
                            </p>
                        </div>
                        <div className="col-12 px-0 pricings">

                            <div class="row mx-auto w-100">
                                <div className="col-3 my-auto">

                                    <div class="bg-radiant">
                                        <p className='mb-0 text-white'>
                                            PROJECT TYPE
                                        </p>
                                    </div>

                                </div>
                                <div className="col-6 my-auto">

                                    <div class="bg-radiant">
                                        <p className='mb-0 text-white'>
                                            PRICING
                                        </p>
                                    </div>
                                </div>
                                <div className="col-3 my-auto">

                                    <div class="bg-radiant">
                                        <p className='mb-0 text-white'>
                                            ACTION
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row mx-auto w-100">
                                <div className="col-3 my-auto">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center  pricingtitle">
                                        <p className='mb-0 text-uppercase'>
                                            LOGO
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6 my-auto">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center  pricing">
                                        <p className='mb-0'>
                                            Starting From $49 <span>to </span>$524
                                        </p>
                                    </div>
                                </div>
                                <div className="col-3 my-auto">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center  pricingaction">
                                        <p className='mb-0'>
                                            <a href='#pricing' class="btn-custom">GET IN TOUCH!</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row mx-auto w-100">
                                <div className="col-3 my-auto">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center  pricingtitle">
                                        <p className='mb-0 text-uppercase'>
                                            Graphic design
                                        </p>
                                    </div>

                                </div>
                                <div className="col-6 my-auto">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center  pricing">
                                        <p className='mb-0'>
                                            Starting From $49 <span>to</span> $499
                                        </p>
                                    </div>

                                </div>
                                <div className="col-3 my-auto">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center  pricingaction">
                                        <p className='mb-0'>
                                            <a href='#pricing' class="btn-custom">GET IN TOUCH!</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row mx-auto w-100">
                                <div className="col-3 my-auto">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center  pricingtitle">
                                        <p className='mb-0 text-uppercase'>
                                            Website development
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6 my-auto">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center  pricing ">
                                        <p className='mb-0'>
                                            Starting From $249 <span>to</span> $15,000
                                        </p>
                                    </div>
                                </div>
                                <div className="col-3 my-auto">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center  pricingaction">
                                        <p className='mb-0'>
                                            <a href='#pricing' class="btn-custom">GET IN TOUCH!</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row mx-auto w-100">
                                <div className="col-3 my-auto">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center  pricingtitle">
                                        <p className='mb-0'>
                                            SEO
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6 my-auto">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center  pricing">
                                        <p className='mb-0'>
                                            Starting From $449 <span>to </span>$2,149
                                        </p>
                                    </div>
                                </div>
                                <div className="col-3 my-auto">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center  pricingaction">
                                        <p className='mb-0'>
                                            <a href='#pricing' class="btn-custom">GET IN TOUCH!</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row mx-auto w-100">
                                <div className="col-3 my-auto">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center  pricingtitle ">
                                        <p className='mb-0'>
                                            SMM
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6 my-auto">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center pricing">
                                        <p className='mb-0'>
                                            Starting From $349 <span>to </span>$1,199
                                        </p>
                                    </div>
                                </div>
                                <div className="col-3 my-auto">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center  pricingaction ">
                                        <p className='mb-0'>
                                            <a href='#pricing' class="btn-custom">GET IN TOUCH!</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="row mx-auto w-100">
                                <div className="col-3 my-auto">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center  pricingtitle ">
                                        <p className='mb-0 text-uppercase'>
                                            Content writing
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6 my-auto">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center pricing">
                                        <p className='mb-0'>
                                            Starting From $100 <span>to</span> $1,199
                                        </p>
                                    </div>
                                </div>
                                <div className="col-3 my-auto">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center  pricingaction ">
                                        <p className='mb-0'>
                                            <a href='#pricing' class="btn-custom">GET IN TOUCH!</a>
                                        </p>
                                    </div>
                                </div>
                            </div>



                            <div class="row mx-auto w-100">
                                <div className="col-3 my-auto">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center   pricingtitle">
                                        <p className='mb-0 text-uppercase'>
                                            Digital Marketing
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6 my-auto">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center pricing">
                                        <p className='mb-0'>
                                            Starting From $349 <span>to</span> $6,999
                                        </p>
                                    </div>
                                </div>
                                <div className="col-3 my-auto">

                                    <div class="p-3 py-2 d-flex justify-content-center align-items-center  pricingaction ">
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
