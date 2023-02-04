import React, { useState, useContext, useEffect } from 'react';
import email from "./assets/email0.png";
import phone from "./assets/phone0.png";
import address from "./assets/location0.png";
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from "react-hot-toast";
import { AppContext } from '../context/AppContext';
import { useSearchParams } from 'react-router-dom';
import { Spinner } from './Spinner';
import { Testimonials } from './Testimonials';

export const Contact = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [img, setImg] = useState("");
    const [err, setErr] = useState(false);
    const [imgLoading, setIsLoadingImg] = useState(false);

    const { APP_NAME, setTitle, URL, PAGESPEED_API } = useContext(AppContext);
    setTitle(`${APP_NAME}Contact`);

    const query = new URLSearchParams(window.location.search);
    const site = query.get('website')

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setIsLoading(true)

        data = JSON.stringify(data);
        fetch(`${URL}api/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: data
        })
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    toast.success(json.message);
                    reset();
                }
                else {
                    toast.error(json.message);
                }
                setIsLoading(false);

            }).catch(err => {
                toast.error("Something Went Wrong!");
                setIsLoading(false);
            })
    };


    // useEffect(() => {


    //     if (site) {
    //         postData(`https://image.thum.io/get/auth/66698-eliteblue/${site}`)
    //             .then(data => {
    //                 setImg(data.lighthouseResult.audits["final-screenshot"].details.data);
    //             }).catch((err) => {
    //                 toast.error("Something went wrong!");
    //                 setErr(true);
    //             });
    //     }

    // }, []);

    // async function postData(url, data) {
    //     const response = await fetch(url);
    //     return response.json();
    // }

    return (

        <>

            <motion.div initial={{ transition: { duration: 1 }, opacity: 0 }} animate={{ transition: { duration: 1 }, opacity: 1 }} exit={{ transition: { duration: 1 }, opacity: 0 }}>
                <div className="sec py-5">
                    <div className="container my-md-5 text-start">
                        <span className="big-circle"></span>
                        <img src="img/shape.png" className="square" alt="" />
                        <div className="form row mx-auto">
                            <div className="contact-info col-12 my-auto">
                                <h3 className="heading text-main">CONTACT US</h3>
                                <p className="text">
                                    We are eager to be a partner in your digital journey as a digital marketing specialist
                                </p>


                                {/* <div className="info">
                                    <div className="information mb-4">
                                        <p className='mb-0'><span><b>USA:</b></span><br /> </p>
                                    </div>
                                    <div className="information mb-4">
                                        <img src={address} className="icon" alt="" />
                                        <p className='mb-0'>Timber Creek CT Clark Ville, Maryland, US</p>
                                    </div>
                                    <div className="information mb-4">
                                        <img src={email} className="icon" alt="" />
                                        <p className='mb-0'>info@mediachapter.us</p>
                                    </div>
                                    <div className="information mb-4">
                                        <img src={phone} className="icon" alt="" />
                                        <p className='mb-0'>+92 333 051 8880</p>
                                    </div>
                                </div> */}
                                <div className="info">
                                    {/* <div className="information mb-4">
                                        <p className='mb-0'><span><b>Pakistan:</b></span><br /></p>
                                    </div> */}
                                    <div className="information mb-4">
                                        <img src={address} className="icon" alt="" />
                                        <p className='mb-0'> Address Omega Heights, 103, E11/3, Islamabad, Pakistan</p>
                                    </div>
                                    <div className="information mb-4">
                                        <img src={email} className="icon" alt="" />
                                        <p className='mb-0'>info@marketingchapter.com.pk</p>
                                    </div>
                                    <div className="information mb-4">
                                        <img src={phone} className="icon" alt="" />
                                        <p className='mb-0'>+92 333 051 8880</p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-form">
                                <span className="circle one"></span>
                                <span className="circle two"></span>

                                <form onSubmit={handleSubmit(onSubmit)} autocomplete="off">
                                    <div className="row">
                                        <div className="col-12">
                                            <h3 className="title">Contact us</h3>
                                        </div>
                                        <div className="col-12">
                                            <input type="hidden" {...register('domain')} name="domain" value={window.location.host} />
                                            <input type="hidden" {...register('user_id')} name="user_id" value={null} />
                                            <input type="hidden" {...register('page_name')} name="page_name" value={document.title.split("- ")[1]} />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-container">
                                                <input {...register('firstname', { required: true })} type="text" name="firstname" class={`input ${errors.firstname && "form-control is-invalid"}`} placeholder='.' />
                                                <label htmlFor="">First Name*</label>
                                            </div>

                                        </div>
                                        <div className="col-md-6">

                                            <div className="input-container">
                                                <input type="text" name="lastname" class={`input ${errors.lastname && "form-control is-invalid"}`} placeholder='.' {...register('lastname', { required: true })} />
                                                <label htmlFor="">Last Name*</label>
                                            </div>

                                        </div>
                                        <div className="col-md-6">

                                            <div className="input-container mb-2">
                                                <input type="email" name="email" class={`input ${errors.email && "form-control is-invalid"}`} placeholder='.' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                                                <label htmlFor="">Email*</label>
                                            </div>
                                            {errors.email && <span className='para-sm text-white'>Please Enter a Valid Email</span>}


                                        </div>
                                        <div className="col-md-6">

                                            <div className="input-container">
                                                <input type="tel" name="phone" class={`input ${errors.phone && "form-control is-invalid"}`} placeholder='.' {...register('phone', { required: true })} />
                                                <label htmlFor="">Phone*</label>
                                            </div>

                                        </div>
                                        <div className="col-12">

                                            <div className="input-container">
                                                <input type="text" name="company_name" class={`input ${errors.company_name && "form-control is-invalid"}`} placeholder='.' {...register('company_name', { required: true })} />
                                                <label htmlFor="">Company Name*</label>
                                            </div>

                                        </div>

                                        <div className="col-12">

                                            <div className="input-container">
                                                <input type="text" name="website_link" value={site ? site : ""} class={`input ${errors.website_link && "form-control is-invalid"}`} placeholder='.' {...register('website_link', { required: false })} />
                                                <label htmlFor="">Website</label>
                                            </div>

                                        </div>

                                        <div className="col-12">
                                            <div className="input-container">
                                                <select name="inquiry_about" class={`input ${errors.inquiry_about && "form-control is-invalid"}`}  {...register('inquiry_about', { required: true })}>
                                                    <option hidden value=''>Select About</option>
                                                    <option value="Inquiring About">Inquiring About</option>
                                                    <option value="Software Development">Software Development</option>
                                                    <option value="Web Development">Web Development</option>
                                                    <option value="Digital Marketing">Digital Marketing</option>

                                                    <option value="Graphic Design">Graphic Design</option>
                                                    <option value="Branding">Branding</option>
                                                    <option value="SEO">SEO</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12">

                                            <div className="input-container textarea">
                                                <textarea name="project_summary" class={`input ${errors.project_summary && "form-control is-invalid"}`} placeholder='.' {...register('project_summary', { required: true })}></textarea>
                                                <label htmlFor="">Project Summary*
                                                </label>
                                            </div>

                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-light bg-white w-100 text-dark" type="submit">
                                                Submit
                                                {isLoading &&
                                                    <div className="spinner-border me-5" style={{ "float": "right" }} role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </div>
                                                }
                                            </button>
                                        </div>
                                        {/* <div className="col-12 mt-4">
                                            <p className="h5 text-white">{message}</p>
                                        </div> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                {site &&
                    <>
                        <div className="sec py-md-5 py-3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 my-md-auto my-3 text-start">
                                        <h1 className="headings">Maximize Your Earnings with Ease!
                                        </h1>
                                        <p className="para-sm text-muted my-4">
                                            Just fill out the form and let our experts take care of the rest. Here's what's next.
                                        </p>
                                        <p className="para-sm d-flex gap-2 align-items-start my-2">
                                            <i className="fa-regular fa-circle-dot text-danger mt-1"></i>
                                            <div>
                                                <span className="fw-bold">
                                                    Understand Your Business:
                                                </span>

                                                <p className='mb-0'>
                                                    From the start, we will dive into understanding your business, competitors, and industry through research and a website audit.
                                                </p>

                                            </div>
                                        </p>
                                        <p className="para-sm d-flex gap-2 align-items-start my-2">
                                            <i className="fa-regular fa-circle-dot text-danger mt-1"></i>
                                            <div>
                                                <span className="fw-bold">
                                                    Craft a Customized Plan:


                                                </span>

                                                <p className='mb-0'>
                                                    Using the insights gathered, your strategist will develop tailored recommendations to increase your online revenue.
                                                </p>

                                            </div>
                                        </p>
                                        <p className="para-sm d-flex gap-2 align-items-start my-2">
                                            <i className="fa-regular fa-circle-dot text-danger mt-1"></i>
                                            <div>

                                                <span className="fw-bold">
                                                    Get Set for Growth:
                                                </span>

                                                <p className='mb-0'>
                                                    Your plan will include all the details, such as pricing, timeline, partnership benefits with Media Chapter, and how we will support your business growth.
                                                </p>

                                            </div>
                                        </p>
                                    </div>
                                    <div className="col-md-6 my-auto">

                                        <img src={`https://image.thum.io/get/auth/66698-eliteblue/https://${site}`} draggable="false" width={"100%"} className={'rounded-3 shadow-sm websiteUrl'} alt="Website" />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sec py-md-5 py-3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 mb-4">
                                        <h1 className="headings fw-bold ">
                                            Unlock the benefits of a do-it-for-me agency
                                        </h1>
                                    </div>
                                    <div className="col-md-6 text-start my-3">
                                        <img loading="lazy" src="/wp-content/themes/fx/assets/img/special-pages/fx-free-quote/version-c/icon1.png" alt="" />
                                        <span class="title light-blue bg-dark">360 tracking &amp; reporting</span>
                                        <ul className="ps-0 mt-3">
                                            <li><i class="fa-solid fa-check me-1"></i> 1+ billion data points for optimizing ROI</li>
                                            <li><i class="fa-solid fa-check me-1"></i> Call, lead, and revenue tracking</li>
                                            <li><i class="fa-solid fa-check me-1"></i> AI-powered growth opportunity simulator</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 text-start my-3">
                                        <img loading="lazy" src="/wp-content/themes/fx/assets/img/special-pages/fx-free-quote/version-c/icon2.png" alt="" />
                                        <span class="title green">25+ years of excellence</span>
                                        <ul className="ps-0 mt-3">
                                            <li><i class="fa-solid fa-check me-1"></i> 93% client satisfaction score</li>
                                            <li><i class="fa-solid fa-check me-1"></i> 91% client retention rate</li>
                                            <li><i class="fa-solid fa-check me-1"></i> 500+ five-star reviews</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 text-start my-3">
                                        <img loading="lazy" src="/wp-content/themes/fx/assets/img/special-pages/fx-free-quote/version-c/icon3.png" alt="" />
                                        <span class="title orange">$3 billion in client results</span>
                                        <ul className="ps-0 mt-3">
                                            <li><i class="fa-solid fa-check me-1"></i> 23% average increase in website traffic</li>
                                            <li><i class="fa-solid fa-check me-1"></i> 20% average increase in ad spend ROI</li>
                                            <li><i class="fa-solid fa-check me-1"></i> 7.8 million leads generated for clients</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 text-start my-3">
                                        <img loading="lazy" src="/wp-content/themes/fx/assets/img/special-pages/fx-free-quote/version-c/icon4.png" alt="" />
                                        <span class="title blue">500+ Experts at Your Service</span>
                                        <ul className="ps-0 mt-3">
                                            <li><i class="fa-solid fa-check me-1"></i> 7-time Best Place to Work in PA winner</li>
                                            <li><i class="fa-solid fa-check me-1"></i> 2+ million hours of expertise</li>
                                            <li><i class="fa-solid fa-check me-1"></i> Specialized industry and strategy experts</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sec py-md-5 py-3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 mb-4">
                                        <h1 className="headings fw-bold ">
                                            Featured Case Study:
                                        </h1>
                                        <p className="headings fw-normal fs-5">
                                            With the data-driven insights of MarketingCloudFX, plus the knowledge of our award-winning team, Maryland Sunrooms exceeded its annual revenue goals by 120%.
                                        </p>
                                    </div>
                                    <div className="col-md-7 my-auto">
                                        <div className="row w-100 mx-auto my-3">
                                            <div className="col-md-4 col-12 text-md-start text-center my-md-auto my-3">
                                                <h1 className="display-4 text-main fw-bold">670%
                                                </h1>
                                                <p className="fs-6 text-muted">
                                                    INCREASE IN PAID
                                                    AD CONVERSIONS
                                                </p>
                                            </div>
                                            <div className="col-md-4 col-12 text-md-start text-center my-md-auto my-3">
                                                <h1 className="display-4 text-main fw-bold">327%
                                                </h1>
                                                <p className="fs-6 text-muted">
                                                    INCREASE IN
                                                    WEBSITE SESSIONS
                                                </p>
                                            </div>
                                            <div className="col-md-4 col-12 text-md-start text-center my-md-auto my-3">
                                                <h1 className="display-4 text-main fw-bold">321%
                                                </h1>
                                                <p className="fs-6 text-muted">
                                                    DECREASE IN COST-
                                                    PER-LEAD (CPL)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5 my-3">
                                        <img src="https://www.webfx.com/wp-content/themes/fx/assets/img/special-pages/fx-free-quote/version-c/featured-img.png" alt="img" className="w-100" />
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="sec py-md-5 py-3">

                            <div className="container">
                                <div className="row">
                                    <div className="col-12 mb-4">
                                        <h1 className="headings fw-bold ">
                                            Over +1,020 testimonials
                                        </h1>
                                        <p className="headings fw-normal fs-5">
                                            Hear From Our Clients

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Testimonials isBg="bg-white" />
                        </div>
                    </>
                }


            </motion.div>

            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="test" {...register('example')} />
                <input {...register('exampleRequired', { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" />
            </form> */}
        </>

    )
}
