import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import toast from "react-hot-toast";
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {

    const { isUserLogin, setIsUserLogin, URL, setCookieinLocal, setUserName, setUserId, userAbout } = useContext(AppContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    let navigate = useNavigate();

    isUserLogin && navigate('/my-account');

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        let emailD = email;
        let passwordD = password;
        setIsLoading(true);
        postData(`${URL}api/signin`, { email: emailD, password: passwordD })
            .then(data => {
                if (data.success != false) {
                    setUserId(data.data.user_token);
                    console.log(data.data.user_token);
                    setCookieinLocal("USER", JSON.stringify(data), 1);
                    setIsUserLogin(true);
                    toast.success(data.message);
                    setUserName(data.data.name);
                    reset();
                } else {
                    toast.error(data.message);
                    setIsUserLogin(false);
                }
                setIsLoading(false);
            }).catch((err) => {
                setIsLoading(false);
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
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}>
            <div className="loginMain">

                <form onSubmit={handleSubmit(onSubmit)} class="login-box" method='POST' autocomplete="off">
                    <div class="title">
                        <h1>LOGIN</h1>
                    </div>
                    <div class="input-box">
                        <input type="text" name="email" class={`inputLogin ${errors.email && "form-control is-invalid"}`} id="username" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} onChange={(e) => setEmail(e.target.value)} />
                        <label for="username">Email</label>
                    </div>
                    {errors.email && <span className='para-sm text-white'>Please Enter a Valid Email</span>}

                    <div class="input-box">
                        <input type="password" autocomplete="false" name="password" class="input pass-input" id="password"  {...register('password', { required: true })} onChange={(e) => setPassword(e.target.value)} />
                        <img src="assets/img/view.png" class="view-pass" alt="" />
                        <label for="password">Password</label>
                    </div>
                    {/* <div class="remember-me">
                        <input type="checkbox" checked name="" id="checkbox" />
                        <label for="checkbox" className='ps-2'>Remember Me</label>
                    </div> */}
                    <button type="submit" className=''>
                        Login
                        {isLoading &&
                            <div class="spinner-border me-5" style={{ "float": "right" }} role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        }
                    </button>
                    <div class="auth-action">
                        <Link to="/register">Sign Up</Link>
                        <a href="#">Forget Password?</a>
                    </div>
                </form>
            </div>

        </motion.div>
    )
}
