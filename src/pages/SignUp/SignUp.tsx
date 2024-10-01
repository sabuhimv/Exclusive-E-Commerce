import React, { useState } from 'react'
import './SignUp.scss'

import Image from '../../assets/images/sign/sign.svg'
import Google from '../../assets/icons/google.svg'
import { toast } from 'react-toastify';

import { Link, useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/Firebase';
import { GoogleAuthProvider } from "firebase/auth";
import { doc, getFirestore, setDoc } from 'firebase/firestore';

const provider = new GoogleAuthProvider();

const SignUp = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const register = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;
            const userData = {
                name: name,
                phone: phone,
                email: email,
                password: password
            }
            const db = getFirestore();

            const docRef = doc(db, "users", user.uid);

            if (user) {
                toast.success("Registration successful!")
                setEmail("");
                setPassword("");
                setPhone("");
                setName("");
                navigate("/login")
                setDoc(docRef, userData)
            }
        } catch (error: any) {
            toast.error(error.message)
        }
    }

    const loginWithGoogle = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await signInWithPopup(auth, provider)
            // const credential = GoogleAuthProvider.credentialFromResult(response);
            // const token = credential?.accessToken;
            const user = response.user;
            if (user) {
                navigate("/")
            }
        } catch (error: any) {
            toast.error(error.message)
        }
    }

    return (
        <div className='signup container'>
            <div className='signup__left'>
                <img src={Image} alt="" />
            </div>
            <div className='signup__right'>
                <h3>Create an account</h3>
                <p>Enter your details below</p>
                <form className="inputs">
                    <input id='name' value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' />
                    <input id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} type="phone" placeholder='Phone Number' />
                    <input id='email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
                    <input id='password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />

                    <div className='buttons'>
                        <button onClick={register} className='button-primary' type='submit'>Create Account</button>
                        <button onClick={loginWithGoogle} className='button-secondary'>
                            <img src={Google} alt="" />
                            <span>Sign up with Google</span>
                        </button>
                    </div>

                    <div className='others'>
                        <span>Already have account?</span>
                        <Link to="/login" >Log In</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp