import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './details.css';

const Details = () => 
{
  const [input, setInput] = useState('');
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  async function searching(e) {
    try {
      setInput(e.target.value);
      const response = await axios.get('http://localhost:8001/students');
      const results = response.data.filter((student) =>
        student.name.toLowerCase().includes(input.toLowerCase())
      );
      setStudents(results);
    } catch (err) {
      console.log(err);
    }
  }
  async function fetchData() {
    try {
      console.log("hello") ;
      const response = await axios.get('http://localhost:8001/students');
      // setStudents(response.data);
      console.log(response) ;
      setStudents(response.data) ;
    } catch (error) {
      console.log(error);
      setError("Sorry");
    }
  }

  const statusChange = async(e) => 
  { 
    const data = e.target.value ;
    const fin = await axios.get('http://localhost:8001/authroization' , data)  ;
  }

  useEffect(() => {
    fetchData(); // Uncomment this line to fetch data when the component mounts.
  }, []);

  return (
    <>
      <div className="searchbar">
        <input className="searching" placeholder="Search here" onChange={searching} />
      </div>
      <div className="header">
       <h1 className="title">
       STUDENT OUTPASS
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
                  <span>Return Time</span>
                </div>
                <div>
                  <span>Status</span>
                </div>
              </div>
              <div>
                <div class="flex justify-between border-t  text-xl font-normal mt-4 space-x-4">
                  <div class="px-2 flex">
                    <span>Nikhil</span>
                  </div>
                  <div>
                    <span>KajotaNikhil@gmail.com</span>
                  </div>
                  <div class="px-2">
                    <span>To buy shilajeet</span>
                  </div>
                  <div class="px-2">
                    <span>10.00 PM</span>
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
                    <span>Puneet  </span>
                  </div>
                  <div>
                    <span>puneetjain@gmail.com</span>
                  </div>
                  <div class="px-2">
                    <span>To drink </span>
                  </div>
                  <div class="px-2">
                    <span>10.00 PM</span>
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
                    <span>Lamba</span>
                  </div>
                  <div>
                    <span>lamdalamba@gmail.com</span>
                  </div>
                  <div class="px-2">
                    <span>Visit temple</span>
                  </div>
                  <div class="px-2">
                    <span>10.00 PM</span>
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
                    <span>Yoegsh </span>
                  </div>
                  <div>
                    <span>yogeshlamba@gmail.com</span>
                  </div>
                  <div class="px-2 flex">
                    <span>On Date</span>
                  </div>
                  <div class="px-2">
                    <span>10.00 PM</span>
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
                    <span>9.00 PM</span>
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
                    <span> Aditya Soni</span>
                  </div>
                  <div>
                    <span>soni@gmail.com</span>
                  </div>
                  <div class="px-2">
                    <span>Shopping</span>
                  </div>
                  <div class="px-2">
                    <span>11.00 PM</span>
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
                    <span> Raj Sarda</span>
                  </div>
                  <div>
                    <span>sardaRaj@gmail.com</span>
                  </div>
                  <div class="px-2">
                    <span>Dinner</span>
                  </div>
                  <div class="px-2">
                    <span>11.00 PM</span>
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

export default Details;



