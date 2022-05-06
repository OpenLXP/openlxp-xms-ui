//register page
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/authContext';

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
    return(
        <div> 
            <h1>Register</h1>
            <form onSubmit={handleSubmit} onChange={handleChange}>
                <input type="text" name="first_name" placeholder="First Name"/>
                <input type="text" name="last_name" placeholder="Last Name"/>
                <input type="text" name="email" placeholder="email"/>
                <input type="password" name="password" placeholder="password"/>
                <input type="password" name="confirmPassword" placeholder="password"/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}