import React from 'react';
import ProgramCard from './ProgramCard';

const ProgramList = ({ activeCategory }) => {
    return (
        <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {activeCategory === 'culinary' && (
                    <>
                        <ProgramCard
                            image="/image/Diploma/front.webp"
                            title="Diploma in food preparation & Culinary arts - Level 2"
                            features={[
                                "Comprehensive program covering culinary fundamentals",
                                "Professional kitchen techniques and practices",
                                "Food safety and hygiene principles"
                            ]}
                            link="/diploma/DiplomaInFoodPreparationCulinaryArtsLevel2"
                            animationDirection="right"
                            delay={100}
                        />
                        <ProgramCard
                            image="/image/Diploma/front2.webp"
                            title="Advance diploma in Culinary Arts and supervision - Level 3"
                            features={[
                                "Advanced culinary techniques and specialized cuisine",
                                "Kitchen management and team supervision skills",
                                "Menu planning and cost control"
                            ]}
                            link="/diploma/AdvanceDiplomaInCulinaryArtsAndSupervisionLevel3"
                            animationDirection="left"
                            delay={300}
                        />
                    </>
                )}
                {activeCategory === 'patisserie' && (
                    <>
                        <ProgramCard
                            image="/image/Diploma/front3.webp"
                            title="Diploma in Food Preparation & Culinary Arts (Patisserie) – Level 2"
                            features={[
                                "Foundation of pastry arts and techniques",
                                "Baking fundamentals and theory",
                                "Introduction to cake decoration"
                            ]}
                            link="/diploma/DiplomaInFoodPreparationCulinaryArtsPatisserieLevel2"
                            animationDirection="right"
                            delay={100}
                        />
                        <ProgramCard
                            image="/image/Diploma/front4.webp"
                            title="Diploma in Professional Patisserie and Confectionary - Level 3"
                            features={[
                                "Advanced pastry techniques and artistic presentations",
                                "Chocolate work and sugar confections",
                                "Contemporary dessert production"
                            ]}
                            link="/diploma/DiplomaInProfessionalPatisserieAndConfectionaryLevel3"
                            animationDirection="left"
                            delay={300}
                        />
                    </>
                )}
                {activeCategory === 'certified' && (
                    <>
                        <ProgramCard
                            image="/image/Diploma/front5.webp"
                            title="Certificate in Professional Barista Skills"
                            features={[
                                "Coffee preparation techniques and latte art",
                                "Espresso machine operation and maintenance",
                                "Coffee origins and flavor profiles"
                            ]}
                            link="/diploma/InternationalAwardInBaristaSkills"
                            animationDirection="right"
                            delay={100}
                        />
                        <ProgramCard
                            image="/image/Diploma/front6.webp"
                            title="IVQ Certificate in Professional Patisserie and Confectionary"
                            features={[
                                "Professional service techniques",
                                "Advanced bakery and pastry skills",
                                "Decorative confectionery techniques"
                            ]}
                            link="/diploma/IVQCertificateInProfessionalPatisserieAndConfectionary"
                            animationDirection="left"
                            delay={300}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default ProgramList;
