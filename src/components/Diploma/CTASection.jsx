import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
    return (
        <div 
            data-aos="fade-up"
            className="relative py-20 bg-[#003044] text-white overflow-hidden"
        >
            <div className="absolute inset-0 opacity-10">
                <img 
                    src="/image/Diploma/doughnutss.webp" 
                    alt="Background pattern" 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 
                    data-aos="zoom-in"
                    className="text-3xl sm:text-4xl font-bold mb-6"
                >
                    Ready to Start Your Culinary Journey?
                </h2>
                <p 
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-lg text-gray-100 max-w-3xl mx-auto mb-8"
                >
                    Take the first step toward a successful culinary career with internationally recognized qualifications from City & Guilds at Mid-Valley International College.
                </p>
                <div 
                    data-aos="zoom-in"
                    data-aos-delay="400"
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <Link to="/EnquiryForm" className="px-8 py-4 bg-[#F1592D] text-white rounded-full hover:bg-[#d84a20] transition duration-300 transform hover:scale-105 shadow-lg text-lg font-bold animate-bounce">
                        Apply Now
                    </Link>
                    <Link to="/Contact" className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#003044] transition duration-300 transform hover:scale-105 shadow-lg text-lg font-bold">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CTASection;
