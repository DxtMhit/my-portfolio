import React from 'react';
import { FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';

const CertificateCard = ({ title, issuer, date, link, color }: any) => (
  <div className={`bg-white border-4 border-black rounded-3xl p-6 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative overflow-hidden flex flex-col h-full`}>
    
    <div className={`absolute top-0 left-0 right-0 h-4 ${color} border-b-4 border-black`}></div>
    
    <div className="mt-4 flex-grow">
      <div className="flex justify-between items-start mb-4 gap-4">
        <h3 className="text-xl font-bold leading-snug">{title}</h3>
        <FaCertificate className={`text-3xl flex-shrink-0 ${color.replace('bg-', 'text-')}`} />
      </div>
      <p className="text-sm font-bold text-gray-600 mb-6 uppercase tracking-wider">
        {issuer}
      </p>
    </div>

    <div className="flex items-center justify-between mt-auto pt-4 border-t-4 border-black border-dashed">
      <span className="bg-gray-100 border border-black px-2 py-1 text-xs font-bold font-mono">
        {date}
      </span>
      
      {link && (
        <a href={link} target="_blank" rel="noreferrer" className="bg-black text-white px-4 py-2 font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors border-2 border-black hover:text-custom-yellow rounded-lg">
          View <FaExternalLinkAlt className="text-xs" />
        </a>
      )}
    </div>
  </div>
);

const Certificates = () => {
  // Placeholder data - replace with your actual certificates
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "Aug 2025",
      color: "bg-custom-yellow", 
      link: "#", 
    },
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "Jan 2025",
      color: "bg-custom-blue",
      link: "#", 
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "Nov 2024",
      color: "bg-custom-pink",
      link: "#", 
    }
  ];

  return (
    <section id="certificates" className="py-10 px-4 max-w-7xl mx-auto bg-custom-purple border-4 border-black rounded-3xl shadow-neo w-full mt-10">
      <div className="flex items-center gap-4 mb-10 justify-center">
        <div className="bg-white px-8 py-3 border-4 border-black shadow-neo rounded-full transform -rotate-1">
            <h2 className="text-3xl font-shrikhand text-black">CERTIFICATES 📜</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, i) => (
            <CertificateCard key={i} {...cert} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
