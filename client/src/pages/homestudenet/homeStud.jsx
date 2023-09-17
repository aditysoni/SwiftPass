import React, { useEffect, useState } from 'react' ;
import axios from 'axios' ;
import './homeStud.css' ;
import { BrowserRouter as Router , Route , Routes  } from 'react-router-dom';
import { useNavigate , Navigate } from 'react-router-dom';
// import { useSelector} from 'react-redux/es/hooks/useSelector';

import Cookies from 'js-cookie';
// import student from '../../../../server/model/StudentSchema';

const HomeStu = ( ) =>  {
    const Navigate = useNavigate() ; 
    // const rollNo = "20ume003";
    const [loggedIn , setloggedIn] =useState(false) ;
    const [rollNo, setrollNo] = useState("") ;
    const [phone, setphone] = useState("") ;
    const [email, setEmail] = useState("") ;
    const [name , setName ] = useState("") ;
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
      if(token)
    {  console.log(token) ;
      console.log("lets get the cookie") ;
      const student = await axios.get(`http://localhost:8001/generate` ,
       {withCredentials:true } ,{
      'Authorization' : `${token}` ,
      "Content-Type":"application/json" ,}) ;
      if(student) 
      {
        setloggedIn(true) ;
      }
      console.log(student) ;
     
      setName(student.data.data.name) ;
      setphone(student.data.data.phone) ;
      setrollNo(student.data.data.rollNo) ;
     setEmail(student.data.data.email) ;}
     else 
      { Navigate("http://localhost:3000/") ;}
    }
    
    const onForm = async(e) => 
    {
      e.preventDefault() ;  
      const token = Cookies.get('Authorization') ;
      console.log(token) ;
      console.log("going") ;
      const data  = { purpose , name , rollNo , phone, returnTime } ;
      const res = await axios.post('http://localhost:8001/generate' , data ,
      {withCredentials:true } ,{
        'Authorization' : `${token}` ,
        "Content-Type":"application/json" ,}) ; 
      
        if(res)
        {
          Navigate('http://localhost:3000/passess') ;
        }
  
    }
    
   useEffect(  ()=>
   {  
    
    fetchtoken() ;
    //  console.log("cookie") ;
    //  setName("aa gaya") ;
   } , [])
   
   return (
    <>
    
    <button className="logout">
    LOGOUT
    </button>

  

   
    <div class="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
        xl:px-5 lg:flex-row">
      <div class="flex flex-col items-center w-full pt-0 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row ">
        <div class="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
          <div class="flex flex-col items-center justify-center w-full h-full relative lg:pr-10 ">
            <img src="https://i.pinimg.com/564x/c6/32/b9/c632b90cf37fea9eabea0c3fbb14c4fa.jpg" class="btn-"/>
          </div>
        </div>
        <div class="w-full mt-0 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
          <div class="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
              relative z-10">
            <p class="w-full text-2xl font-medium text-center leading-snug font-serif"> {name } generate your OUTPASS</p>
            <div class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
            
              <div class="relative">
              <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute">Return Time</p>
              <input placeholder="10.30 PM" type="text" class="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md" onChange={setreturnTime}/>
            </div>
            <div class="relative">
            <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                absolute">Purpose</p>
            <input placeholder="shopping" type="text" class="border placeholder-gray-400 focus:outline-none
                focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                border-gray-300 rounded-md" onChange={onPurpose}/>
          </div>
              <div class="relative">
                <button class="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
                    rounded-lg transition duration-200 hover:bg-indigo-600 ease" onClick={onForm}>Submit</button>
          </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>

          
      </> 
    )}

export default HomeStu;
