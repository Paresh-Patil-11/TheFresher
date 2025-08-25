// filepath: c:\Users\patil\OneDrive\Desktop\Paresh\fresher-guide\src\pages\About.js
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="py-16 px-4 bg-white" id="about">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1738094060048-a4247139d866?q=80&w=1080" alt="Paresh - Career Mentor" className="rounded-xl shadow-xl" />
            <div className="absolute -bottom-5 -right-5 bg-primary-500 text-white px-6 py-3 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <span className="font-medium">5+ Years Experience</span>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Paresh</h2>
            <p className="text-gray-600 mb-4">Hi! I'm Paresh, a technology enthusiast and career mentor helping freshers navigate tech careers.</p>
            <p className="text-gray-600 mb-6">With 5+ years across web, AI/ML and embedded systems, I've guided many graduates to jobs.</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-primary-500 mt-1">school</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Education</h3>
                  <p className="text-gray-600">B.Tech Computer Science, M.Tech AI & ML</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-primary-500 mt-1">work</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Experience</h3>
                  <p className="text-gray-600">Senior Developer and Career Mentor</p>
                </div>
              </div>
            </div>
            <Link to="/contact" className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg">Connect With Me</Link>
          </div>
        </div>
      </div>
    </section>
  );
}