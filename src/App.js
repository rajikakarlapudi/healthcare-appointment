import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DoctorProfilePage from "./pages/DoctorProfilePage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/doctor/:id" element={<DoctorProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
