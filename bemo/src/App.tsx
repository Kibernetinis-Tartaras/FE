import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorComponent from './Components/ErrorComponent/ErrorComponent';
import LoginComponent from './Components/LoginComponent/LoginComponent';
import './Fonts/Paytype-Bd.ttf';
import './Fonts/Paytype-Rg.ttf';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginComponent/>} />
          <Route path="/signup" element={null} />
          <Route path="/main" element={null} />
          <Route path="/profile" element={null} />
          <Route path="/" element={null} />
          <Route path="/*" element={<ErrorComponent/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
