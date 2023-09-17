
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
<>

<div className="header">
<h1 className="title">
 OUTPASS HISTORY
</h1>
</div>
            
  <div>
  <div class="p-4">
    <div class="bg-white p-4 rounded-md">
      <div>
        <div>
          <div>
            <div class="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-5 px-4 text-white font-bold text-2xl">
              <div>
                <span>Name</span>
              </div>
              <div>
                <span>Phone</span>
              </div>
              <div>
                <span>Purpose</span>
              </div>
              <div>
                <span> Date/Time</span>
              </div>
              <div>
                <span>Status</span>
              </div>
            </div>
            <div>
            

              
              <div class="flex justify-between border-t  text-xl font-normal mt-4 space-x-4">
                <div class="px-2 flex">
                  <span>Suyash </span>
                </div>
                <div>
                  <span>suyashagrahari@gmail.com</span>
                </div>
                <div class="px-2 flex">
                  <span>Dinner</span>
                </div>
                <div class="px-2">
                  <span>7/8/23 : 12.00 PM</span>
                </div>
                <div class="px-2">
                  <select>
                    <option>APPROVED</option>
                    <option>NOT APPROVED</option>
                  </select>
                </div>
              </div>

                
              <div class="flex justify-between border-t  text-xl font-normal mt-4 space-x-4">
                <div class="px-2 flex">
                  <span>Suyash </span>
                </div>
                <div>
                  <span>suyashagrahari@gmail.com</span>
                </div>
                <div class="px-2 flex">
                  <span>Shopping</span>
                </div>
                <div class="px-2">
                  <span>15/5/2023 : 7.00 PM</span>
                </div>
                <div class="px-2">
                  <select>
                    <option>APPROVED</option>
                    <option>NOT APPROVED</option>
                  </select>
                </div>
              </div>
                
              <div class="flex justify-between border-t  text-xl font-normal mt-4 space-x-4">
                <div class="px-2 flex">
                  <span>Suyash </span>
                </div>
                <div>
                  <span>suyashagrahari@gmail.com</span>
                </div>
                <div class="px-2 flex">
                  <span>Eat chaap</span>
                </div>
                <div class="px-2">
                  <span>--:--:-- || --:--:-- </span>
                </div>
                <div class="px-2">
                  <select>
                    <option>APPROVED</option>
                    <option>NOT APPROVED</option>
                  </select>
                </div>
              </div>

              <div class="flex justify-between border-t  text-xl font-normal mt-4 space-x-4">
                <div class="px-2 flex">
                  <span>Suyash </span>
                </div>
                <div>
                  <span>suyashagrahari@gmail.com</span>
                </div>
                <div class="px-2 flex">
                  <span>Buy books</span>
                </div>
                <div class="px-2">
                  <span>21/08/23 : 9.00 PM</span>
                </div>
                <div class="px-2">
                  <select>
                    <option>APPROVED</option>
                    <option>NOT APPROVED</option>
                  </select>
                </div>
              </div>

              <div class="flex justify-between border-t  text-xl font-normal mt-4 space-x-4">
                <div class="px-2 flex">
                  <span>Suyash </span>
                </div>
                <div>
                  <span>suyashagrahari@gmail.com</span>
                </div>
                <div class="px-2 flex">
                  <span>Thadi</span>
                </div>
                <div class="px-2">
                  <span>25/08/23 : 8.00 PM</span>
                </div>
                <div class="px-2">
                  <select>
                    <option>APPROVED</option>
                    <option>NOT APPROVED</option>
                  </select>
                </div>
              </div>

              <div class="flex justify-between border-t  text-xl font-normal mt-4 space-x-4">
                <div class="px-2 flex">
                  <span>Suyash </span>
                </div>
                <div>
                  <span>suyashagrahari@gmail.com</span>
                </div>
                <div class="px-2 flex">
                  <span>Party</span>
                </div>
                <div class="px-2">
                  <span>--:--:-- || --:--:-- </span>
                </div>
                <div class="px-2">
                  <select>
                    <option>APPROVED</option>
                    <option>NOT APPROVED</option>
                  </select>
                </div>
              </div>

              <div class="flex justify-between border-t  text-xl font-normal mt-4 space-x-4">
                <div class="px-2 flex">
                  <span>Suyash </span>
                </div>
                <div>
                  <span>suyashagrahari@gmail.com</span>
                </div>
                <div class="px-2 flex">
                  <span>Eat chaap</span>
                </div>
                <div class="px-2">
                  <span>13/08/23 : 9.00 PM</span>
                </div>
                <div class="px-2">
                  <select>
                    <option>APPROVED</option>
                    <option>NOT APPROVED</option>
                  </select>
                </div>
              </div>

              <div class="flex justify-between border-t  text-xl font-normal mt-4 space-x-4">
                <div class="px-2 flex">
                  <span>Suyash </span>
                </div>
                <div>
                  <span>suyashagrahari@gmail.com</span>
                </div>
                <div class="px-2 flex">
                  <span>Medical problem</span>
                </div>
                <div class="px-2">
                  <span>9/08/23 : 6.00 PM</span>
                </div>
                <div class="px-2">
                  <select>
                    <option>APPROVED</option>
                    <option>NOT APPROVED</option>
                  </select>
                </div>
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </>

  
           
              );
            };
     


export default StudentPasses ;