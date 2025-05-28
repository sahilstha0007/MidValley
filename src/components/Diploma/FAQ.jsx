import React from 'react';
import { motion } from 'framer-motion';

const FAQ = ({ activeIndex, toggleFAQ }) => {
    const faqs = [
        {
            question: "Is City & Guilds certification internationally recognized?",
            answer: "Absolutely! City & Guilds qualifications are globally recognized and accepted. These credentials are highly valued by employers around the world. With this qualification, you can confidently pursue career opportunities both domestically and internationally."
        },
        {
            question: "What career opportunities are available after completing these courses?",
            answer: "Graduates have a wide range of career opportunities including professional chef, pastry chef, kitchen manager, food consultant, restaurant owner, culinary instructor, and more. Many of our graduates work in prestigious hotels and restaurants worldwide."
        },
        {
            question: "Do the programs include internship opportunities?",
            answer: "Yes, our programs include valuable internship placements in Nepal and internationally. We provide 407 Training Visa for Australia and opportunities in the UAE, UK, and other Middle Eastern countries."
        },
        {
            question: "What are the eligibility requirements for enrollment?",
            answer: "Most programs require students to be at least 16 years of age with a minimum educational qualification. Specific requirements vary by program level. Please contact our admissions office for detailed information about each course."
        }
    ];

    return (
        <div 
            className="bg-gray-50 py-20"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-bold text-center text-black mb-14"
                >
                    Frequently Asked Questions
                </motion.h2>
                
                <div className="max-w-3xl mx-auto space-y-5">
                    {faqs.map((faq, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                            whileHover={{ scale: 1.01 }}
                        >
                            <motion.button 
                                className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold bg-[#003044] text-white"
                                onClick={() => toggleFAQ(index)}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>{faq.question}</span>
                                <motion.span
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </motion.span>
                            </motion.button>
                            
                            <motion.div 
                                initial={false}
                                animate={{ 
                                    height: activeIndex === index ? "auto" : 0,
                                    opacity: activeIndex === index ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 py-4 text-gray-700 bg-white">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
