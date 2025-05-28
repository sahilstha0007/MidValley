import React from 'react';

const ProgramNavigation = ({ activeCategory, setActiveCategory }) => {
    return (
        <div 
            data-aos="fade-up" 
            className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12"
        >
            <div className="flex flex-wrap justify-center items-center gap-5 mb-10">
                <button 
                    onClick={() => setActiveCategory('culinary')}
                    className={`px-8 py-3 rounded-full flex items-center text-center transition duration-300 ${activeCategory === 'culinary' ? 'bg-[#F1592D] text-white shadow-md animate-pulse' : 'bg-white text-[#F1592D] border border-[#F1592D] hover:bg-[#F1592D] hover:text-white hover:shadow-lg'}`}
                >
                    Culinary Art
                </button>
                <button 
                    onClick={() => setActiveCategory('patisserie')}
                    className={`px-8 py-3 rounded-full flex items-center text-center transition duration-300 ${activeCategory === 'patisserie' ? 'bg-[#F1592D] text-white shadow-md animate-pulse' : 'bg-white text-[#F1592D] border border-[#F1592D] hover:bg-[#F1592D] hover:text-white hover:shadow-lg'}`}
                >
                    Patisserie
                </button>
                <button 
                    onClick={() => setActiveCategory('certified')}
                    className={`px-8 py-3 rounded-full flex items-center text-just transition duration-300 ${activeCategory === 'certified' ? 'bg-[#F1592D] text-white shadow-md animate-pulse' : 'bg-white text-[#F1592D] border border-[#F1592D] hover:bg-[#F1592D] hover:text-white hover:shadow-lg'}`}
                >
                    Certified Courses
                </button>
            </div>
        </div>
    );
};

export default ProgramNavigation;
