// filepath: c:\Users\patil\OneDrive\Desktop\Paresh\fresher-guide\src\components\Header.js
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-20">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="material-symbols-outlined text-primary-500">school</span>
          <h1 className="text-2xl font-bold text-primary-600">FresherGuide</h1>
        </div>
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li><Link to="/" className="hover:text-primary-500">Home</Link></li>
          <li><Link to="/roadmap" className="hover:text-primary-500">Roadmap</Link></li>
          <li><Link to="/contact" className="hover:text-primary-500">Contact</Link></li>
          <li><Link to="/about" className="hover:text-primary-500">About</Link></li>
        </ul>

        <details className="md:hidden relative">
          <summary className="list-none cursor-pointer">menu</summary>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-30">
            <Link to="/" className="block px-4 py-2 hover:bg-primary-100">Home</Link>
            <Link to="/roadmap" className="block px-4 py-2 hover:bg-primary-100">Roadmap</Link>
            <Link to="/contact" className="block px-4 py-2 hover:bg-primary-100">Contact</Link>
            <Link to="/about" className="block px-4 py-2 hover:bg-primary-100">About</Link>
          </div>
        </details>
      </nav>
    </header>
  );
}