import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import HomeStu from './pages/homestudenet/homeStud';
import Details from './components/passes/details';

ReactDOM.render(

  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path = "/generate" element = {<HomeStu/>} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
