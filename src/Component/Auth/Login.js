import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}>
            <div className="loginMain">

                <form action="#" class="login-box" autocomplete="on">
                    <div class="title">
                        <h1>LOGIN</h1>
                    </div>
                    <div class="input-box">
                        <input type="text" name="" required class="inputLogin" id="username" />
                        <label for="username">Username</label>
                    </div>
                    <div class="input-box">
                        <input type="password" name="" required class="input pass-input" id="password" />
                        <img src="assets/img/view.png" class="view-pass" alt="" />
                        <label for="password">Password</label>
                    </div>
                    <div class="remember-me">
                        <input type="checkbox" checked name="" id="checkbox" />
                        <label for="checkbox">Remember Me</label>
                    </div>
                    <button type="submit">Login To Website</button>
                    <div class="auth-action">
                        <Link to="/register">Sign Up</Link>
                        <a href="#">Forget Password?</a>
                    </div>
                </form>
            </div>

        </motion.div>
    )
}
