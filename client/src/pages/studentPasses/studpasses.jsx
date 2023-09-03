
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";


const StudentPasses = () =>
{   
    
  const [passess , setPassess ] = useState([]) ;
    
  
     const fetchDeatils  = async () => 
    {
     try 
     { 
      const token = Cookies.get('Authorization') ;
      console.log(token) ;
      console.log("lets get the cookie") ;
      const res = await axios.get(`http://localhost:8001/passes` ,
      {withCredentials:true } ,{
      'Authorization' : `${token}` ,
      "Content-Type":"application/json" ,}) ;
      console.log(res.data) ;
      setPassess(res.data) ;
    }

      catch(err){console.log(err) ;}
    }

    

    useEffect ( ()=> 
    {

        fetchDeatils() ;

    },[]) 


      return (

<div className="bg-gray-50 min-h-screen">

<div>
  <div className="p-4">
    <div className="bg-white p-4 rounded-md">
      <div>
        <h2 className="mb-4 text-3xl font-bold text-gray-700"> OUTPASS</h2>
        <h2 className="mb-4 text-l font-bold text-gray-700">Times you went out of the campus = ? </h2>
        <div>
          <div>
            <div className="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
              <div>
                <span>Name</span>
              </div>
              <div>
                <span>Email</span>
              </div>
              <div>
                <span>Phone</span>
              </div>
              <div>
                <span>Return Time</span>
              </div>
              
              <div>
                <span>Status</span>
              </div>
            </div>
            <div>

              <div className="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                  {passess.map(pass => (
                  <div  key={   pass._id}>
                <div className="px-2 flex">
                  <span>{pass.name}</span>
                </div>
                <div>
                  <span>{pass.email}</span>
                </div>
                <div className="px-2">
                  <span>{pass.phone}</span>
                </div>
                <div className="px-2">
                  <span>{pass.returnTime}</span>
                </div>
                <div className="px-2">
                 <span>{pass.status}</span>
                </div>
              
            </div>
      ))} 
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

  
           
              );
            };
     


export default StudentPasses ;