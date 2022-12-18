import React from 'react';
import email from "./assets/mail.png";
import phone from "./assets/phone.png";
import ContactImg from "./assets/contact.png";

export const Contact = () => {
    return (
        <>
            <div className="sec py-5">
                <div className="container">
                    <div className={`row`}>
                        <div className="col-md-6 my-md-auto my-3 text-start">
                            <h1 className='heading'>Let’s Chat
                            </h1>
                            <p className="para-sm text-muted">
                                Fill up the form and connect with us now.
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
            </div>
        </>
    )
}
