// filepath: c:\Users\patil\OneDrive\Desktop\Paresh\fresher-guide\src\components\Footer.js
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="material-symbols-outlined text-primary-400">school</span>
              <h3 className="text-xl font-bold">FresherGuide</h3>
            </div>
            <p className="text-gray-300">Helping freshers navigate their career path.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-primary-400">Home</a></li>
              <li><a href="/roadmap" className="text-gray-300 hover:text-primary-400">Career Roadmaps</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-primary-400">Contact</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-primary-400">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-3">Get the latest career tips and resources.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-lg focus:outline-none text-gray-800 w-full" />
              <button className="bg-primary-600 hover:bg-primary-700 px-4 rounded-r-lg transition-colors">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2023 FresherGuide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}