// filepath: c:\Users\patil\OneDrive\Desktop\Paresh\fresher-guide\src\pages\Home.js
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="py-16 px-4" id="home">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Welcome to the <span className="text-primary-600">Fresher's Guide</span>
            </h2>
            <p className="text-lg text-gray-600">
              Starting your career journey can be both exciting and overwhelming. We're here to help.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-primary-500 mt-1">trending_up</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Common Challenges</h3>
                  <p className="text-gray-600">Skill gaps, job market competition, and interview anxiety.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-primary-500 mt-1">task_alt</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Necessary Actions</h3>
                  <p className="text-gray-600">Build a portfolio, network, and update your skills.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-primary-500 mt-1">map</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Career Planning</h3>
                  <p className="text-gray-600">Set goals, create a roadmap, and seek mentorship.</p>
                </div>
              </div>
            </div>
            <Link to="/roadmap" className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              Explore Roadmaps
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1659080907111-7c726e435a28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Freshers starting their career journey"
              className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}