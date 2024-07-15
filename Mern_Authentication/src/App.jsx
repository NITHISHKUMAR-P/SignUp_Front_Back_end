// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './component/signup';
import Login from './component/login';


function App() {
  return (
    <React.Fragment>
      <Router>
        <div className='header'>
          <Link to='/' className='link'>SignUp</Link>
          <Link to='/log' className='link'>Login</Link>
        </div>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/log' element={<Login />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
