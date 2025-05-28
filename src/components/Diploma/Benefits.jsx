import React from 'react';

const Benefits = ({ benefits, expandedBenefits, toggleBenefit }) => {
    // Check if a benefit is expanded
    const isBenefitExpanded = (id) => expandedBenefits.includes(id);

    return (
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 
                    data-aos="fade-down"
                    className="text-3xl sm:text-4xl font-bold text-center text-black mb-6"
                >
                    Key Benefits
                </h2>
                <p 
                    data-aos="fade-up"
                    className="text-center text-gray-600 mb-14 max-w-3xl mx-auto"
                >
                    Discover the advantages of pursuing a diploma program at Mid-Valley International College in partnership with City & Guilds
                </p>
                <div className="max-w-4xl mx-auto space-y-12">
                    {benefits.map((benefit, index) => (
                        <div 
                            key={benefit.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="relative pl-12 border-l-4 border-[#F1592D] pb-6"
                        >
                            <div className="absolute top-0 left-[-24px] w-12 h-12 rounded-full bg-[#F1592D] flex items-center justify-center text-white text-xl font-bold shadow-lg">
                                {benefit.id}
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                                <h3 className="text-2xl font-bold text-[#003044] mb-4 border-b border-gray-200 pb-2">
                                    {benefit.title}
                                </h3>
                                <div className="relative">
                                    <div className="absolute top-0 left-0 text-6xl text-[#F1592D] opacity-10 font-serif">❝</div>
                                    <p className={`text-gray-700 pt-4 pl-6 pr-6 ${isBenefitExpanded(benefit.id) ? '' : 'line-clamp-4'} transition-all duration-300`}>
                                        {benefit.description}
                                    </p>
                                    <div className="absolute bottom-0 right-0 text-6xl text-[#F1592D] opacity-10 font-serif">❞</div>
                                </div>
                                <button 
                                    onClick={() => toggleBenefit(benefit.id)} 
                                    className="mt-4 text-[#F1592D] hover:text-[#003044] transition-colors duration-300 font-bold flex items-center"
                                >
                                    {isBenefitExpanded(benefit.id) ? 'Read Less' : 'Read More'}
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className={`h-4 w-4 ml-1 transition-transform duration-300 ${isBenefitExpanded(benefit.id) ? 'rotate-180' : ''}`}
                                        fill="none" 
                                        viewBox="0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                            <div className="absolute bottom-0 left-[-8px] w-4 h-4 rounded-full bg-white border-2 border-[#F1592D]"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Benefits;
