// filepath: c:\Users\patil\OneDrive\Desktop\Paresh\fresher-guide\src\pages\Roadmap.js
import React from "react";
import { Link } from "react-router-dom";

const roadmapCards = [
  { 
    id: "web-developer",
    title: "Web Developer", 
    color: "blue", 
    desc: ["HTML, CSS & JavaScript basics","Frontend frameworks (React/Vue)","Backend fundamentals (Node.js)","Git & workflows"],
    paths: 3
  },
  { 
    id: "android-developer",
    title: "Android Developer", 
    color: "green", 
    desc: ["Java/Kotlin","Android Studio & SDK","UI with Compose","API integration"],
    paths: 3
  },
  { 
    id: "aiml-engineer",
    title: "AI/ML Engineer", 
    color: "purple", 
    desc: ["Python & data structures","Statistics & probability","ML libraries","Model deployment"],
    paths: 3
  },
  { 
    id: "embedded-developer",
    title: "Embedded Developer", 
    color: "amber", 
    desc: ["C/C++","Microcontroller basics","Digital electronics","RTOS fundamentals"],
    paths: 3
  }
];

export default function Roadmap() {
  return (
    <section className="py-16 px-4 bg-white" id="roadmap">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Career Roadmaps</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Pick a track and follow the roadmap to build projects and skills.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapCards.map((r) => (
            <div key={r.title} className={`p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-${r.color}-200 bg-gradient-to-br from-${r.color}-50 to-${r.color}-100`}>
              <div className="flex justify-center mb-4">
                <span className="material-symbols-outlined text-4xl text-${r.color}-500">code</span>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-3">{r.title}</h3>
              <ul className="space-y-2 text-gray-600">
                {r.desc.map((d,i) => (
                  <li key={i} className="flex items-center">
                    <span className={`material-symbols-outlined text-${r.color}-500 mr-2 text-sm`}>check_circle</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-2">
                <div className="text-xs text-gray-500 text-center">
                  {r.paths} specialization paths available
                </div>
                <Link 
                  to={`/roadmap/${r.id}`}
                  className={`block w-full py-2 text-white rounded-lg transition-colors font-medium text-center bg-${r.color}-500 hover:bg-${r.color}-600`}
                >
                  View Detailed Roadmap
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}