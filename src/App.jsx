// filepath: c:\Users\patil\OneDrive\Desktop\Paresh\fresher-guide\src\App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Roadmap from "./components/Roadmap";
import DetailedRoadmap from "./components/DetailedRoadmap";
import Contact from "./components/Contact";
import About from "./components/About";
import "./index.css";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-primary-100">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/roadmap/:roadmapId" element={<DetailedRoadmap />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}