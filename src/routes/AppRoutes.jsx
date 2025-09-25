import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Services from "../pages/Services";
import Features from "../pages/Features";
import Documents from "../pages/Documents";
import ParentPortal from "../pages/ParentPortal";
import Accounts from "../pages/Accounts";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/services" element={<Services />} />
        <Route path="documents" element={<Documents />} />
        <Route path="parent-portal" element={<ParentPortal />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
