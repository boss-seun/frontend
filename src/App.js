import React from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';

// components
import NavBar from './components/common/NavBar';

const App = () => {
  return (
    <Routes>
      <Route path="/birth-reg" element={
        <>
          <NavBar />
        </>
      } />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
};

export default App;
