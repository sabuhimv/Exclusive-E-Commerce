import React, { useState } from 'react'
import './Login.scss'
import Image from '../../assets/images/sign/sign.svg'
import { Link, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { auth } from '../../firebase/Firebase';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";


const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if (user) {
                localStorage.setItem("loggedUserId", user.uid);
                navigate("/account");
            }
        } catch (error: any) {
            {
                error.message = 'Cannot login Firebase: Error (auth/invalid-credential).' ? toast.error("Your email address and/or password is incorrect.") : toast.error("Cannot login " + error.message)
            }
            
        }
    }

    const forgetPassword = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await sendPasswordResetEmail(auth, email);
            toast.info("A password reset email has been sent")
        } catch (err: any) {
            {
                err.message = 'Firebase: Error (auth/missing-email).' ? toast.error("Please enter your email") : toast.error(err.message)
            }
        }
    }

    return (
        <div className='signup container'>
            <div className='signup__left'>
                <img src={Image} alt="" />
            </div>
            <div className='signup__right'>
                <h3>Log in to Exclusive</h3>
                <p>Enter your details below</p>
                <form className="inputs">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />


                    <div className='login_buttons'>
                        <button onClick={login} className='button-primary' type='submit'>Login</button>
                        <p onClick={forgetPassword} className='forgetPassword'>Forget Password?</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp