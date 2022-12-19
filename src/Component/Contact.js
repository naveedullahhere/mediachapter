import React from 'react';
import email from "./assets/email0.png";
import phone from "./assets/phone0.png";
import address from "./assets/location0.png";
import ContactImg from "./assets/contact.png";

export const Contact = () => {
    return (
        <>
            <div className="sec py-5">

                <div class="container my-5 text-start">
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
                                    <img src={address} class="icon" alt="" />
                                    <p className='mb-0'>Address Omega Heights, 103, E11/3, Islamabad, Pakistan</p>
                                </div>
                                <div class="information mb-4">
                                    <img src={address} class="icon" alt="" />
                                    <p className='mb-0'>Address Omega Heights, 103, E11/3, Islamabad, Pakistan</p>
                                </div>
                                <div class="information mb-4">
                                    <img src={email} class="icon" alt="" />
                                    <p className='mb-0'>info@eliteblue.net</p>
                                </div>
                                <div class="information mb-4">
                                    <img src={phone} class="icon" alt="" />
                                    <p className='mb-0'>+92 333 051 8880</p>
                                </div>
                            </div>

                            {/* <div class="social-media">
                                <p>Connect with us :</p>
                                <div class="social-icons">
                                    <a href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div> */}
                        </div>

                        <div class="contact-form">
                            <span class="circle one"></span>
                            <span class="circle two"></span>

                            <form action="index.html" autocomplete="off">
                                <div className="row">
                                    <div className="col-12">
                                        <h3 class="title">Contact us</h3>

                                    </div>
                                    <div className="col-md-6">

                                        <div class="input-container">
                                            <input type="text" name="firstname" class="input" placeholder='.' />
                                            <label for="">First Name*</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">

                                        <div class="input-container">
                                            <input type="text" name="lastname" class="input" placeholder='.' />
                                            <label for="">Last Name*</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">

                                        <div class="input-container">
                                            <input type="email" name="email" class="input" placeholder='.' />
                                            <label for="">Email*</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">

                                        <div class="input-container">
                                            <input type="tel" name="phone" class="input" placeholder='.' />
                                            <label for="">Phone*</label>
                                        </div>
                                    </div>
                                    <div className="col-12">

                                        <div class="input-container">
                                            <input type="text" name="lastname" class="input" placeholder='.' />
                                            <label for="">Company Name*</label>
                                        </div>
                                    </div>
                                    <div className="col-12">

                                        <div class="input-container">
                                            <select name="inquiry" class="input">
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
                                            <textarea name="projectsummary" class="input" placeholder='.'></textarea>
                                            <label for="">Project Summary*
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <input type="submit" value="Send" class="btn btn-light bg-white text-dark" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

            {/* <div className="sec py-5 bg-white">
                <div className="container">
                    <div className={`row`}>
                        <div className="col-md-6 my-md-auto my-3 text-start">
                            <h1 className='heading'>Get in touch

                            </h1>
                            <p className="para-sm text-muted">
                                MediaChapter is always up to talk about brands. Here is the way to grab our attention.


                            </p>
                            <form action={'/'}>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" name='name' id="name" placeholder="Name" />
                                    <label for="name">Name</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" name='email' id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="number" class="form-control" name='phone' id="contact" placeholder="Phone" />
                                    <label for="contact">Phone</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea class="form-control" name='message' placeholder="Leave a comment here" id="floatingTextarea2" style={{ "height": "100px" }}></textarea>
                                    <label for="floatingTextarea2">Message</label>
                                </div>
                                <button type='submit' className="btn btn-main">
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className="col-md-6 my-md-auto my-3"><img src={ContactImg} alt="contact" className="w-100 p-md-5 p-0" /></div>
                    </div>
                </div>
            </div>
            <div className="sec py-5 contact-foot">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="row">
                                <div className="col-md-6 my-4">
                                    <div className="contct d-flex align-items-center gap-3">
                                        <img src={email} alt="email" className='contact-img' />
                                        <a href="mailto:info@mediachapter.us" className="main">info@mediachapter.us</a>
                                    </div>
                                </div>
                                <div className="col-md-6 my-4">
                                    <div className="contct d-flex align-items-center gap-3">
                                        <img src={phone} alt="email" className='contact-img' />
                                        <a href="tel:+12017938468" className="main">+1 201 793 8468</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
