import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Router } from "react-router-dom";
import { useAuth } from "../context/authContext";


export default function Login(){
    const {user, login} = useAuth();
    const [credenials, setCredentials] = useState({username:"", password:""});
    const history = useHistory();

    useEffect(()=>{
        console.log(user);
        if(user){
            history.push("/dashboard");
        }
    },[user]);

    function handleChange(event){
        const {name, value} = event.target;
        setCredentials((prev)=>{
            return{
                ...prev,[name]:value
            }
        })
    }
    return(
        <div className='w-1/3 mx-auto p-8 rounded flex flex-col justify-center m-10'>
            <h1 className="my-2 text-2xl font-bold"> Login Page </h1>
            <form className="p-2 align-center"
                onSubmit={(event)=>{
                    event.preventDefault();
                    login(credenials);
                }} onChange={handleChange}>
                <input 
                    className='shadow focus:shadow-md rounded-md p-2 w-full border border-gray-200 text-gray-700 focus:ring-2 outline-none transition-all  duration-200'
                    type="text" name="username" placeholder="Email"/> 
                <input 
                    className='mt-2 shadow focus:shadow-md rounded-md p-2 w-full border border-gray-200 text-gray-700 focus:ring-2 outline-none transition-all duration-200'
                    type="password" name="password" placeholder="Password"/>
                <button
                    className='mt-4 mx-auto max-w-max items-center inline-flex gap-2 bg-blue-200 rounded-md hover:shadow-md hover:bg-blue hover:text-white px-4 py-2 transform transition-all duration-75 ease-in-out border-bg-blue border-2 outline-none focus:ring-2 ring-blue-400'
                    type="submit" >Login</button>
            </form>
        </div>


    )
}