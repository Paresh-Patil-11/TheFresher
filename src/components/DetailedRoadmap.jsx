import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { detailedRoadmaps } from '../data/roadmaps';

export default function DetailedRoadmap() {
  const { roadmapId } = useParams();
  const [selectedPath, setSelectedPath] = useState(0);
  const roadmap = detailedRoadmaps[roadmapId];

  if (!roadmap) {
    return (
      <div className="py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Roadmap Not Found</h2>
        <Link to="/roadmap" className="text-primary-600 hover:text-primary-700">
          ← Back to Roadmaps
        </Link>
      </div>
    );
  }

  const currentPath = roadmap.paths[selectedPath];

  return (
    <div className="py-8 px-4 bg-gradient-to-br from-primary-50 to-primary-100 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link to="/roadmap" className="text-primary-600 hover:text-primary-700 mb-4 inline-block">
            ← Back to Roadmaps
          </Link>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-4 mb-4">
              <span className={`material-symbols-outlined text-4xl text-${roadmap.color}-500`}>
                {roadmap.icon}
              </span>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{roadmap.title}</h1>
                <p className="text-gray-600">{roadmap.description}</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                  <span>Duration: {roadmap.duration}</span>
                  <span>•</span>
                  <span>{roadmap.paths.length} Specialization Paths</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Path Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Choose Your Specialization</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {roadmap.paths.map((path, index) => (
              <button
                key={path.id}
                onClick={() => setSelectedPath(index)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedPath === index
                    ? `border-${roadmap.color}-500 bg-${roadmap.color}-50`
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <h3 className="font-semibold text-gray-800">{path.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{path.description}</p>
                <div className="flex items-center space-x-2 mt-2 text-xs text-gray-500">
                  <span>{path.duration}</span>
                  <span>•</span>
                  <span>{path.difficulty}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Path Details */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tech Stack */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Technology Stack</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(currentPath.stack).map(([category, technologies]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-gray-700 capitalize mb-2">{category.replace(/([A-Z])/g, ' $1')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 bg-${roadmap.color}-100 text-${roadmap.color}-700 rounded-full text-sm`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Roadmap */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Learning Roadmap</h3>
              <div className="space-y-4">
                {currentPath.roadmap.map((phase, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-4">
                    <h4 className="font-semibold text-gray-800">{phase.phase}</h4>
                    <ul className="mt-2 space-y-1">
                      {phase.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-gray-600 flex items-start">
                          <span className="material-symbols-outlined text-primary-500 mr-2 text-sm mt-0.5">
                            check_circle
                          </span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Hands-on Projects</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {currentPath.projects.map((project, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <span className={`material-symbols-outlined text-${roadmap.color}-500 mt-1`}>
                        build
                      </span>
                      <div>
                        <h4 className="font-medium text-gray-800">{project}</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Project {index + 1} - Build practical skills
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Path Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Path Overview</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{currentPath.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Difficulty:</span>
                  <span className="font-medium">{currentPath.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Projects:</span>
                  <span className="font-medium">{currentPath.projects.length}</span>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Learning Resources</h3>
              
              {/* Documentation */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Documentation</h4>
                <ul className="space-y-1">
                  {currentPath.resources.documentation.map((doc, index) => (
                    <li key={index}>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 text-sm flex items-center"
                      >
                        <span className="material-symbols-outlined mr-1 text-xs">link</span>
                        {doc.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Courses */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Recommended Courses</h4>
                <ul className="space-y-1">
                  {currentPath.resources.courses.map((course, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <span className="material-symbols-outlined mr-1 text-xs mt-0.5">school</span>
                      {course}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Books */}
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Essential Books</h4>
                <ul className="space-y-1">
                  {currentPath.resources.books.map((book, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <span className="material-symbols-outlined mr-1 text-xs mt-0.5">book</span>
                      {book}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className={`bg-gradient-to-br from-${roadmap.color}-500 to-${roadmap.color}-600 rounded-xl shadow-lg p-6 text-white`}>
              <h3 className="text-lg font-bold mb-2">Ready to Start?</h3>
              <p className="text-sm opacity-90 mb-4">
                Begin your journey with {currentPath.title} and build amazing projects.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get Mentorship
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}