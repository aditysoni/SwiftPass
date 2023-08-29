import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Homestaff = () => 
{
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  
  useEffect( () => {
   async function fetchData() 
   {
      try {
         console.log("requested")
        const response = await axios.get(`http://localhost:8000/students`);
        setStudents(response.data.body);
          } catch (error) 
      {
        console.log(error);
        setError("Sorry, there was an error");
      }
    }

    fetchData();
  }, []);

  return 
  (
    
    <div>
      { 
        error ? 
        (
        <div>{error}</div>
        ) : (
        <div>
        {
            students.map(student => 
            (
            <div >
              <div>{student.name}</div>
              <div> {student.rollNo}</div>
              <div> {student.purpose}</div>
              <div> {student.phone}</div>
              
            </div>
            )
            )
        }
        </div>
        )
      }
    </div>
    
  )
    }

export default Homestaff ;
