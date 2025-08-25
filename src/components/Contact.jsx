// filepath: c:\Users\patil\OneDrive\Desktop\Paresh\fresher-guide\src\pages\Contact.js
import React from "react";

export default function Contact() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary-50 to-primary-100" id="contact">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">Have questions about your career path? Need personalized guidance? Reach out.</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <span className="material-symbols-outlined text-primary-500">email</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">paresh@fresherguide.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <span className="material-symbols-outlined text-primary-500">phone</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <span className="material-symbols-outlined text-primary-500">location_on</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Location</h3>
                  <p className="text-gray-600">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex space-x-4">
              <a href="#" className="bg-white p-3 rounded-full shadow-md hover:scale-110 transition-transform">
                <i className="fa-brands fa-linkedin text-blue-600 text-xl"></i>
              </a>
              <a href="#" className="bg-white p-3 rounded-full shadow-md hover:scale-110 transition-transform">
                <i className="fa-brands fa-github text-gray-800 text-xl"></i>
              </a>
            </div>
          </div>
          <form className="bg-white p-8 rounded-xl shadow-lg">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                <input id="name" type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                <input id="email" type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="Your email" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">Subject</label>
                <select id="subject" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500">
                  <option value="">Select a subject</option>
                  <option value="career">Career Guidance</option>
                  <option value="roadmap">Roadmap Query</option>
                  <option value="mentorship">Mentorship Request</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="Your message" />
              </div>
              <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}