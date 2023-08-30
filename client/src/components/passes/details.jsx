import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  './details.css' ;

  const Details = () => {
    
    const [value , setValue] = useState("") ;
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);
  const [input , setInput] = useState("") ;
const removePass = async(id) => 
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
  
        console.log(error);
        setError("Sorry");

}

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
        catch (error) {
        console.log(error);
        setError("Sorry");
      }
    }
    

  useEffect( () => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
      <input placeholder='serach'value={input} onChange= {searching}/>
      </div>
      {error ? (
        <div className='error-box'>{error}</div>
      ) : (
        <table>
        <div> 
          
        {students.map(student => (
         <div  key={student._id}> 
         <thead> 
         <tr> 
       
          <th>Name</th>
          <th>Roll No</th>
          <th>email</th>
          <th>Return Time </th>
          <th>Update</th>
          </tr>
        </thead> 
        <tbody>
          <tr keys = {student.id}>
       
           <td>{student.name}</td>
           <td>{student.rollNo}</td>
           <td>{student.email}</td>
           <td>{student.returnTime}</td>
           <td><button className="detail-button"onClick = {() => removePass(student._id)}> click me </button></td>
          </tr>
        </tbody>
        </div>
      ))}
        </div>
        </table>
        
      )}
    </div>
    
    
   
  );
};

export default Details;

