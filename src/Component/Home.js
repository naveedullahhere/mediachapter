import React, { useContext } from 'react';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import slide from './assets/home-slider.png';
import slide0 from './assets/home-slider0.png';
import Sliderz from "react-slick";
import slide1 from './assets/home-slider1.png';
import card0 from './assets/card0.png';
import { Link } from 'react-router-dom';
import card1 from './assets/card1.png';
import card2 from './assets/card2.png';
import card3 from './assets/card3.png';
import card4 from './assets/card4.png';
import { motion } from 'framer-motion';
import { Testimonials } from './Testimonials';
import { AppContext } from '../context/AppContext';


export const Home = () => {
    const { AppName, setTitle } = useContext(AppContext);
    setTitle(`${AppName}Home`);


    const settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    };
    return (
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}>            <div className="sliderMain position-relative">
            <CarouselProvider className='slider container bannerSlider'
                naturalSlideWidth={100}
                naturalSlideHeight={50}
                totalSlides={3}
                isPlaying={true}
                interval={5000}
            >
                <Slider>
                    <Slide index={0} className="mainSlide">
                        <div className="row w-100 h-100">
                            <div className="col-6 my-auto">
                                <h5>
                                    A world full of wonder
                                </h5>
                                <h1 className='my-4'>We Write The Best Chapter for Your Brand</h1>
                                <Link to={'/contact'} className="btn btn-dark">
                                    GET A QUOTE
                                </Link>
                            </div>
                            <div className="col-6 sliderImage my-auto"><img src={slide} alt="slide" className='w-100' /></div>
                        </div>

                    </Slide>
                    <Slide index={1} className="mainSlide">
                        <div className="row w-100 h-100">
                            <div className="col-6 my-auto">
                                <h5>
                                    A world full of wonder
                                </h5>
                                <h1 className='my-4'>We Write The Best Chapter for Your Brand</h1>
                                <button className="btn btn-dark">
                                    GET A QUOTE
                                </button>
                            </div>
                            <div className="col-6 sliderImage my-auto"><img src={slide0} alt="slide" className='w-100' /></div>
                        </div></Slide>
                    <Slide index={2} className="mainSlide">
                        <div className="row w-100 h-100">
                            <div className="col-6 my-auto">
                                <h5>
                                    A world full of wonder
                                </h5>
                                <h1 className='my-4'>We Write The Best Chapter for Your Brand</h1>
                                <button className="btn btn-dark">
                                    GET A QUOTE
                                </button>
                            </div>
                            <div className="col-6 sliderImage my-auto"><img src={slide1} alt="slide" className='w-100' /></div>
                        </div></Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        </div>
            <div className="sec py-5">
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <h1 className="heading">Our Services
                            </h1>
                            <p className="my-3 text-muted para-sm">
                                From branding strategies and graphic design to web development and SEO, our masterful team cover everything with perfection to help you transform your visionary company into a reality.
                            </p>
                        </div>
                        <div className="col-md-4 col-12 my-3">
                            <div className="crd rounded-4 h-100 shadow p-4 bg-light">
                                <div className="cardImg">
                                    <img src={card0} draggable={false} className={'w-card'} alt="card" />
                                </div>
                                <div className="content">
                                    <a href="https://mediachapter.us/graphic-design/" className='fs-3 text-dark my-3 d-inline-block'>
                                        Graphic Design					</a>
                                    <p className="para-sm text-muted">Whether you’re looking for an out-of-the-box logo design or game-changing stationery for your business, the top-rated designers at MediaChapter can do it for you.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 my-3">
                            <div className="crd rounded-4 h-100 shadow p-4 bg-light">
                                <div className="cardImg">
                                    <img src={card1} draggable={false} className={'w-card'} alt="card" />
                                </div>
                                <div className="content">
                                    <a href="https://mediachapter.us/web-development/" className='fs-3 text-dark my-3 d-inline-block'>
                                        Web Development					</a>
                                    <p className="para-sm text-muted">Want a website where people come, stay, and take desired actions? You are at the right place. Get in touch with us now to get a workable website for your business.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 my-3">
                            <div className="crd rounded-4 h-100 shadow p-4 bg-light">
                                <div className="cardImg">
                                    <img src={card2} draggable={false} className={'w-card'} alt="card" />
                                </div>
                                <div className="content">
                                    <a href="https://mediachapter.us/digital-marketing/" className='fs-3 text-dark my-3 d-inline-block'>
                                        Digital Marketing					</a>
                                    <p className="para-sm text-muted">Whether you’re a startup or a settled company, our profound digital experts will come up with innovative strategies to drive new clients to your website.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 my-3 ms-auto">
                            <div className="crd rounded-4 h-100 shadow p-4 bg-light">
                                <div className="cardImg">
                                    <img src={card3} draggable={false} className={'w-card'} alt="card" />
                                </div>
                                <div className="content">
                                    <a href="https://mediachapter.us/content-writing/" className='fs-3 text-dark my-3 d-inline-block'>
                                        Content Writing					</a>
                                    <p className="para-sm text-muted">No matter how good your logo or website is, you can’t increase engagement without creating high-quality, fresh, and unique content. At MediaChapter, we have creative writers who can do the job for you.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 my-3 me-auto">
                            <div className="crd rounded-4 h-100 shadow p-4 bg-light">
                                <div className="cardImg">
                                    <img src={card4} draggable={false} className={'w-card'} alt="card" />
                                </div>
                                <div className="content">
                                    <a href="https://mediachapter.us/seo" className='fs-3 text-dark my-3 d-inline-block'>
                                        SEO					</a>
                                    <p className="para-sm text-muted">Want a website where people come, stay, and take desired actions? You are at the right place. Get in touch with us now to get a workable website for your business.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="heading">Our Work</h1>
                            <p className="my-3 para-sm text-muted">Take a look at our top-notch work and get inspired.
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="overflow-hidden rounded-3 bg-light shadow-sm my-3 minimalHover">
                                <img draggable="false" src="https://www.mediachapter.us/wp-content/uploads/2021/12/Logo-17-500x500.png" alt="portfolio" className="w-100" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="overflow-hidden rounded-3 bg-light shadow-sm my-3 minimalHover">
                                <img draggable="false" src="https://www.mediachapter.us/wp-content/uploads/2021/12/Logo-43-500x500.png" alt="portfolio" className="w-100" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="overflow-hidden rounded-3 bg-light shadow-sm my-3 minimalHover">
                                <img draggable="false" src="https://www.mediachapter.us/wp-content/uploads/2021/12/Logo-40-500x500.png" alt="portfolio" className="w-100" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="overflow-hidden rounded-3 bg-light shadow-sm my-3 minimalHover">
                                <img draggable="false" src="https://www.mediachapter.us/wp-content/uploads/2021/12/Book-Cover-6.jpg" alt="portfolio" className="w-100" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="overflow-hidden rounded-3 bg-light shadow-sm my-3 minimalHover">
                                <img draggable="false" src="https://www.mediachapter.us/wp-content/uploads/2021/12/Book-Cover-2.jpg" alt="portfolio" className="w-100" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="overflow-hidden rounded-3 bg-light shadow-sm my-3 minimalHover">
                                <img draggable="false" src="https://www.mediachapter.us/wp-content/uploads/2021/12/Book-Cover-7.jpg" alt="portfolio" className="w-100" />
                            </div>
                        </div>
                        <div className="col-12 mx-auto my-4">
                            <button className="btn btn-main">see more</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="heading">How It Works</h1>
                            <p className="my-3 para-sm text-muted">All it takes is three easy steps to get started your branding process with MediaChapter.</p>
                        </div>
                        <div className="col-12 my-5">
                            <div className="row">
                                <div className="col-md-4 col-12 my-md-auto my-4">
                                    <div className="main text-center">
                                        <div className="bg-danger px-4 py-2 rounded-2 text-white d-inline">
                                            STEP 01
                                        </div>
                                        <h4 className="heading fs-4 mt-4">
                                            Fill The Form
                                        </h4>
                                        <p className="text-muted para-sm">
                                            First things first. Tell us about your business and needs via the form so that we connect you with the right people.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12 my-md-auto my-4">
                                    <div className="main text-center">
                                        <div className="bg-danger px-4 py-2 rounded-2 text-white d-inline">
                                            STEP 02
                                        </div>
                                        <h4 className="heading fs-4 mt-4">
                                            Connect With Experts

                                        </h4>
                                        <p className="text-muted para-sm">
                                            Once we get your form, we connect you with the required experts. You can keep in touch with them throughout the working process.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12 my-md-auto my-4">
                                    <div className="main text-center">
                                        <div className="bg-danger px-4 py-2 rounded-2 text-white d-inline">
                                            STEP 03
                                        </div>
                                        <h4 className="heading fs-4 mt-4">
                                            Get The Project

                                        </h4>
                                        <p className="text-muted para-sm">
                                            If it’s a logo design, website, or content writing, we will hand over your project before the deadline and if it’s digital marketing or SEO-related work, we will share daily, weekly, and monthly reports with you.

                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 mx-auto mt-md-5">
                            <button className="btn btn-main">GET A QUOTE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec py-5">
                <section class="customer-logos slider">
                    <Sliderz {...settings}>

                        <div class="slide"><img src="https://www.mediachapter.us/wp-content/uploads/2021/10/Logos-08.png" /></div>
                        <div class="slide"><img src="https://www.mediachapter.us/wp-content/uploads/2021/10/Logos-11.png" /></div>
                        <div class="slide"><img src="https://www.mediachapter.us/wp-content/uploads/2021/10/Logos-14.png" /></div>
                        <div class="slide"><img src="https://www.mediachapter.us/wp-content/uploads/2021/10/Logos-17.png" /></div>
                        <div class="slide"><img src="https://www.mediachapter.us/wp-content/uploads/2021/10/Logos-03.png" /></div>
                        <div class="slide"><img src="https://www.mediachapter.us/wp-content/uploads/2021/10/Logos-06.png" /></div>
                        <div class="slide"><img src="https://www.mediachapter.us/wp-content/uploads/2021/10/Logos-12.png" /></div>
                        <div class="slide"><img src="https://www.mediachapter.us/wp-content/uploads/2021/10/Logos-09.png" /></div>
                        <div class="slide"><img src="https://www.mediachapter.us/wp-content/uploads/2021/10/Logos-15.png" /></div>
                        <div class="slide"><img src="https://www.mediachapter.us/wp-content/uploads/2021/10/Logos-18.png" /></div>
                    </Sliderz>
                </section>
            </div>
            <Testimonials />
            <div className="sec py-5">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <img src="https://www.mediachapter.us/wp-content/uploads/2022/02/trust-pilot-img.png" alt="trustpiolet" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
