import React from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';

// components
import NavBar from './components/common/NavBar';
import BirthReg from './pages/BirthReg';
import DeathReg from './pages/DeathReg';
import History from './pages/History';
import Statistics from './pages/Statistics';

const App = () => {
  return (
    <Routes>
      <Route path="/birth-reg" element={
        <>
          <NavBar />
          <BirthReg />
        </>
      } />
      <Route path="/death-reg" element={
        <>
          <NavBar />
          <DeathReg />
        </>
      } />
      <Route path="/history" element={
        <>
          <NavBar />
          <History />
        </>
      } />
      <Route path="/statistics" element={
        <>
          <NavBar />
          <Statistics />
        </>
      } />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
};

export default App;
