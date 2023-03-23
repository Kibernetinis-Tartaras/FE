import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={null} />
          <Route path="/signup" element={null} />
          <Route path="/main" element={null} />
          <Route path="/profile" element={null} />
          <Route path="/" element={null} />
          <Route path="/*" element={null} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
