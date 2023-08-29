import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  './details.css' ;

  const Details = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

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
  
   async function fetchData() 
   {
      try {
        console.log("requested")
        const response = await axios.get('http://localhost:8000/students');
        setStudents(response.data.body);
        console.log(response) ;
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
      {error ? (
        <div>{error}</div>
      ) : (
        <table>
        <div  > 
          
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

