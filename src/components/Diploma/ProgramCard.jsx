import { scroll } from 'framer-motion';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProgramCard = ({ image, title, features, link, animationDirection = "right", delay = 100 }) => {
    const navigate = useNavigate()
    return (
        <div
            data-aos={`fade-${animationDirection}`}
            data-aos-delay={delay}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
        >
            <div className="h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-bold text-[#003044] mb-4">
                    {title}
                </h3>
                <ul className="space-y-3 mb-6">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-[#F1592D] mr-2">•</span>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">City & Guilds Certified</span>
                    <Link
                        to={link}
                        onClick={
                            () => { scrollTo(0,0) }
                        }
                        // {navigate({ link })), scrollTo(0,0)}
                        className="px-6 py-2 bg-[#F1592D] text-white rounded-full hover:bg-[#d84a20] transition duration-300 inline-flex items-center"
                    >
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProgramCard;
