import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from '../src/Components/Pages/Home/Home/Home';
import About from '../src/Components/Pages/About/About';
import Blogs from '../src/Components/Pages/Blogs/Blogs';
import Login from '../src/Components/Pages/Login/Login';
import Register from '../src/Components/Pages/Register/Register';
import AuthProvider from './Components/Context/AuthProvider';
import AddWinterPd from './Components/Pages/DashBoard/AddProduct/AddWinterPd/AddWinterPd';

function App() {
  return (
    <div className="App bg-dark text-info">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blogs />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/addWinterPd" element={<AddWinterPd />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
