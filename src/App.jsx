import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast"; // ← Import Toaster

// Layouts
import Header from "/src/components/Header.jsx";
import Footer from "/src/components/Footer.jsx";

// Pages
import LandingPage from "/src/components/LandingPage.jsx";
import About from "/src/components/About.jsx";
import Contact from "/src/components/Contact.jsx";
import Learn from "/src/components/Learn.jsx";
import PrivacyPolicy from "/src/components/PrivacyPolicy.jsx";
import Terms from "/src/components/Terms.jsx";



function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const closeModals = () => setActiveModal(null);

  const onSignInClick = () => setActiveModal("signin");
  const onSignUpClick = () => setActiveModal("signup");
  const onForgotPasswordClick = () => setActiveModal("forgotPassword");

  const handleLogin = () => {
    localStorage.setItem("loggedIn", "true");
    setIsLoggedIn(true);
    closeModals();
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Header
        onSignInClick={onSignInClick}
        onSignUpClick={onSignUpClick}
        onLogout={handleLogout}
        isLoggedIn={isLoggedIn}
      />

      <Routes>
        <Route path="/" element={<LandingPage onStartAssessmentClick={onSignInClick} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      <Footer />

      {/* Toast notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      
    </Router>
  );
}

export default App;
