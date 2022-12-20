import { motion } from 'framer-motion';
import React from 'react'

export const Blog = () => {
    return (
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}>
            <div className="sec py-5 blog">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="heading">
                                Boost Your Knowledge with Creative Blog
                            </h1>
                            <p className="para-sm text-muted">
                                Reading can help you build opinions and make better decisions. Let’s go through our creative and informative blog and enhance your knowledge.
                            </p>
                        </div>
                        <div className="col-lg-10 mx-auto my-4">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 my-3 text-start">
                                    <div class="card rounded-4 overflow-hidden shadow">
                                        <img src="https://www.mediachapter.us/wp-content/uploads/2021/10/benefits-of-graphics-1-300x256.jpg" class="card-img-top" alt="blog" />
                                        <div class="card-body my-3">
                                            <h6 class="card-title">Benefits of Graphic design for businesses in 2022</h6>
                                            <p className="my-3 text-danger fs-smm">
                                                October 17, 2021  No Comments
                                            </p>
                                            <p class="card-text para-sm fs-smm text-muted">Benefits of Graphic design for businesses in 2022 The value of graphic design for business Whether you have a small</p>
                                            <a href="#" class="text-danger">Read More ↗</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 my-3 text-start">
                                    <div class="card rounded-4 overflow-hidden shadow">
                                        <img src="https://www.mediachapter.us/wp-content/uploads/2021/10/9-reason-why-300x256.jpg" class="card-img-top" alt="blog" />
                                        <div class="card-body my-3">
                                            <h6 class="card-title">Benefits of Graphic design for businesses in 2022</h6>
                                            <p className="my-3 text-danger fs-smm">
                                                October 17, 2021  No Comments
                                            </p>
                                            <p class="card-text para-sm fs-smm text-muted">Benefits of Graphic design for businesses in 2022 The value of graphic design for business Whether you have a small</p>
                                            <a href="#" class="text-danger">Read More ↗</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 my-3 text-start">
                                    <div class="card rounded-4 overflow-hidden shadow">
                                        <img src="https://www.mediachapter.us/wp-content/uploads/2021/10/benefit-of-content-1-300x256.jpg" class="card-img-top" alt="blog" />
                                        <div class="card-body my-3">
                                            <h6 class="card-title">Benefits of Graphic design for businesses in 2022</h6>
                                            <p className="my-3 text-danger fs-smm">
                                                October 17, 2021  No Comments
                                            </p>
                                            <p class="card-text para-sm fs-smm text-muted">Benefits of Graphic design for businesses in 2022 The value of graphic design for business Whether you have a small</p>
                                            <a href="#" class="text-danger">Read More ↗</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec py-5 blog">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="heading">
                                You May Also Like
                            </h1>
                            <p className="para-sm text-muted">
                                Looking for some more professionally-tailored blog posts? Take a look at some well-written blogs below.
                            </p>
                        </div>
                        <div className="col-lg-10 mx-auto my-4">
                            <div className="row">
                                <div className="col-md-6 my-3">
                                    <div class="card mb-3 text-start shadow h-100">
                                        <div class="row g-0 h-100">
                                            <div class="col-md-6">
                                                <img src="https://www.mediachapter.us/wp-content/uploads/2021/10/Why-you-should-choose-1-300x256.jpg" class="h-100 w-100 img-fluid rounded-start" alt="Blog" />
                                            </div>
                                            <div class="col-md-6">
                                                <div class="card-body">
                                                    <h6 class="card-title">Why you should choose PPC Services for your Small Business?</h6>
                                                    <p className="my-3 text-danger fs-smm">October 17, 2021  No Comments</p>
                                                    <p class="card-text para-sm fs-smm text-muted">Why you should choose PPC Services for your Small Business? PPC Services for Small Business PPC marketing is one of the most</p>
                                                    <a href="#" class="text-danger">Read More ↗</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 my-3">
                                    <div class="card shadow mb-3 text-start h-100">
                                        <div class="row g-0 h-100">
                                            <div class="col-md-6">
                                                <img src="https://www.mediachapter.us/wp-content/uploads/2021/10/8-reasons-why-your-300x256.jpg" class="h-100 w-100 img-fluid rounded-start" alt="Blog" />
                                            </div>
                                            <div class="col-md-6">
                                                <div class="card-body">
                                                    <h6 class="card-title">8 Reasons Why Your Website Needs Search Engine Optimization</h6>
                                                    <p className="my-3 text-danger fs-smm">October 17, 2021  No Comments</p>
                                                    <p class="card-text para-sm fs-smm text-muted">8 Reasons Why Your Website Needs Search Engine Optimization Moment’s consumers calculate on hunt machines to help them find everything</p>
                                                    <a href="#" class="text-danger">Read More ↗</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 my-3">
                                    <div class="card mb-3 text-start shadow h-100">
                                        <div class="row g-0 h-100">
                                            <div class="col-md-6">
                                                <img src="https://www.mediachapter.us/wp-content/uploads/2021/10/social-media-marketing-1-300x256.jpg" class="h-100 w-100 img-fluid rounded-start" alt="Blog" />
                                            </div>
                                            <div class="col-md-6">
                                                <div class="card-body">
                                                    <h6 class="card-title">Social Media Marketing for Businesses</h6>
                                                    <p className="my-3 text-danger fs-smm">January 10, 2022  No Comments</p>
                                                    <p class="card-text para-sm fs-smm text-muted">Social Media Marketing for Businesses Social media marketing is an important way for businesses of all sizes to reach prospects</p>
                                                    <a href="#" class="text-danger">Read More ↗</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 my-3">
                                    <div class="card mb-3 text-start shadow h-100">
                                        <div class="row g-0 h-100">
                                            <div class="col-md-6">
                                                <img src="https://www.mediachapter.us/wp-content/uploads/2021/10/9-principles-1-300x256.webp" class="h-100 w-100 img-fluid rounded-start" alt="Blog" />
                                            </div>
                                            <div class="col-md-6">
                                                <div class="card-body">
                                                    <h6 class="card-title">9 PRINCIPLES OF GOOD WEB DESIGN</h6>
                                                    <p className="my-3 text-danger fs-smm">February 14, 2022  No Comments</p>
                                                    <p class="card-text para-sm fs-smm text-muted">9 PRINCIPLES OF GOOD WEB DESIGN Effective website design should perform the intended function of delivering its message while placing</p>
                                                    <a href="#" class="text-danger">Read More ↗</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 my-">
                            <button className="btn btn-main">
                                SEE MORE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
