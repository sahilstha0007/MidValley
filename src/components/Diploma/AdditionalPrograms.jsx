import React, { useState } from 'react';

const AdditionalPrograms = ({ programs }) => {
    const [expandedPrograms, setExpandedPrograms] = useState([]);

    const toggleExpand = (index) => {
        if (expandedPrograms.includes(index)) {
            setExpandedPrograms(expandedPrograms.filter(i => i !== index));
        } else {
            setExpandedPrograms([...expandedPrograms, index]);
        }
    };

    const truncateText = (text, wordLimit = 30) => {
        const words = text.split(' ');
        if (words.length <= wordLimit) return { text, needsTruncation: false };
        
        return { 
            text: words.slice(0, wordLimit).join(' ') + '...', 
            needsTruncation: true 
        };
    };

    return (
        <div 
            data-aos="fade-up"
            className="container mx-auto py-20 px-4 sm:px-6 lg:px-8"
        >
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-14">Additional Training Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {programs.map((program, index) => {
                    const { text, needsTruncation } = truncateText(program.description);
                    const isExpanded = expandedPrograms.includes(index);
                    const displayText = isExpanded ? program.description : text;

                    return (
                        <div 
                            key={index} 
                            data-aos="flip-up"
                            data-aos-delay={index * 200}
                            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#F1592D]"
                        >
                            <h3 className="text-2xl font-bold text-[#003044] mb-2">{program.title}</h3>
                            <p className="text-lg font-semibold text-[#F1592D] mb-4">{program.subtitle}</p>
                            <p className="text-gray-700 mb-6">{displayText}</p>
                            <div className="flex justify-between items-center">
                                {needsTruncation && (
                                    <button 
                                        onClick={() => toggleExpand(index)}
                                        className="text-[#F1592D] font-medium hover:underline"
                                    >
                                        {isExpanded ? "Read Less" : "Read More"}
                                    </button>
                                )}
                                <button className="inline-flex items-center text-[#003044] font-bold hover:text-[#F1592D] transition-colors duration-300">
                                    Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AdditionalPrograms;
