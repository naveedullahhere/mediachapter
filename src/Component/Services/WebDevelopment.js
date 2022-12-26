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


export const WebDevelopment = () => {
    const { APP_NAME, setTitle, Title } = useContext(AppContext);

    setTitle(`${APP_NAME}Web Development`);

    console.log(Title);


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
                        <div class="offset-xl-1 col-xxl-4 col-xl-5 col-lg-5 col-md-9">
                            <div class="about-caption about-caption1">

                                <div class="section-tittle mb-30">
                                    <h2 className='text-start ps-0 '>All the features<br /> you’d expect.</h2>
                                </div>
                                <div class="single-about">
                                    <h5>Lorem ipsum dolor sit.</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem repudiandae quis excepturi.</p>
                                </div>
                                <div class="single-about">
                                    <h5>Lorem ipsum dolor sit.</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem repudiandae quis excepturi.</p>
                                </div>
                                <div class="single-about b-0">
                                    <h5>Lorem ipsum dolor sit.</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem repudiandae quis excepturi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section sec py-md-5 py-3 mobile-padding-top_0">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="full">
                                <div class="">
                                    <h2 className='heading'>Working <span>Process</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row margin_top_50">
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
            </div>
            <div className="sec py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="heading">
                                Web Development
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
                                            <img src="https://www.mediachapter.us/wp-content/uploads/2021/12/e24b41a541a4ce552aad_tta5Y.jpg" alt="card" className='w-100' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 my-2">
                                        <div className="crd-image">
                                            <img src="https://www.mediachapter.us/wp-content/uploads/2021/12/e2552f49714f244ea609_PaWJR-1.jpg" alt="card" className='w-100' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 my-2">
                                        <div className="crd-image">
                                            <img src="https://www.mediachapter.us/wp-content/uploads/2021/12/ezgif_2_604d8c365d.jpg" alt="card" className='w-100' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 my-2">
                                        <div className="crd-image">
                                            <img src="https://www.mediachapter.us/wp-content/uploads/2021/12/ezgif_2_ef94216e88.jpg" alt="card" className='w-100' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 my-2">
                                        <div className="crd-image">
                                            <img src="https://www.mediachapter.us/wp-content/uploads/2021/12/image_processing2.jpg" alt="card" className='w-100' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 my-2">
                                        <div className="crd-image">
                                            <img src="https://www.mediachapter.us/wp-content/uploads/2021/12/image_processing2021_0NiSN.jpg" alt="card" className='w-100' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 my-2">
                                        <div className="crd-image">
                                            <img src="https://www.mediachapter.us/wp-content/uploads/2021/12/image_processing2021_2VLlY.jpg" alt="card" className='w-100' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 my-2">
                                        <div className="crd-image">
                                            <img src="https://www.mediachapter.us/wp-content/uploads/2021/12/image_processing2021_192Ax.jpg" alt="card" className='w-100' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 my-2">
                                        <div className="crd-image">
                                            <img src="https://www.mediachapter.us/wp-content/uploads/2021/12/image_processing2021_DQ5Qy.jpg" alt="card" className='w-100' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 my-2">
                                        <div className="crd-image">
                                            <img src="https://www.mediachapter.us/wp-content/uploads/2021/12/image_processing2021_HtAta.jpg" alt="card" className='w-100' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 my-2">
                                        <div className="crd-image">
                                            <img src="https://www.mediachapter.us/wp-content/uploads/2021/12/image_processing2021_i26TY.jpg" alt="card" className='w-100' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 my-2">
                                        <div className="crd-image">
                                            <img src="https://www.mediachapter.us/wp-content/uploads/2021/12/image_processing2021_lU8gJ.jpg" alt="card" className='w-100' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 my-2">
                                        <div className="crd-image">
                                            <img src="https://www.mediachapter.us/wp-content/uploads/2021/12/image_processing2021_p5krr.jpg" alt="card" className='w-100' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 my-2">
                                        <div className="crd-image">
                                            <img src="https://www.mediachapter.us/wp-content/uploads/2021/12/image_processing2021_p5krr.jpg" alt="card" className='w-100' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 my-2">
                                        <div className="crd-image">
                                            <img src="https://www.mediachapter.us/wp-content/uploads/2021/12/image_processing2021_TnZDN.jpg" alt="card" className='w-100' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 my-2">
                                        <div className="crd-image">
                                            <img src="https://www.mediachapter.us/wp-content/uploads/2021/12/image_processing2022_BdVF2.jpg" alt="card" className='w-100' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 my-2">
                                        <div className="crd-image">
                                            <img src="https://www.mediachapter.us/wp-content/uploads/2021/12/image_processing2022_e7NJx.jpg" alt="card" className='w-100' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 my-2">
                                        <div className="crd-image">
                                            <img src="https://www.mediachapter.us/wp-content/uploads/2021/12/image_processing2022_gPRQZ.jpg" alt="card" className='w-100' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 my-2">
                                        <div className="crd-image">
                                            <img src="https://www.mediachapter.us/wp-content/uploads/2021/12/image_processing2022_NmyXc.jpg" alt="card" className='w-100' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6 my-2">
                                        <div className="crd-image">
                                            <img src="https://www.mediachapter.us/wp-content/uploads/2021/12/image_processing2022_pco4a.jpg" alt="card" className='w-100' />
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
