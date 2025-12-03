import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/pages/Header';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Products from './assets/pages/Products';
import Services from './assets/pages/Services';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Reviews from './assets/pages/Reviews';

function App() {


  return (
   <Router>
      <div>
       <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reviews" element={<Reviews />} />
      </Routes>
    
</Router>
  )
}

export default App
