import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from '../src/Components/Pages/Home/Home/Home';
import About from '../src/Components/Pages/About/About';
import Blogs from '../src/Components/Pages/Blogs/Blogs';

function App() {
  return (
    <div className="App bg-dark text-info">
      <BrowserRouter>
        <h1>Welcome to Your MIXMATCHING!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
