import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import EmployerDashboard from "./pages/EmployerDashboard";
import FresherDashboard from "./pages/FresherDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/:role/:action" element={<AuthPage />} />
        <Route path="/fresher" element={<FresherDashboard />} />
        <Route path="/employer" element={<EmployerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
