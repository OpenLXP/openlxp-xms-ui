import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosInstance } from "../config/axiosInstance";
import { login_url } from "../config/endpoints";
import { useAuth } from "../context/authContext";
import logo from "../resources/internal/dodLogo.png"


export default function Login(){
    const {user, login} = useAuth();
    const [credentials, setCredentials] = useState({username:"", password:""});
    const history = useHistory();

    const [errorMsg, setErrorMsg] = useState();

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

    const handleLogin = (event) => {
        event.preventDefault();
        if (credentials.username === '' || credentials.password === '') {
            setErrorMsg('All fields required');
        }
        else(
        axiosInstance
            .post(login_url, credentials)
            .then((res) => {
                login(res.data);
                router.push('/');
            })
            .catch((error) => {
                setErrorMsg('Invalid credentials');
            })
        )
    };

    const checkSpecialCharEmail =(e)=>{
        if(/[<>/{};]/.test(e.key)){
            e.preventDefault();
        }
    };
    
    return(
        <div className='w-1/3 mx-auto p-8 rounded flex flex-col justify-center mb-10'>
            <img src={logo} alt="Dod Logo" width={150} className='mx-auto' />
            <h1 className="my-2 mx-auto text-2xl font-bold"> Sign in to your account </h1>

            <span className="mx-auto">
                or &nbsp;
                <button
                    id={'create-account-button'}
                    className='text-blue-400 hover:underline hover:text-blue-500 cursor-pointer transition-all duration-150 ease-in-out'
                    onClick={() => history.push("/register")}>
                    Create an Account
                </button>
            </span>
            
            <form className="p-2 align-center mx-auto"
                onSubmit={handleLogin} onChange={handleChange}>
                <input 
                    className='shadow focus:shadow-md rounded-md p-2 w-full border border-gray-200 text-gray-700 focus:ring-2 outline-none transition-all  duration-200'
                    type="text" name="username" placeholder="Email" onKeyPress={(e)=>checkSpecialCharEmail(e)}/> 
                <input 
                    className='mt-2 shadow focus:shadow-md rounded-md p-2 w-full border border-gray-200 text-gray-700 focus:ring-2 outline-none transition-all duration-200'
                    type="password" name="password" placeholder="Password"/>
                
                
                <div className='flex flex-col mx-auto content-center'>
                    <div className="flex mt-2 content-center items-center justify-center text-red-600 ">
                        <span>{errorMsg}</span>
                    </div>
                    <button
                        className='mt-4 mx-auto max-w-max items-center inline-flex gap-2 bg-blue-200 rounded-md hover:shadow-md hover:bg-blue hover:text-white px-4 py-2 transform transition-all duration-75 ease-in-out border-bg-blue border-2 outline-none focus:ring-2 ring-blue-400'
                        type="submit" >Login</button>
                </div>
            </form>
        </div>


    )
}