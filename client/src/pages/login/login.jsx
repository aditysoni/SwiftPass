import React, {useState } from 'react'
import axios from 'axios' ;
import {Link, Navigate, useNavigate}from 'react-router-dom' ;
import './login.css' ;
import { setLogin } from '../../state';
// import {useDispatch} from 'react-redux' ; 
// import { application } from 'express';


const Login =() => 
{    
    const Navigate = useNavigate() ;
    const [username , setUsername] = useState("") ;
    const [password , setPassword] = useState("") ;
    const [name , setName ] = useState("") ;

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
      const config = {
        headers: {"Content-Type" : "application/json"} ,
        withCredentials:true 
      }
      const handleLogin = async () => {
        try {
            const data = { username, password };
            const savedUserResponse = await axios.post(
              "http://localhost:8001/auth/login", data , 
              config
            );
            console.log(savedUserResponse) ;
           Navigate("http://localhost:3000/generate")
            // alert(savedUserResponse) ;
            
            
    
           
        } catch (error) {
            console.log("An error occurred:", error.message);
        }
    };
    
     return (
    <div className="login-box" >
      <h2>Login</h2>
    
      <div className="user-box">
        <input className="inputboxi" placeholder="Username"type="email" value = {username}  onChange={handleUsernameChange}/>
        <label ></label>
      </div>
      <div className="user-box">
        <input className='inputboxi' type="password" placeholder='Password' value = {password} onChange={handlePasswordChange}/>
        <label></label>
      </div>
    
      <button  className='button' onClick={handleLogin}>
        SUBMIt
      </button>
      </div>
      
        )} ;

export default Login ;




