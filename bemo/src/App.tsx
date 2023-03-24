import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Fonts/Paytype-Bd.ttf';
import './Fonts/Paytype-Rg.ttf';
import ErrorComponent from './Components/ErrorComponent/ErrorComponent';
import LoginComponent from './Components/LoginComponent/LoginComponent';
import SignupComponent from './Components/SignupComponent/SignupComponent';
import StravaRedirect from './Components/StravaRedirect/StravaRedirect';
import LandingPageComponent from './Components/LandingPageComponent/LandingPageComponent';
import MainComponent from './Components/MainComponent/MainComponent';
import LeaderboardComponent from "./Components/LeaderboardComponent/LeaderboardComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginComponent/>} />
          <Route path="/signup" element={<SignupComponent/>} />
          <Route path="/main" element={<MainComponent/>} />
          <Route path="/profile" element={null} />
          <Route path="/redirect" element={<StravaRedirect/>} />
          <Route path="/challenge/:id" element={<LeaderboardComponent/>} />
          <Route path="/" element={<LandingPageComponent/>} />
          <Route path="/*" element={<ErrorComponent/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
