import React, { useEffect, useState } from 'react' ;
import axios from 'axios' ;
import './homeStud.css' ;
import { BrowserRouter as Router , Route , Routes  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useSelector} from 'react-redux/es/hooks/useSelector';

import Cookies from 'js-cookie';

const HomeStu = ( ) =>  {
    const navigate = useNavigate() ; 
    // const rollNo = "20ume003";
    // const email = "warden@gmail.com";
    const [rollNo, setrollNo] = useState("") ;
    const [studentname , setName ] = useState("") ;
    const [userId , setuserId] = useState("") ;
    const [purpose, setPurpose] = useState("") ;
    const [returnTime , setRettime] = useState("") ;
    const onPurpose = (e) => 
    {
      setPurpose(e.target.value);
    };
   
    const setreturnTime = (e) => 
    {
      setRettime(e.target.value);
    };

      const fetchtoken = async () => {
      const token = Cookies.get('Authorization') ;
      console.log(token) ;
      console.log("lets get the cookie") ;
      const student = await axios.get(`http://localhost:8001/generate` ,
       {withCredentials:true } ,{
      'Authorization' : `${token}` ,
      "Content-Type":"application/json" ,}) ;
      console.log(student) ;
      const name = student.data.data.name ;
      const roll = student.data.data._id ;
      setName(name) ;
      setrollNo(roll) ;
    }
    
    const onSubmitForm = async(e) => 
    {
      e.preventDefault() ;  
      const data  = {studentname , rollNo , email, purpose , returnTime} ;
      const res = await axios.post('http://localhost:8001/generate' , data ) ;
      
      alert("successfully generated the outpass") ;

      res.json("saved ur ass") ;
    }
   useEffect(  ()=>
   {  
    
    fetchtoken() ;
     console.log("cookie") ;
    //  setName("aa gaya") ;
    
     
   } , [])
   
   return (
     <div>
        <div className="container">
          <div className="title">Registration</div>
          <div className="content">
   
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input type="text" placeholder="Enter your name" required/>
                </div>
                <div className="input-box">
                  <span className="details">Username</span>
                  <input type="text" placeholder="Enter your username" required/>
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input type="text" placeholder="Enter your email" required/>
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input type="text" placeholder="Enter your number" required/>
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input type="text" placeholder="Enter your password" required/>
                </div>
                <div className="input-box">
                  <span className="details">Confirm Password</span>
                  <input type="text" placeholder="Confirm your password" required/>
                </div>
              </div>
              <div className="gender-details">
                <input type="radio" name="gender" id="dot-1"/>
                <input type="radio" name="gender" id="dot-2"/>
                <input type="radio" name="gender" id="dot-3"/a>
                <span className="gender-title">Gender</span>
                <div className="category">
                  <label for="dot-1">
                  <span className="dot one"></span>
                  <span className="gender">Male</span>
                </label>
                <label for="dot-2">
                  <span className="dot two"></span>
                  <span className="gender">Female</span>
                </label>
                <label for="dot-3">
                  <span className="dot three"></span>
                  <span className="gender">Prefer not to say</span>
                  </label>
                </div>
              </div>
              <div className="button">
                <input type="submit" value="Register"/>
              </div>

          </div>
        </div>
        </div>
     
   )
  } ;
export default HomeStu;
