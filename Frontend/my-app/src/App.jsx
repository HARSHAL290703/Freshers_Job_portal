import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import EmployerDashboard from "./pages/EmployerDashboard";
import FresherDashboard from "./pages/FresherDashboard";
import FreshersInfo from "./pages/FreshersInfo";
import About from "./pages/About";
import EmployeerInfo from "./pages/EmployeerInfo";
import Addjobs from "./components/Addjobs";
import Viewjobs from "./components/Viewjobs";
import Employerprofile from "./components/Employerprofile";
import Apply from "./pages/Apply";
import Freshersignup from "./pages/Freshersignup";
import Fresherssignin from "./pages/Fresherssignin";
import Employersignup from "./pages/Employersignup";
import Employersignin from "./pages/Employersignin";
import Frontpage from "./pages/Frontpage";
import Viewapplications from "./pages/Viewapplications";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/auth/:role/:action" element={<AuthPage />} />
        <Route path="/fresherinfo" element={<FreshersInfo/>} />
        <Route path="/employerinfo" element={<EmployeerInfo />} />
        <Route path="/about" element={<About/>} />
        <Route path="/signIn/signUp" element={<Home/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/employeerdashboard" element={<EmployerDashboard/>}/>
        <Route path="/fresherdashboard" element={<FresherDashboard/>}/>
        <Route path="/employerdashboard/add-job" element={<Addjobs/>}/>
        <Route path="/employerdashboard/view-jobs" element={<Viewjobs/>}/>
        <Route path="/employerdashboard/profile" element={<Employerprofile/>}/>
        <Route path="/freshdashboard/view-jobs" element={<Viewjobs/>}/>
        <Route path="/freshdashboard/profile" element={<Employerprofile/>}/>
        <Route path="/apply" element={<Apply/>}/>
        <Route path="/Freshersignup" element={<Freshersignup/>}/>
        <Route path="/Freshersignin" element={<Fresherssignin/>}/>
        <Route path="/Employersignup" element={<Employersignup/>}/>
        <Route path="/Employersignin" element={<Employersignin/>}/>
        <Route path="/Employersigninsuccessfull" element={<EmployerDashboard/>}/>
        <Route path="/gotobutton" element={<Home/>}/>
        <Route path="/viewapplications" element={<Viewapplications/>}/>
      </Routes>
    </Router>
  );
}

export default App;
