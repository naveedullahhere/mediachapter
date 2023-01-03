import React, { useContext, useState } from 'react'
import toast from "react-hot-toast";
import { AppContext } from '../../context/AppContext';
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../Spinner';

export const Verify = () => {
    const { user, URL, addUserData, dispatch } = useContext(AppContext);

    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState("resend");
    const navigate = useNavigate();

    const formSchema = Yup.object().shape(

        {
            verifycode: Yup.string()
                .required('Verification code is required')
                .min(5, 'Verification code must be 5 numbers'),
        })

    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState;

    const onSubmit = (data) => {
        console.log("Here");
        var url = `${type === "verify" ? (URL + "api/check-verification") : (URL + "api/generate-code?token=" + user.data.user_token)}`
        postData(url, { code: data.verifycode, token: user.data.user_token }, `${type === "verify" ? "POST" : "GET"}`)
            .then(data => {
                if (data.success != false) {
                    toast.success("Account Verified Successfully!");
                    dispatch(addUserData(data.data));
                    if (data.data.is_varified) {
                        navigate("/my-account");
                    }
                    else {
                        navigate("/verify");
                    }
                    reset();
                } else {
                    toast.error(data.message);
                }
            }).catch((err) => {
                toast.error("Something went wrong!");
            });
    };


    const resend = () => {

        setIsLoading(true);
        postData(`${URL}api/generate-code?token=${user.data.user_token}`, { code: null, token: null }, `GET`)
            .then(data => {
                if (data.success != false) {
                    // toast.success("Account Verified Successfully!"); 
                    // dispatch(addUserData(data.data));
                    if (data) {
                        // navigate("/my-account");
                        toast.success("Verification code sent! Check your mail");
                    }
                    else {
                        // navigate("/verify");
                    }
                    reset();
                } else {
                    toast.error("Something went wrong!");
                }
                setIsLoading(false);
            }).catch((err) => {
                setIsLoading(false);
                toast.error("Something went wrong!");
            });
    }


    async function postData(url, data, methodd) {
        console.log(url, data, methodd);
        var response;
        if (methodd === "POST") {
            response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

        }
        else {
            response = await fetch(url);

        }
        return response.json();
    }






    return (
        <div>
            <div className="container py-md-5 py-3">
                <div className="row">
                    <div className="col-12">
                        <div class="wrapper mx-auto pt-3 shadow-lg">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <p className="mb-2 mt-3 text-muted">We just send your authentication code vie email to <b>{user && user.data.email}</b></p>
                                <p className="mb-2 mt-3 text-muted">Account Verification</p>
                                <input name="opinion" maxLength={5} className={`text-dark input border-dark mt-2 filter-none ${errors.verifycode && "form-control is-invalid"}`} {...register('verifycode', { required: true, pattern: /^\S+@\S+$/i })} cols="30" rows="5" placeholder="XXXXX"></input>
                                <div className="invalid-feedback text-danger mt-3">{errors.verifycode?.message}</div>
                                <div class="btn-group mt-3">
                                    <button type="submit" onClick={() => setType("verify")} class="btn submit">Verify</button>
                                    <button type="button" onClick={() => { setType("resend"); resend() }} class={`btn cancel d-flex justify-content-center ${isLoading && "py-3"}`}>


                                        {isLoading ? <div className="spinner-border" style={{ "float": "right" }} role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div> : "Resend"}

                                        
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
