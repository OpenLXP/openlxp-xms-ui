//register page
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import logo from "../resources/internal/dodLogo.png"


export default function Register() {
    const {user, register} = useAuth();
    const [credentials, setCredentials] = useState({
        first_name:"",
        last_name:"",
        email:"", 
        password:"",
        confirmPassword:"",
    });

    const history = useHistory();
    useEffect(()=>{
        if(!user) return;
        history.push("/dashboard");
    },[user]);

    function handleChange(event){
        const {name, value} = event.target;
        setCredentials((prev)=>({...prev,[name]:value}));
    }

    function handleSubmit(event){
        console.log(credentials);
        event.preventDefault();
        register(credentials);
    }
    const checkSpecialChar =(e)=>{
        if(/[<>/?+={};#$%&*()`~\\]/.test(e.key)){
            e.preventDefault();
        }
    };

    const checkSpecialCharEmail =(e)=>{
        if(/[<>/{};]/.test(e.key)){
            e.preventDefault();
        }
    };

    return(
        <div className='w-1/3 mx-auto p-8 rounded flex flex-col justify-center m-10'> 
            <img src={logo} alt="Dod Logo" width={150} className='mx-auto' />
            <h1 className="my-2 mx-auto text-2xl font-bold"> Create your account </h1>

            <span className="mx-auto">
                or &nbsp;
                <button
                    id={'create-account-button'}
                    className='text-blue-400 hover:underline hover:text-blue-500 cursor-pointer transition-all duration-150 ease-in-out'
                    onClick={() => history.push("/login")}>
                    Sign in to your Account
                </button>
            </span>
            <form className="p-2 align-center" onSubmit={handleSubmit} onChange={handleChange}>
                <input 
                    className='shadow focus:shadow-md rounded-md p-2 w-full border border-gray-200 text-gray-700 focus:ring-2 outline-none transition-all  duration-200'
                    type="text" name="first_name" placeholder="First Name" maxLength="255" onKeyPress={(e)=>checkSpecialChar(e)}/>
                <input 
                    className='mt-2 shadow focus:shadow-md rounded-md p-2 w-full border border-gray-200 text-gray-700 focus:ring-2 outline-none transition-all  duration-200'
                    type="text" name="last_name" placeholder="Last Name" maxLength="255" onKeyPress={(e)=>checkSpecialChar(e)}/>
                <input 
                    className='mt-2 shadow focus:shadow-md rounded-md p-2 w-full border border-gray-200 text-gray-700 focus:ring-2 outline-none transition-all  duration-200'
                    type="text" name="email" placeholder="Email" maxLength="255" onKeyPress={(e)=>checkSpecialCharEmail(e)}/>
                <input  
                    className='mt-2 shadow focus:shadow-md rounded-md p-2 w-full border border-gray-200 text-gray-700 focus:ring-2 outline-none transition-all  duration-200'
                    type="password" name="password" placeholder="Password"/>
                <input 
                    className='mt-2 shadow focus:shadow-md rounded-md p-2 w-full border border-gray-200 text-gray-700 focus:ring-2 outline-none transition-all  duration-200'
                    type="password" name="confirmPassword" placeholder="Confirm Password"/>
                <div className='flex mx-auto content-center'>
                <button 
                    className='mt-4 mx-auto gap-2 bg-blue-200 rounded-md hover:shadow-md hover:bg-blue hover:text-white px-4 py-2 transform transition-all duration-75 ease-in-out border-bg-blue border-2 outline-none focus:ring-2 ring-blue-400'
                    type="submit">Create Account</button>
                </div>
            </form>
        </div>
    )
}