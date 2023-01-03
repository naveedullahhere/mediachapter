
// import email from "./assets/mail.png";
// import phone from "./assets/phone.png";
import React, { useState, useContext } from 'react';
import email from "./assets/email0.png";
import { motion } from 'framer-motion';
import phone from "./assets/phone0.png";
import { useForm } from 'react-hook-form';
import address from "./assets/location0.png";
import { AppContext } from '../context/AppContext';
import toast from "react-hot-toast";

export const ContactForm = ({ action }) => {
    const { URL } = useContext(AppContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        data = JSON.stringify(data);

        const fetchData = async () => {
            await fetch(`${URL}api/contact-post`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: data
            })
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        reset();
                        return json.message;
                    }

                }).catch(err => {
                    console.log(err);
                    toast.error("Something went wrong!");
                    return null
                })
        };
        toast.promise(
            fetchData(),
            {
                duration: 4000,
                loading: 'loading...',
                success: "Your Query Has Been Submitted Successfully Our Team Will Be Contact To You ASAP",
                error: "Something went wrong!",
            }
        );

    };

    return (
        <>
            <motion.div initial={{ transition: { duration: 1 }, opacity: 0 }} animate={{ transition: { duration: 1 }, opacity: 1 }} exit={{ transition: { duration: 1 }, opacity: 0 }}>
                <div className="sec py5 mainContact">
                    <div className="container-fluid my-md-5 text-start px-0">
                        <span className="big-circle"></span>
                        <img src="img/shape.png" className="square" alt="" />
                        <div className="form row mx-auto">
                            <div className="contact-info col-12 my-auto">
                                <h3 className="heading text-main">Let's Chat</h3>
                                <p className="text">
                                    We are eager to be a partner in your digital journey as a digital marketing specialist
                                </p>

                                <div className="info">
                                    <div className="information mb-4">
                                        <img src={address} className="icon" alt="" />
                                        <p className='mb-0'>Timber Creek CT Clark Ville, Maryland, US</p>
                                    </div>
                                    <div className="information mb-4">
                                        <img src={email} className="icon" alt="" />
                                        <p className='mb-0'>info@mediachapter.com</p>
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
                                            <input type="hidden" {...register('domain')} name="domain" value={window.location.href} />
                                            <input type="hidden" {...register('user_id')} name="user_id" value={null} />
                                            <input type="hidden" {...register('page_name')} name="page_name" value={document.title.slice("-")[1]} />
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
                                                <input type="text" name="website_link" class={`input ${errors.website_link && "form-control is-invalid"}`} placeholder='.' {...register('website_link', { required: false })} />
                                                <label htmlFor="">Website</label>
                                            </div>

                                        </div>
                                        <div className="col-12">

                                            <div className="input-container">
                                                <select name="inquiry_about" class={`input ${errors.inquiry_about && "form-control is-invalid"}`}  {...register('inquiry_about', { required: true })}>
                                                    <option hidden value=''>Select About</option>
                                                    <option value="Software Development">Software Development</option>
                                                    <option value="Digital Marketing">Digital Marketing</option>
                                                    <option value="Web Development">Web Development</option>
                                                    <option value="Inquiring About">Inquiring About</option>
                                                    <option value="Content Writing">Content Writing</option>
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
                                            <input type="submit" value="Send" className="btn btn-light bg-white text-dark" />
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


            </motion.div>
        </>
    )
}
