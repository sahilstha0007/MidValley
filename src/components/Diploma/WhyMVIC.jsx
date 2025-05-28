import React from 'react';

const WhyMVIC = ({ whyMVIC }) => {
    return (
        <div className="relative py-24 bg-gradient-to-r from-[rgba(241,89,45,0.08)] to-[rgba(0,48,68,0.08)] overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-[#F1592D] opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#003044] opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute top-1/4 right-10 w-4 h-4 bg-[#F1592D] opacity-20 rounded-full"></div>
            <div className="absolute bottom-1/4 left-20 w-6 h-6 bg-[#003044] opacity-20 rounded-full"></div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-justify md:text-left">
                <div className="flex flex-col md:flex-row gap-16 items-center justify-center">
                    <div 
                        data-aos="fade-right"
                        data-aos-delay="200"
                        className="md:w-1/2 relative p-5"
                    >
                        {/* Decorative quote mark */}
                        <div className="absolute -top-8 -left-8 text-8xl text-[#F1592D] opacity-10 font-serif">❝</div>
                        
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#003044] mb-8 relative text-center md:text-left">
                            {whyMVIC.title}
                            <span className="absolute -bottom-4 left-0 right-0 md:right-auto md:left-0 w-16 h-1 bg-[#F1592D] mx-auto md:mx-0"></span>
                        </h2>
                        
                        <p className="text-lg text-gray-700 mb-10 leading-relaxed text-center md:text-left">
                            {whyMVIC.description}
                        </p>
                        
                        <div className="flex items-center space-x-2 justify-center md:justify-start">
                            <div className="w-8 h-8 rounded-full bg-[#F1592D] flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-xl font-bold text-[#F1592D]">{whyMVIC.callToAction}</p>
                        </div>
                    </div>
                    
                    <div 
                        data-aos="fade-left"
                        data-aos-delay="400"
                        className="md:w-1/2 relative group p-5 flex justify-center"
                    >
                        {/* Image with enhanced styling */}
                        <div className="absolute inset-0 bg-[#003044] rounded-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                        <div className="absolute inset-0 bg-[#F1592D] rounded-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                        <img 
                            src="/image/Diploma/certification.webp" 
                            alt="City & Guilds Certification" 
                            className="relative rounded-lg shadow-xl mx-auto w-full md:max-w-md transform hover:scale-105 transition-all duration-300 z-10"
                        />
                        {/* Decorative elements around the image */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-[#F1592D] opacity-70"></div>
                        <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-[#003044] opacity-70"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyMVIC;
