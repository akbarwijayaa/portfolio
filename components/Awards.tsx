"use client";

import { useState } from "react";

export default function Awards() {
  const [showAll, setShowAll] = useState(false);

  const awards = [
    {
      title: "IncuBase (Project Incubator)",
      organization: "Base Network",
      achievement: "3rd Place",
      team: "Three person team",
      date: "Aug 2025",
    },
    {
      title: "Base Batch APAC 001 Hackathon",
      organization: "Devfolio",
      achievement: "1st Place - Stablecoins Track",
      team: "Two person team",
      date: "Apr 2025",
    },
    {
      title: "Safe Agentathon Hackathon",
      organization: "Devfolio",
      achievement: "1st Place - Automate Integrations Track, 2nd Place - Best in Class, AWS Prize",
      team: "Two person team",
      date: "Feb 2025",
    },
    {
      title: "ETHGlobal AI Agentic Hackathon",
      organization: "ETHGlobal",
      achievement: "Top 12",
      team: "Two person team",
      date: "Feb 2025",
    },
    {
      title: "AVSThon Hackathon",
      organization: "Devfolio",
      achievement: "10th Place",
      team: "Three person team",
      date: "Oct 2024",
    },
    {
      title: "LKS Artificial Intelligence Competition",
      organization: "Central Java Province",
      achievement: "1st Place - Klaten Regency, 2nd Place - Central Java Province",
      team: "Individual",
      date: "Mar 2021",
    },
    {
      title: "LKS Artificial Intelligence Competition",
      organization: "Central Java Province",
      achievement: "1st Place - Klaten Regency, 2nd Place - Central Java Province",
      team: "Individual",
      date: "May 2020",
    },
  ];

  const displayedAwards = showAll ? awards : awards.slice(0, 3);

  return (
    <section id="awards" className="py-32 px-6 border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-medium mb-16 text-white">Awards & Achievements</h2>

        <div className="space-y-8">
          {displayedAwards.map((award, index) => (
            <div key={index} className="group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-8 border-b border-gray-900">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white mb-1">{award.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{award.organization}</p>
                  <p className="text-gray-400 mb-2">{award.achievement}</p>
                  <p className="text-sm text-gray-500">{award.team}</p>
                </div>
                <div className="md:text-right">
                  <span className="text-sm text-gray-500">{award.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {awards.length > 3 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 border border-gray-800 text-white hover:border-gray-600 transition-colors"
            >
              {showAll ? "Show Less" : `Show More (${awards.length - 3} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
