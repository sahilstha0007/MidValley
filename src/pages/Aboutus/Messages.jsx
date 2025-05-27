import React, { useEffect, useRef, useState } from 'react';
import messagesData from '../../datas/Messages/messages';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import FrontImage from '../../components/FrontImage';

// Animation variants for scroll direction
const fadeInUp = {
  hidden: { opacity: 0, y: 60, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, type: 'spring', stiffness: 60, damping: 18 } }
};
const fadeInDown = {
  hidden: { opacity: 0, y: -60, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, type: 'spring', stiffness: 60, damping: 18 } }
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.92, rotate: -2 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.7, type: 'spring', stiffness: 80, damping: 14 } }
};

const Messages = () => {
  const parallaxRef = useRef(null);
  const [scrollDir, setScrollDir] = useState('down');``
  const lastY = useRef(0);


  // Helper to pick animation variant based on scroll direction
  const getFadeVariant = () => (scrollDir === 'down' ? fadeInUp : fadeInDown);

  return (
    <>
    {/* Stylish hero section */}
      {/* Front Image */}
  
      <FrontImage
        src={messagesData.frontImage}
        alt={messagesData.title}
        title={messagesData.title}
      
        description="Insights and vision from the leadership guiding our journey"
      />
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f0fdfa] relative overflow-hidden "
      initial="hidden"
      animate="visible"
      variants={getFadeVariant()}
      transition={{ duration: 0.7 }}
    >
      {/* Animated decorative elements */}
     

      

      {/* Breadcrumb Section - Modern Style */}
      <motion.div
        className="bg-gradient-to-r from-[#003044] to-[#0f4c5c] text-white py-4 text-center relative overflow-hidden shadow"
        initial="hidden"
        animate="visible"
        variants={getFadeVariant()}
        transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-sm tracking-wide font-medium">
            Home &gt; <span className="text-[#F1592D] font-bold">{messagesData.title}</span>
          </p>
        </div>
      </motion.div>

      <div className="m-10 md:m-20"></div>

      {/* Messages Section */}
      <motion.div
        className="backdrop-blur-md bg-white/80 mx-4 sm:mx-20 my-4 mt-10 p-8 rounded-3xl shadow-2xl relative border border-[#e0e7ff]"
        initial="hidden"
        animate="visible"
        variants={getFadeVariant()}
        transition={{ duration: 0.8, type: 'spring', stiffness: 60, damping: 18 }}
      >
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#003044] rounded-tl-3xl"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#003044] rounded-tr-3xl"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#003044] rounded-bl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#003044] rounded-br-3xl"></div>

        {/* Chairperson Message - initial animation only */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8 relative"
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
        >
          <div className="flex-1 lg:pr-20">
            <h3 className="text-2xl font-bold text-black mb-4 relative">
              <span className="inline-block w-10 h-1 bg-[#F1592D] absolute -left-4 top-1/2 transform -translate-y-1/2"></span>
              {messagesData.entries[0].title}
            </h3>
            <div className="relative">
              <FaQuoteLeft className="text-[#003044] opacity-20 text-4xl absolute -top-6 -left-6" />
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-justify pl-4">
                {messagesData.entries[0].text}
              </p>
              <FaQuoteRight className="text-[#003044] opacity-20 text-4xl absolute -bottom-6 -right-6" />
            </div>
            <div className="mt-8 pl-4 border-l-4 border-[#F1592D]">
              <p className="font-bold">{messagesData.entries[0].name}</p>
              <p className="text-sm text-gray-600">{messagesData.entries[0].position}</p>
            </div>
          </div>
          <motion.div
            className="flex-shrink-0 w-full lg:w-1/3 transition-all duration-300 hover:shadow-2xl rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.92, rotate: 4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
          >
            <img
              src={messagesData.entries[0].image}
              alt="Chairperson"
              className="w-full h-auto rounded-2xl transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </motion.div>

        {/* Decorative divider */}
        <div className="my-16 flex items-center justify-center">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-1/3"></div>
          <div className="mx-4 text-[#003044] text-xl animate-pulse">●</div>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-1/3"></div>
        </div>

        {/* Managing Director Message - scroll animation */}
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center gap-8 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scaleIn}
        >
          <motion.div
            className="flex-shrink-0 w-full lg:w-1/3 transition-all duration-300 hover:shadow-2xl rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
          >
            <img
              src={messagesData.entries[1].image}
              alt="Managing Director"
              className="w-full h-auto rounded-2xl transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
          <div className="flex-1 lg:pl-20">
            <h3 className="text-2xl font-bold text-black mb-4 relative">
              <span className="inline-block w-10 h-1 bg-[#F1592D] absolute -left-4 top-1/2 transform -translate-y-1/2"></span>
              {messagesData.entries[1].title}
            </h3>
            <div className="relative">
              <FaQuoteLeft className="text-[#003044] opacity-20 text-4xl absolute -top-6 -left-6" />
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-justify pl-4">{messagesData.entries[1].text}</p>
              <FaQuoteRight className="text-[#003044] opacity-20 text-4xl absolute -bottom-6 -right-6" />
            </div>
            <div className="mt-8 pl-4 border-l-4 border-[#F1592D]">
              <p className="font-bold">{messagesData.entries[1].name}</p>
              <p className="text-sm text-gray-600">{messagesData.entries[1].position}</p>
            </div>
          </div>
        </motion.div>

        {/* Decorative divider */}
        <div className="my-16 flex items-center justify-center">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-1/3"></div>
          <div className="mx-4 text-[#003044] text-xl animate-pulse">●</div>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-1/3"></div>
        </div>

        {/* CEO Message - scroll animation */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scaleIn}
        >
          <div className="flex-1 lg:pr-20">
            <h3 className="text-2xl font-bold text-black mb-4 relative">
              <span className="inline-block w-10 h-1 bg-[#F1592D] absolute -left-4 top-1/2 transform -translate-y-1/2"></span>
              {messagesData.entries[2].title}
            </h3>
            <div className="relative">
              <FaQuoteLeft className="text-[#003044] opacity-20 text-4xl absolute -top-6 -left-6" />
              <div className="text-gray-700 leading-relaxed pl-4">
                {messagesData.entries[2].text.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
              <FaQuoteRight className="text-[#003044] opacity-20 text-4xl absolute -bottom-6 -right-6" />
            </div>
            <div className="mt-8 pl-4 border-l-4 border-[#F1592D]">
              <p className="font-bold">{messagesData.entries[2].name}</p>
              <p className="text-sm text-gray-600">{messagesData.entries[2].position}</p>
            </div>
          </div>
          <motion.div
            className="flex-shrink-0 w-full lg:w-1/3 transition-all duration-300 hover:shadow-2xl rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
          >
            <img
              src={messagesData.entries[2].image}
              alt="CEO"
              className="w-full h-auto rounded-2xl transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative bottom wave */}
      <motion.div
        className="w-full h-16 bg-[#003044] opacity-10 mt-20"
        initial="hidden"
        animate="visible"
        variants={getFadeVariant()}
        transition={{ duration: 1 }}
        style={{
          maskImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 1200 120\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z\"></path></svg>')",
          maskSize: "cover"
        }}
      ></motion.div>
    </motion.div>
    </>
    
  );
};

export default Messages;
