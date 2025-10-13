"use client";

import { useState } from "react";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Orbitum - Tokenized Bond RWA",
      company: "Smart Contract Project",
      description:
        "Real World Asset tokenization platform for bond securities. Built smart contracts for compliant digital bond issuance, fractional ownership, and automated coupon payments on blockchain.",
      tech: "Solidity, Foundry, OpenZeppelin, RWA",
      year: "2025-Present",
      type: "Smart Contract",
    },
    {
      title: "Tumbuh - DeFi Yield Aggregator",
      company: "Smart Contract Project",
      description:
        "DeFi yield aggregator platform for optimizing token farming strategies. Developed smart contracts for automated yield optimization and cross-platform asset management.",
      tech: "Solidity, Foundry, OpenZeppelin, DeFi",
      year: "2025-Present",
      type: "Smart Contract",
    },
    {
      title: "Notuline - AI Meeting Assistant",
      company: "PT. Nordspec Mandala Persada",
      description:
        "Built end-to-end meeting transcription application with automatic summary generation. Processes audio recordings to generate accurate transcripts and actionable meeting summaries.",
      tech: "Python, OpenAI API, Flask",
      year: "2024-2025",
      type: "AI Engineering",
    },
    {
      title: "Athenor - Document Intelligence",
      company: "PT. Nordspec Mandala Persada",
      description:
        "Developed document processing system using OpenAI API to extract key information and generate summaries from complex documents. Automated problem identification and solution recommendation.",
      tech: "Python, OpenAI API, NLP",
      year: "2024-2025",
      type: "AI Engineering",
    },
    {
      title: "Vehicle Recognition & Tracking System",
      company: "PT. Nordspec Mandala Persada",
      description:
        "Implemented car recognition models with behavior tracking capabilities. Built system to identify vehicles and analyze movement patterns for security and analytics applications.",
      tech: "Python, TensorFlow, Computer Vision",
      year: "2024",
      type: "AI Engineering",
    },
    {
      title: "Face Anti-Spoofing System",
      company: "CV. Karya Hidup Sentosa",
      description:
        "Secured face recognition system against fake face attacks. Deployed models using TFLite, TensorFlow Serving, and TensorRT for production use. Built Flask API served via Gunicorn and Nginx.",
      tech: "Python, FaceNet, TensorFlow, Docker",
      year: "2022-2024",
      type: "AI Engineering",
    },
    {
      title: "Tokoquick - E-commerce AI Features",
      company: "CV. Karya Hidup Sentosa",
      description:
        "Developed recommendation system using CountVectorizer and visual search feature using VGG19/ResNet50v2. Enhanced product discovery and user experience for online shop platform.",
      tech: "Python, TensorFlow, Flask",
      year: "2022-2024",
      type: "AI Engineering",
    },
    {
      title: "Warehouse Object Detection System",
      company: "CV. Karya Hidup Sentosa",
      description:
        "Built YOLOv5-based object detection API for automated inventory counting. Added 'Cage Wheel' detection model to existing system. Improved warehouse stock management efficiency.",
      tech: "Python, YOLOv5, Flask",
      year: "2021-2024",
      type: "AI Engineering",
    },
    {
      title: "OCR Production Number Detection",
      company: "CV. Karya Hidup Sentosa",
      description:
        "Implemented optical character recognition using CRAFT and PaddlePaddle to detect production numbers from product images. Also built COVID-19 antigen test result reader for employee health monitoring.",
      tech: "Python, CRAFT, PaddleOCR",
      year: "2021-2022",
      type: "AI Engineering",
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-32 px-6 border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-medium mb-16 text-white">Projects Experiences</h2>

        <div className="space-y-16">
          {displayedProjects.map((project, index) => (
            <div key={index} className="group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-medium text-white">{project.title}</h3>
                    <span className="text-xs px-2 py-1 border border-gray-800 text-gray-500">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{project.company}</p>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="text-sm text-gray-500">{project.tech}</p>
                </div>
                <div className="flex items-center gap-6 md:flex-col md:items-end">
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-gray-800 to-transparent" />
            </div>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 border border-gray-800 text-white hover:border-gray-600 transition-colors"
            >
              {showAll ? "Show Less" : `Show More (${projects.length - 3} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
