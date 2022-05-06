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
        <div>
            Login Page
            <form onSubmit={(event)=>{
                    event.preventDefault();
                    login(credenials);
                }} onChange={handleChange}>
                <input type="text" name="username" placeholder="email"/> 
                <input type="password" name="password" placeholder="password"/>
                <button type="submit" >Login</button>
            </form>
        </div>


    )
}