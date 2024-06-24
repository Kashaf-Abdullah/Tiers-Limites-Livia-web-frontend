

// import "./App.css";
import "./App.css";
import HomePage from "./Pages/HomePage";
import ImpressumPage from "./Pages/ImpressumPage";
import MeineVortragsthemenPage from "./Pages/MeineVortragsthemenPage";
import Login from "./components/Admin/Login";
import Adminpage from "./components/Admin/Adminpage";
import Navbarr from "./components/Navbar";

import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import { useState } from "react";

function App() {
  // State to track if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbarr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meinevortragsthemen" element={<MeineVortragsthemenPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
   
        {/* Route to login */}
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        {/* Protected route for admin page */}
        <Route path="/admin" element={isLoggedIn ? <Adminpage /> : <Navigate to="/login" />} />
     
      </Routes>
    </Router>
  );
}

export default App;
