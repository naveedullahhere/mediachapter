import React, { useState, useContext } from 'react';
import email from "./assets/email0.png";
import { motion } from 'framer-motion';
import phone from "./assets/phone0.png";
import { useForm } from 'react-hook-form';
import toast from "react-hot-toast";
import address from "./assets/location0.png";
import { AppContext } from '../context/AppContext';

export const Contact = () => {

    const [isLoading, setIsLoading] = useState(false);

    const { AppName, setTitle, URL } = useContext(AppContext);
    setTitle(`${AppName}Contact`);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setIsLoading(true)

        data = JSON.stringify(data);
        fetch(`${URL}api/contact-post`, {
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
    return (

        <>

<motion.div initial={{ transition: { duration: 1 }, opacity: 0 }} animate={{ transition: { duration: 1 }, opacity: 1 }} exit={{ transition: { duration: 1 }, opacity: 0 }}>
                <div className="sec py-5">
                    <div class="container my-md-5 text-start">
                        <span class="big-circle"></span>
                        <img src="img/shape.png" class="square" alt="" />
                        <div class="form row mx-auto">
                            <div className="contact-info col-12 my-auto">
                                <h3 class="heading text-main">CONTACT US</h3>
                                <p class="text">
                                    We are eager to be a partner in your digital journey as a digital marketing specialist
                                </p>


                                <div class="info">
                                    <div class="information mb-4">
                                        <p className='mb-0'><span><b>USA:</b></span><br /> </p>
                                    </div>
                                    <div class="information mb-4">
                                        <img src={address} class="icon" alt="" />
                                        <p className='mb-0'>Timber Creek CT Clark Ville, Maryland, US</p>
                                    </div>
                                    <div class="information mb-4">
                                        <img src={email} class="icon" alt="" />
                                        <p className='mb-0'>info@mediachapter.us</p>
                                    </div>
                                    <div class="information mb-4">
                                        <img src={phone} class="icon" alt="" />
                                        <p className='mb-0'>+92 333 051 8880</p>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="information mb-4">
                                        <p className='mb-0'><span><b>Pakistan:</b></span><br /></p>
                                    </div>
                                    <div className="information mb-4">
                                        <img src={address} className="icon" alt="" />
                                        <p className='mb-0'> Address Omega Heights, 103, E11/3, Islamabad, Pakistan</p>
                                    </div>
                                    <div className="information mb-4">
                                        <img src={email} className="icon" alt="" />
                                        <p className='mb-0'>info@mediachapter.us</p>
                                    </div>
                                    <div className="information mb-4">
                                        <img src={phone} className="icon" alt="" />
                                        <p className='mb-0'>+92 333 051 8880</p>
                                    </div>
                                </div>
                            </div>

                            <div class="contact-form">
                                <span class="circle one"></span>
                                <span class="circle two"></span>

                                <form onSubmit={handleSubmit(onSubmit)} autocomplete="off">
                                    <div className="row">
                                        <div className="col-12">
                                            <h3 class="title">Contact us</h3>
                                        </div>
                                        <div className="col-12">
                                            <input type="hidden" {...register('domain')} name="domain" value={window.location.host} />
                                            <input type="hidden" {...register('user_id')} name="user_id" value={null} />
                                            <input type="hidden" {...register('page_name')} name="page_name" value={document.title.split("- ")[1]} />
                                        </div>
                                        <div className="col-md-6">
                                            <div class="input-container">
                                                <input {...register('firstname', { required: true })} type="text" name="firstname" class={`input ${errors.firstname && "form-control is-invalid"}`} placeholder='.' />
                                                <label for="">First Name*</label>
                                            </div>

                                        </div>
                                        <div className="col-md-6">

                                            <div class="input-container">
                                                <input type="text" name="lastname" class={`input ${errors.lastname && "form-control is-invalid"}`} placeholder='.' {...register('lastname', { required: true })} />
                                                <label for="">Last Name*</label>
                                            </div>

                                        </div>
                                        <div className="col-md-6">

                                            <div class="input-container mb-2">
                                                <input type="email" name="email" class={`input ${errors.email && "form-control is-invalid"}`} placeholder='.' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                                                <label for="">Email*</label>
                                            </div>
                                            {errors.email && <span className='para-sm text-white'>Please Enter a Valid Email</span>}


                                        </div>
                                        <div className="col-md-6">

                                            <div class="input-container">
                                                <input type="tel" name="phone" class={`input ${errors.phone && "form-control is-invalid"}`} placeholder='.' {...register('phone', { required: true })} />
                                                <label for="">Phone*</label>
                                            </div>

                                        </div>
                                        <div className="col-12">

                                            <div class="input-container">
                                                <input type="text" name="company_name" class={`input ${errors.company_name && "form-control is-invalid"}`} placeholder='.' {...register('company_name', { required: true })} />
                                                <label for="">Company Name*</label>
                                            </div>

                                        </div>
                                        <div className="col-12">
                                            <div class="input-container">
                                                <select name="inquiry_about" class={`input ${errors.inquiry_about && "form-control is-invalid"}`}  {...register('inquiry_about', { required: true })}>
                                                    <option hidden value=''>Select About</option>
                                                    <option value="Inquiring About">Inquiring About</option>
                                                    <option value="Software Development">Software Development</option>
                                                    <option value="Web Development">Web Development</option>
                                                    <option value="Digital Marketing">Digital Marketing</option>
                                                    <option value="Graphic Design">Graphic Design</option>
                                                    <option value="Branding">Branding</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12">

                                            <div class="input-container textarea">
                                                <textarea name="project_summary" class={`input ${errors.project_summary && "form-control is-invalid"}`} placeholder='.' {...register('project_summary', { required: true })}></textarea>
                                                <label for="">Project Summary*
                                                </label>
                                            </div>

                                        </div>
                                        <div className="col-12">
                                            <button class="btn btn-light bg-white w-100 text-dark" type="submit">
                                                Submit
                                                {isLoading &&
                                                    <div class="spinner-border me-5" style={{ "float": "right" }} role="status">
                                                        <span class="visually-hidden">Loading...</span>
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
