import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StudentPasses from './pages/studentPasses/studpasses';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import store from './store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import HomeStu from './pages/homestudenet/homeStud';
import Details from './components/passes/details';
import Register from './pages/register/register';
ReactDOM.render(

  <Router>
    <Routes>
       <Route path="/register" element={<Register/>} />
       <Route exact path= "/" element = {<Login/>} />
       <Route path = '/faculty' element={<Details/>}/>
      <Route path = "/generate" element = {<HomeStu/>} />
      <Route path = "/passess" element = {<StudentPasses/>} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
