import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ title, introduction }) => {
    return (
        <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src="/image/Diploma/front.webp" 
                    alt="Culinary education" 
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-[#003044] opacity-70"></div>
            </div>
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 
                    data-aos="fade-down"
                    data-aos-delay="200"
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight"
                >
                    {title}
                </h1>
                <p 
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="text-xl text-white mb-10"
                >
                    {introduction}
                </p>
                <div 
                    data-aos="zoom-in"
                    data-aos-delay="600"
                    className="flex flex-wrap justify-center gap-5"
                >
                    <Link to="/EnquiryForm" className="px-8 py-4 bg-[#F1592D] text-white rounded-full hover:bg-[#d84a20] transition duration-300 transform hover:scale-105 shadow-lg">
                        Apply Now
                    </Link>
                    <Link to="/Contact" className="px-8 py-4 bg-white text-[#003044] rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
