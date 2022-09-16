import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Layout from './layouts/layout';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Skills from './pages/skills';
import About from './pages/about';
import Contact from './pages/contact';
import "./stylesheets/pagePosition.css";
import "./stylesheets/fonts.css";
import "./stylesheets/header.css"
import { useEffect } from 'react';
import "./App.css"

function App() {
  return (
    
    <BrowserRouter>
    
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index path="/" element={<Home />}></Route>
          
          <Route path="/portfolio" element={<Portfolio />}></Route>

          <Route path="/skills" element={<Skills />}></Route>

          <Route path="/contact" element={<Contact />}></Route>

        </Route>

      </Routes>
    
    </BrowserRouter>

  );
}

export default App;
