import React, { useState, useEffect } from 'react';
import diplomaData from '../../datas/Diploma/diploma';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components
import HeroSection from '../../components/Diploma/HeroSection';
import Breadcrumb from '../../components/Diploma/Breadcrumb';
import ProgramNavigation from '../../components/Diploma/ProgramNavigation';
import ProgramList from '../../components/Diploma/ProgramList';
import WhyMVIC from '../../components/Diploma/WhyMVIC';
import AdditionalPrograms from '../../components/Diploma/AdditionalPrograms';
import Benefits from '../../components/Diploma/Benefits';
import Certification from '../../components/Diploma/Certification';
import CTASection from '../../components/Diploma/CTASection';
import FAQsSection from './components/FAQsSection';
import Testimonials from '../../components/Diploma/Testimonails';

const Diploma = () => {
    // For FAQ accordion functionality
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // For Benefits "Read More" functionality
    const [expandedBenefits, setExpandedBenefits] = useState([]);
    
    const toggleBenefit = (id) => {
        if (expandedBenefits.includes(id)) {
            setExpandedBenefits(expandedBenefits.filter(benefitId => benefitId !== id));
        } else {
            setExpandedBenefits([...expandedBenefits, id]);
        }
    };

    // Add state for active category
    const [activeCategory, setActiveCategory] = useState('culinary');

    // Initialize AOS animation library
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            mirror: true,
            offset: 120,
        });
    }, []);

    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <HeroSection 
                title={diplomaData.title} 
                introduction={diplomaData.introduction} 
            />

            {/* Breadcrumb */}
            <Breadcrumb />

            {/* Programs Navigation Tabs */}
            <ProgramNavigation 
                activeCategory={activeCategory} 
                setActiveCategory={setActiveCategory} 
            />

            {/* Diploma Programs Section */}
            <ProgramList activeCategory={activeCategory} />

            {/* Why MVIC Section */}
            <WhyMVIC whyMVIC={diplomaData.whyMVIC} />

            {/* Additional Programs Section */}
            <AdditionalPrograms programs={diplomaData.additionalPrograms} />

            {/* Benefits Section */}
            <Benefits 
                benefits={diplomaData.benefits} 
                expandedBenefits={expandedBenefits} 
                toggleBenefit={toggleBenefit} 
            />

            {/* Testimonials Section with full custom styling */}
            <Testimonials
                // Course-specific styling based on active category
                isCulinary={activeCategory === 'culinary'}
                isPatisserie={activeCategory === 'patisserie'}
                isBarista={activeCategory === 'certified'}
                
                // Layout and container styling
                className="w-full py-16"
                containerClassName="max-w-7xl mx-auto"
                titleClassName="text-3xl font-extrabold tracking-wide mb-12"
                imageContainerClassName="overflow-hidden p-2"
                contentClassName="px-4 sm:px-8"
                
                // Colors
                backgroundColor="bg-gradient-to-b from-gray-50 to-gray-100"
                textColor="text-[#003044]"
                accentColor="text-[#F1592D]"
                
                // Content settings
                wordLimit={25}
                
                // Navigation styling
                navigationSize="h-12 w-12 sm:h-14 sm:w-14"
                
                // Image styling
                imageHeight="h-72 sm:h-96"
                imageWidth="w-full"
                imageObjectFit="object-cover object-center"
                imageRounded="rounded-xl"
                imageShadow="shadow-xl"
            />

            {/* FAQ Section */}
            <FAQsSection 
                faqs={diplomaData.faq}
                isCulinary={activeCategory === 'culinary'}
                isPatisserie={activeCategory === 'patisserie'}
                isBarista={activeCategory === 'certified'}
            />

            {/* City & Guilds Certification */}
            <Certification />

            {/* CTA Section */}
            <CTASection />
        </div>
    );
};

export default Diploma;
