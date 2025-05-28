import React from 'react';

const Certification = () => {
    return (
        <div 
            data-aos="zoom-in"
            className="py-16 bg-white"
        >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-[#003044] mb-6">City & Guilds Certification</h2>
                <div 
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    className="flex justify-center mb-8"
                >
                    <img 
                        src="/image/Diploma/city_Guilds.webp" 
                        alt="City & Guilds Logo" 
                        className="h-20 object-contain animate-pulse" 
                    />
                </div>
                <p 
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="text-lg text-gray-700 max-w-3xl mx-auto mb-8"
                >
                    Our partnership with City & Guilds ensures you receive globally recognized qualifications that open doors to international career opportunities in the culinary industry.
                </p>
            </div>
        </div>
    );
};

export default Certification;
