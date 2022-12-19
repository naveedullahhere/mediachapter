import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Register = () => {
    return (
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}>
            <div className="loginMain">

                <form action="#" class="login-box" autocomplete="on">
                    <div class="title">
                        <h1>Register</h1>
                    </div>
                    <div class="input-box">
                        <input type="text" name="" required class="inputLogin" id="username" />
                        <label for="username">Username</label>
                    </div>
                    <div class="input-box">
                        <input type="email" name="" required class="inputLogin" id="email" />
                        <label for="email">Email</label>
                    </div>
                    <div class="input-box">
                        <input type="password" name="" required class="input pass-input" id="password" />
                        <img src="assets/img/view.png" class="view-pass" alt="" />
                        <label for="password">Password</label>
                    </div>
                    <div class="input-box">
                        <input type="password" name="" required class="input pass-input" id="cpassword" />
                        <img src="assets/img/view.png" class="view-pass" alt="" />
                        <label for="cpassword">Confirm Password</label>
                    </div>
                    <div class="remember-me">
                        <input type="checkbox" checked name="" id="checkbox" />
                        <label for="checkbox" className='px-2'>Remember Me</label>
                    </div>
                    <button type="submit">Signup</button>
                    <div class="auth-action">
                        <Link to="/login">Sign In</Link>
                        <a href="#">Forget Password?</a>
                    </div>
                </form>
            </div>

        </motion.div>
    )
}
