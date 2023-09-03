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
    const email = "warden@gmail.com";
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
      const data  = { purpose , returnTime } ;
      const res = await axios.post('http://localhost:8001/generate' , data ) ;
      
      alert("successfully generated the outpass") ;

      res.json("saved ur ass") ;
    }
    
   useEffect(  ()=>
   {  
    
    fetchtoken() ;
    //  console.log("cookie") ;
    //  setName("aa gaya") ;
    
     
   } , [])
   
   return (
      <div className = 'login-box'>
         <div className='user-box'>
         <div className="header"> 
          <h2>GENERTE YOUR OUTPASS</h2>
         </div>
            <div className = "box">
            <div className = "generator-input"> 
             Name : {studentname} 
            </div>
            <div className = "generator-input"> 
            Roll No: {rollNo}
            </div>
            <div className = "generator-input"> 
            <input className= " inputboxi"
            placeholder='expected returning time '
            type="text"
            id = "retTime"
            value={returnTime} onChange={setreturnTime}
            />
            </div>
            <div className = "generator-input">  
            <input className = "inputboxi"
            placeholder='purpose of visit '
            type= "text" 
            id = "purpose" 
            value = {purpose} onChange = {onPurpose}
            />
            </div>``   
            <button className="button" onClick={onSubmitForm}> 
            GENERATE OUTPASS
            </button>
            </div>
             </div>
         </div>      




         
    )}
export default HomeStu;
