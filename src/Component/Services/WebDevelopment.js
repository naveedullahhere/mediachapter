import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { ContactForm } from '../ContactForm';
import webImg from '../assets/home-slider.png';
import first from '../assets/first.png';
import second from '../assets/sec.png';
import third from '../assets/third.png';
import fourth from '../assets/fifth.png';
import portfolio2 from '../assets/Portfolio/2.png';
import portfolio3 from '../assets/Portfolio/3.png';
import portfolio4 from '../assets/Portfolio/4.png';
import portfolio5 from '../assets/Portfolio/5.png';
import tech1 from '../assets/Tech/tech1.png';
import tech2 from '../assets/Tech/tech2.png';
import tech3 from '../assets/Tech/tech3.png';
import tech4 from '../assets/Tech/tech4.png';
import tech5 from '../assets/Tech/tech5.png';
import tech6 from '../assets/Tech/tech6.png';
import tech7 from '../assets/Tech/tech7.png';
import tech8 from '../assets/Tech/tech8.png';
import tech9 from '../assets/Tech/tech9.png';
import tech10 from '../assets/Tech/tech10.png';
import tech11 from '../assets/Tech/tech11.png';
import tech12 from '../assets/Tech/tech12.png';


export const WebDevelopment = () => {
    const { APP_NAME, setTitle, Title } = useContext(AppContext);

    setTitle(`${APP_NAME}Web Development`);



    return (
        <motion.div initial={{ transition: { duration: 1 }, opacity: 0 }} animate={{ transition: { duration: 1 }, opacity: 1 }} exit={{ transition: { duration: 1 }, opacity: 0 }}>
            <div className="web-development sec image-banner">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="h-100 col-sm-6 d-flex flex-column align-items-start justify-content-center">
                            <h1 className='text-white text-start'>An Energy That Builds  Memorable Brands</h1>
                            <Link to={'/contact'} className="btn btn-dark">
                                GET A QUOTE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec py-md-5 py-3">
                <div class="container">
                    <div class="row align-items-center text-start">
                        <div class="col-xl-6 col-lg-7 col-md-8">

                            <div class="about-img about-img1  ">
                                <img src={webImg} alt="" />
                            </div>
                        </div>
                        <div class=" col-xxl-6 col-xl-6 col-lg-6 col-md-6 ">
                            <div class="about-caption about-caption1">

                                <div class="section-tittle mb-30">
                                    <h2 className='text-start ps-0 '> WEB DEVELOPMENT<br /></h2>
                                </div>

                                <div class="single-about">

                                    <p>Having worked with startups for 10+ years and launched over 300 successful products, we offer all the necessary expertise to bring your bold idea to market. Our expert team for web development makes sure to give you the expected project that you require and also maintain the quality of your project or product.
                                        <br />
                                        <br />
                                        We give the best solutions to your any problem that you face. We make sure to provide the tech stack required according to the requirement of your product or project.</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="services sec py-md-5 py-3 text-start">
                <div class="container">
                    <div class="sec-title mb-md-5 my-2">
                        <div class="row">
                            <div class="head  col-lg-12 col-md-12 col-sm-12">
                                <h1 className=' heading pb-2'>Our Key Values</h1>
                            </div>
                            <div class=" col-lg-8 col-md-8 col-sm-12">
                                <p class="para">Core values are critical if you want to create a long-lasting, successful,
                                    and motivating place to work.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="services text-start">
                        <div class="row">
                            <div class="servicez col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div class="inner-box wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div class="bottom-curve"></div>
                                    <div class="icon-box"><span class="flaticon-vector"></span></div>
                                    <h5><a href="#">Sincerity</a></h5>
                                    <div class="text mt-0 pt-3">
                                        Quality deliverance of work and sincerity to clients and organization</div>
                                    <div class="link-box"><a href="#"><span class="fa fa-angle-right"></span></a></div>
                                </div>
                            </div>


                            <div class="servicez col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div class="inner-box wow fadeInUp animated" >
                                    <div class="bottom-curve"></div>
                                    <div class="icon-box"><span class="flaticon-digital"></span></div>
                                    <h5><a href="#">Dedication</a></h5>
                                    <div class="text mt-0 pt-3">Ethical Values towards both the team members and clients, no matter what

                                    </div>
                                    <div class="link-box"><a href="#"><span class="fa fa-angle-right"></span></a></div>
                                </div>
                            </div>


                            <div class="servicez col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div class="inner-box wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms" >
                                    <div class="bottom-curve"></div>
                                    <div class="icon-box"><span class="flaticon-instant-camera"></span></div>
                                    <h5><a href="#">Results</a></h5>
                                    <div class="text mt-0 pt-3">Timely deliverance of work according to the clients need.</div>
                                    <div class="link-box"><a href="#"><span class="fa fa-angle-right"></span></a></div>
                                </div>
                            </div>


                            {/* <div class="servicez col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div class="inner-box wow fadeInUp animated" data-wow-delay="900ms">
                                    <div class="bottom-curve"></div>
                                    <div class="icon-box"><span class="flaticon-monitor"></span></div>
                                    <h5><a href="#">Development</a></h5>
                                    <div class="text mt-0 pt-3">Lorem ipsum is are many variations of pass of majority.</div>
                                    <div class="link-box"><a href="#"><span class="fa fa-angle-right"></span></a></div>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </section>
            {/* <section class="design_section layout_padding-top">
                <div class="container">
                    <div class="">
                        <h2 className='heading'>
                            UI/UX Design
                        </h2>
                    </div>
                    <div class="design_container layout_padding2">
                        <div class="box b-1">
                            <h5>
                                User <br />
                                Experience
                            </h5>
                        </div>
                        <div class="box b-2">
                            <h5>
                                Interface <br />
                                Design
                            </h5>
                        </div>
                        <div class="box b-3">
                            <h5>
                                Mobile Apps
                            </h5>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <hr class="section_hr" />
            </div> */}
            {/* <div class="section sec py-md-5 py-3 mobile-padding-top_0">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="full text-align_left process_blog process_step">
                                <h4>
                                    1
                                    <span class="sml">st</span>
                                </h4>
                                <h3>Greate <span>Idea</span></h3>
                                <p>At vero eos et accusamus et iusto odio<br />dignissimos ducimus qui blanditiis praesentium<br />voluptatum deleniti atque....</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="full text-align_center process_blog process_step_img">
                                <img src={first} alt="#" />
                            </div>
                        </div>
                    </div>
                    <div class="row margin_top_30 rowRev">
                        <div class="col-md-6">
                            <div class="full text-align_center process_blog process_step_img">
                                <img src={second} alt="#" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="full text-align_left process_blog process_step">
                                <h4>
                                    2
                                    <span class="sml">nd</span>
                                </h4>
                                <h3>Design &amp; <span>Devloped</span></h3>
                                <p>At vero eos et accusamus et iusto odio<br />dignissimos ducimus qui blanditiis praesentium<br />voluptatum deleniti atque....</p>
                            </div>
                        </div>
                    </div>
                    <div class="row margin_top_30">
                        <div class="col-md-6">
                            <div class="full text-align_left process_blog process_step">
                                <h4>
                                    3
                                    <span class="sml">rt</span>
                                </h4>
                                <h3>Testing <span>Product</span></h3>
                                <p>At vero eos et accusamus et iusto odio<br />dignissimos ducimus qui blanditiis praesentium<br />voluptatum deleniti atque....</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="full text-align_center process_blog process_step_img">
                                <img src={third} alt="#" />
                            </div>
                        </div>
                    </div>
                    <div class="row margin_top_30 rowRev">
                        <div class="col-md-6">
                            <div class="full text-align_center process_blog process_step_img">
                                <img src={fourth} alt="#" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="full text-align_left process_blog process_step">
                                <h4>
                                    4
                                    <span class="sml">th</span>
                                </h4>
                                <h3>Deliver <span>Project</span></h3>
                                <p>At vero eos et accusamus et iusto odio<br />dignissimos ducimus qui blanditiis praesentium<br />voluptatum deleniti atque....</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="sec py-5 text-start">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h1 className="heading">
                                Stacks Used in Service
                            </h1>
                            <p className="para-sm text-muted my-3">
                                For our web development, we use these technological stacks
                                having a skilled team to give you a quality product
                            </p>
                        </div>
                        <div className="col-12">
                            <div className="textCards row w-100 mx-auto">
                                <div className="col-lg-2 col-md-4 col-sm-6 col-4 crdd">
                                    <img src={tech1} alt="tech" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 col-4 crdd">
                                    <img src={tech2} alt="tech" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 col-4 crdd">
                                    <img src={tech3} alt="tech" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 col-4 crdd">
                                    <img src={tech4} alt="tech" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 col-4 crdd">
                                    <img src={tech5} alt="tech" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 col-4 crdd">
                                    <img src={tech6} alt="tech" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 col-4 crdd">
                                    <img src={tech7} alt="tech" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 col-4 crdd">
                                    <img src={tech8} alt="tech" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 col-4 crdd">
                                    <img src={tech9} alt="tech" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 col-4 crdd">
                                    <img src={tech10} alt="tech" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 col-4 crdd">
                                    <img src={tech11} alt="tech" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 col-4 crdd">
                                    <img src={tech12} alt="tech" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sec py-5 text-start">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="heading">
                                Our Recent Works
                            </h1>
                            <p className="para-sm text-muted my-3">
                                We create client-focused websites that generate desired results. Transform your digital presence with the help of our professional web developers.
                            </p>
                        </div>

                        <div className="col-12">
                            <div className="basic-cards">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-6 my-2">
                                        <div className="crd-image">
                                            <img src={portfolio2} alt="card" className='w-100' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 my-2">
                                        <div className="crd-image">
                                            <img src={portfolio3} alt="card" className='w-100' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 my-2">
                                        <div className="crd-image">
                                            <img src={portfolio4} alt="card" className='w-100' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 my-2">
                                        <div className="crd-image">
                                            <img src={portfolio5} alt="card" className='w-100' />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <div className="col-12 text-center my-5">
                            <button className="btn btn-main">See More</button>
                        </div> */}
                    </div>
                </div>
            </div>
            <ContactForm action={'/'} />
        </motion.div>
    )
}
