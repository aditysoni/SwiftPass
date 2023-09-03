import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  './details.css' ;
const Details = () =>
{  
  
  const [value , setValue] = useState("") ;
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  const [input , setInput] = useState("") ;

const updatePass= async(id) => 
{
      try
       { 
         
         console.log("delete");
         const res = await axios.delete(`http://localhost:8000/deletePass/${id}`) ;
         setStudents(res.data.body) ;
         fetchData() ;
      }
         catch (error) {
         console.log(error);
         setError("error");
      }
  }

  async function searching(e) 
{ 
  try {
    setInput(e.target.value) ;
    const response = await axios.get('http://localhost:8001/students');
    const  results = response.data.body.filter((response) =>
  {
    return response && response.name &&response.name.toLowerCase().includes(input.toLowerCase()) ;
  })
  // setInput(e.target.value) ;
  console.log(results) ;
  setStudents(results) ;
  console.log("hey yeah");
}
catch(err)
{
    console.log( err) ;
}
}
   async function fetchData() 
{
        console.log(error);
        setError("Sorry");
}



   async function fetchData(e) 

   {
      try {
        console.log("requested") ;
        // setInput(e.target.value) ;
        const response = await axios.get('http://localhost:8001/students');
        console.log(response) ;
        setStudents(response.data.body);
       
      } 
        catch (error) 
        {
        console.log(error);
        setError("Sorry");
        }
    }
    

  useEffect( () => 
  {
    // fetchData();
  }, []);



    return (  
 <>       
 
<div className = "searchbar"> 
<input className= "searching" placeholder ="Search here" onChange = {searching}/>
</div>



<div className="bg-gray-50 min-h-screen">

<div>
  <div className="p-4">
    <div className="bg-white p-4 rounded-md">
      <div>
        <h2 className="mb-4 text-3xl font-bold text-gray-700">STUDENT PASSESS</h2>
        <h2 className="mb-4 text-l font-bold text-gray-700">TOTAL STUDENTS OUTSIDE OF THE CAMPUS = ? </h2>
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
                <span>Role</span>
              </div>
              <div>
                <span>Time</span>
              </div>
              <div>
                <span>Edit</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                <div className="px-2 flex">
                  <span>John Deo</span>
                </div>
                <div>
                  <span>johndeo@gmail.com</span>
                </div>
                <div className="px-2">
                  <span>Admin</span>
                </div>
                <div className="px-2">
                  <span>28/12/2021</span>
                </div>
                <div className="px-2">
                  <select>
                    <option>Admin</option>
                    <option>User</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-between border-t-2 text-sm font-normal mt-4 space-x-4">
                <div className="px-2">
                  <span>John Deo</span>
                </div>
                <div>
                  <span>johndeo@gmail.com</span>
                </div>
                <div className="px-2">
                  <span>Admin</span>
                </div>
                <div className="px-2">
                  <span>28/12/2021</span>
                </div>
                <div className="px-2">
                  <select>
                    <option>Admin</option>
                    <option>User</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-between border-t-2 text-sm font-normal mt-4 space-x-4">
                <div className="px-2">
                  <span>John Deo</span>
                </div>
                <div>
                  <span>johndeo@gmail.com</span>
                </div>
                <div className="px-2">
                  <span>Admin</span>
                </div>
                <div className="px-2">
                  <span>28/12/2021</span>
                </div>
                <div className="px-2">
                  <select>
                    <option>Admin</option>
                    <option>User</option>
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
</div>

</>
)
}
export default Details ;