import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const ExperienceCard = ({ role, company, location, duration, description, color }: any) => (
  <div className={`bg-white border-4 border-black rounded-3xl p-6 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative overflow-hidden`}>
    
    <div className={`absolute top-0 left-0 right-0 h-4 ${color} border-b-4 border-black`}></div>
    
    <div className="mt-4 mb-4">
        <h3 className="text-2xl font-shrikhand">{role}</h3>
        <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2 mt-1">
            <FaBriefcase className="text-custom-red" /> {company}
        </h4>
    </div>

    <div className="flex flex-wrap gap-4 mb-4 text-sm font-bold font-mono">
        <span className="bg-gray-100 border border-black px-3 py-1 rounded-md flex items-center gap-2">
            <FaCalendarAlt className="text-custom-blue" /> {duration}
        </span>
        <span className="bg-gray-100 border border-black px-3 py-1 rounded-md flex items-center gap-2">
            <FaMapMarkerAlt className="text-custom-green" /> {location}
        </span>
    </div>

    <ul className="list-disc list-inside space-y-2 text-sm font-medium border-t-2 border-black pt-4">
        {description.map((point: string, i: number) => {
            // Highlighting the title part of the description if it exists (e.g. "Voice AI Integration: ...")
            const splitPoint = point.split(': ');
            if(splitPoint.length > 1) {
                 return (
                    <li key={i}>
                        <span className="font-bold bg-yellow-100 px-1 border border-black rounded-sm">{splitPoint[0]}:</span> {splitPoint.slice(1).join(': ')}
                    </li>
                );
            }
            return <li key={i}>{point}</li>;
        })}
    </ul>
  </div>
);

const Experience = () => {
    const experiences = [
      {
        role: "AI Automation Developer",
        company: "Nexvora Outsourcing",
        location: "Remote",
        duration: "April 2025 – Present",
        color: "bg-custom-blue",
        description: [
          "Working on n8n and many other tools for automations along side coding tools to create client specific automations.",
          "Created an Personalized Email outreach system as well as Lead Generation system with over 1000 outreach in a day."
        ]
      },
      {
        role: "AI/ML Intern",
        company: "Smart Technology India",
        location: "Vadodara, Gujarat",
        duration: "Dec 2025 – April 2026",
        color: "bg-custom-purple", 
        description: [
          "Architected a Multi-Agent AI System: Engineered a sophisticated WhatsApp-integrable AI agent using LangGraph and Langchain to automate inbound and outbound sales workflows, combining rule-based logic with autonomous agentic behavior for lead generation and research.",
          "Optimized RAG & Performance: Developed an isolated RAG (Retrieval-Augmented Generation) pipeline to handle client-specific data securely, achieving a breakthrough system latency of 0.02s through advanced indexing and prompt engineering.",
          "Voice AI Integration: Deployed real-time voice synthesis and recognition agents for automated sales calling using NVIDIA PersonaPlex, streamlining the transition from text-based chatting to high-fidelity voice interactions within the CPaaS ecosystem."
        ]
      }
    ];

  return (
    <section id="experience" className="py-10 px-4 mx-auto max-w-7xl bg-custom-pink border-4 border-black rounded-3xl shadow-neo w-full">
      <div className="flex items-center gap-4 mb-10 justify-end">
        <div className="bg-custom-yellow px-8 py-3 rounded-full border-4 border-black shadow-neo transform rotate-1">
            <h2 className="text-3xl font-shrikhand text-black">EXPERIENCE 💼</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp, i) => (
            <ExperienceCard key={i} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
