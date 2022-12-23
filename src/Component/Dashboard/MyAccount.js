
import React, { useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import toast from "react-hot-toast";
import { AppContext } from '../../context/AppContext';
import { Sidebar } from './Sidebar';
import { Link, useNavigate } from 'react-router-dom';


export const MyAccount = () => {
    const { isUserLogin, userEmail, URL, setUserName, userId, userAbout, userPhone, getCookie, userName, setCookieinLocal, setUserEmail, setUserAbout, setUserPhone } = useContext(AppContext);
    let navigate = useNavigate();
    const [isActiveEdit, setActiveEdit] = useState("false");
    const [isActiveEditPass, setisActiveEditPass] = useState("false");
    const [ppass, setPpass] = useState("*******");
    const [isLoading, setIsLoading] = useState(false);
    const [isProfileLoading, setIsProfileLoading] = useState(false);

    isUserLogin === false && navigate('/login');
    useEffect(() => {
        return () => {
            !isUserLogin && navigate('/login');
        }
    }, [isUserLogin]);

    const [pname, setPname] = useState("user.name");

    const enableEditPass = () => {
        setisActiveEditPass(!isActiveEditPass);
    };

    const enableEdit = () => {
        setActiveEdit(!isActiveEdit);
    };

    const onSubmitProfile = (data) => {

        setIsProfileLoading(true);
        console.log(data);
        postData(`${URL}api/profile-setting`, { about: data.about, name: data.name, phone_number: data.phone_number, token: userId })
            .then(data => {
                if (data.success != false) {
                    // setUserId(data.data.user_token);
                    // console.log(data.data.user_token); 
                    setCookieinLocal("USER", JSON.stringify(data), 1);
                    // console.log(JSON.parse(getCookie("USER")).data.name);
                    // console.log(JSON.parse(getCookie("USER")).data.email);
                    // setUserEmail(JSON.parse(getCookie("USER")).data.email);
                    // console.log("email");
                    // setUserAbout(JSON.parse(getCookie("USER")).data.about);
                    // setUserPhone(JSON.parse(getCookie("USER")).data.phone_number);
                    // setUserName(JSON.parse(getCookie("USER")).data.name);
                    toast.success(data.message);
                    // console.log("endd");
                    // reset();
                } else {
                    toast.error(data.message);
                    // setIsUserLogin(false);
                }
                setIsProfileLoading(false);
            }).catch((err) => {
                toast.error("Something went wrong!");
                setIsProfileLoading(false);
            });

    };

    const formSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at 8 char long'),
        new_password: Yup.string()
            .required('Password is required')
            .oneOf([Yup.ref('password')], 'Passwords does not match'),
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState;


    const {
        register: register2,
        formState: { errors: errors2 },
        handleSubmit: handleSubmitProfile,
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        setIsLoading(true)
        postData(`${URL}api/change-password`, { password: data.cpassword, new_password: data.new_password, token: userId })
            .then(data => {
                console.log(data);
                if (data.success != false) {
                    toast.success(data.message);
                    reset();

                } else {
                    console.log(data);
                    toast.error(data.message);
                }
                setIsLoading(false);
            }).catch((err) => {
                setIsLoading(false);
                toast.error("Something went wrong!");
            });

    };
    async function postData(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    return (
        <div>
            <div className="container-fluid px-0">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-12"><Sidebar pageid={'account'} /></div>
                    <motion.div className="col-xl-9 col-lg-9 col-md-8 col-12" initial={{ transition: { duration: 1 }, opacity: 0 }} animate={{ transition: { duration: 1 }, opacity: 1 }} exit={{ transition: { duration: 1 }, opacity: 0 }}>
                        <div className='row w-100 mx-0 px-0'>
                            <div className="col-12 mx-0 px-0 text-center">
                                <div className="profile-page p-4 text-start">
                                    <div className="user-profile rounded-3 shadow p-4">
                                        {/* <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0NjQzOTk4OTQ4OTkyMzQy/ansel-elgort-poses-for-a-portrait-during-the-baby-driver-premiere-2017-sxsw-conference-and-festivals-on-march-11-2017-in-austin-texas-photo-by-matt-winkelmeyer_getty-imagesfor-sxsw-square.jpg" draggable="false" alt="profile" className='rounded-circle' /> */}
                                        <div className="mb-5 mt-3">

                                            <h3 className="heading fs-3 mb-3">Manage Profile</h3>
                                            <form className='row' onSubmit={handleSubmitProfile(onSubmitProfile)}>
                                                <div className='col-6 d-flex gap-3 my-2 flex-column'>

                                                    <input type="text" name="" value={userEmail}
                                                        className={`form-control text-dark`} style={{ "filter": "none" }} disabled={true} />

                                                    <input type="text" name="name" id="" {...register2('name', { required: true })}
                                                        className={`form-control text-dark ${errors2.name ? 'is-invalid' : ''}`} style={{ "filter": "none" }} placeholder={`Name`} disabled={isActiveEdit} value={userName} onChange={(e) => setUserName(e.target.value)} />

                                                    <input type="text" name="phone_number" id="" {...register2('phone_number')}
                                                        className={`form-control text-dark ${errors2.phone_number ? 'is-invalid' : ''}`} style={{ "filter": "none" }} placeholder={`Phone Number`} disabled={isActiveEdit} value={userPhone && userPhone} />

                                                    <textarea type="text" name="about" id="" {...register2('about')}
                                                        className={`form-control text-dark ${errors2.about ? 'is-invalid' : ''}`} style={{ "filter": "none" }} placeholder={`About`} disabled={isActiveEdit} >{userAbout ? userAbout : "Hey, there i'm using webapp"}</textarea>

                                                    <div className="float-end">
                                                        <button type={`${!isActiveEdit ? "button" : "submit"}`} onClick={enableEdit} className={`btn ${!isActiveEdit ? "btn-main" : "btn-dark border-0"} d-flex align-items-center gap-2 btn-sm`}>

                                                            <i className={`fa fa-${!isActiveEdit ? "save" : "edit"} me-1 ms-0 align-middle`}></i>

                                                            {!isActiveEdit ? "Save" : "Edit"}

                                                            {isProfileLoading &&
                                                                <div class="spinner-border" style={{ "float": "right" }} role="status">
                                                                    <span class="visually-hidden">Loading...</span>
                                                                </div>
                                                            }


                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="my-5">

                                            <h3 className="heading fs-3 mb-3">Manage Password</h3>
                                            <form onSubmit={handleSubmit(onSubmit)} className="row">
                                                <div className='col-6'>
                                                    <div className='d-flex gap-3 my-2 flex-column'>
                                                        <div class="input-box">
                                                            <input type="password" name="password" id="" {...register('cpassword', { required: true })}
                                                                className={`form-control text-dark ${errors.cpassword ? 'is-invalid' : ''}`} style={{ "filter": "none" }} placeholder={`${!isActiveEditPass ? "Current Password" : "********"}`} disabled={isActiveEditPass} />

                                                            <div className="invalid-feedback text-dark">{errors.password?.message}</div>
                                                        </div>
                                                        <div class="input-box">
                                                            <input type="password" name="password" id="password"  {...register('password')}
                                                                className={`form-control text-dark ${errors.password ? 'is-invalid' : ''}`} style={{ "filter": "none" }} placeholder={`${!isActiveEditPass ? "Password" : "********"}`} disabled={isActiveEditPass} />

                                                            <div className="invalid-feedback text-dark">{errors.password?.message}</div>
                                                        </div>
                                                        <div class="input-box">
                                                            <input type="password" name="cpassword"  {...register('new_password')}
                                                                className={`form-control text-dark ${errors.new_password ? 'is-invalid' : ''}`} disabled={isActiveEditPass} style={{ "filter": "none" }} id="cpassword" placeholder={`${!isActiveEditPass ? "Confirm Password" : "********"}`} />

                                                            <div className="invalid-feedback text-dark">{errors.new_password?.message}</div>
                                                        </div>

                                                        <div className="float-end">
                                                            <button type={`${!isActiveEditPass ? "button" : "submit"}`} onClick={() => { enableEditPass(); setPpass("Enter Current Password") }} className={`btn ${!isActiveEditPass ? "btn-main" : "btn-dark border-0"} d-flex align-items-center gap-2 btn-sm`}>

                                                                <i className={`fa fa-${!isActiveEditPass ? "save" : "edit"} me-1 ms-0 align-middle`}></i>

                                                                {!isActiveEditPass ? "Save" : "Edit"}

                                                                {isLoading &&
                                                                    <div class="spinner-border" style={{ "float": "right" }} role="status">
                                                                        <span class="visually-hidden">Loading...</span>
                                                                    </div>
                                                                }


                                                            </button>
                                                        </div>

                                                    </div>


                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
