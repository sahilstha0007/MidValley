import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const getFadeVariant = () => ({
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      type: 'spring', 
      stiffness: 50, 
      damping: 20, 
      duration: 1.2,
      staggerChildren: 0.3
    }
  }
});

const textVariants = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: custom * 0.2,
      duration: 0.8,
      type: "spring",
      stiffness: 60
    }
  })
};

const NAVBAR_HEIGHT = 72;

const FrontImage = ({ src, alt, title, description }) => {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Reduce parallax effect on mobile for better performance
  const y = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "30%" : "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, isMobile ? 1.05 : 1.1]);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.onerror = () => console.error('Failed to load image');
    img.src = src;
  }, [src]);

  return (
    <>
    <motion.div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{
        height: isMobile ? "60vh" : "70vh", // Reduced height on mobile
        minHeight: isMobile ? "280px" : "320px",
        zIndex: 1,
        overflow: "hidden"
      }}
      initial="hidden"
      animate="visible"
      variants={getFadeVariant()}
    >
      {/* Main Image with Parallax */}
      <motion.div 
        className="absolute inset-0 will-change-transform overflow-hidden"
        style={{ y, scale, zIndex: 1 }}
      >
        <div className="relative w-full h-full overflow-hidden">
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-pulse" />
          )}
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-opacity duration-1000 object-center"
            loading={isMobile ? "lazy" : "eager"}
            style={{
              minHeight: isMobile ? "100%" : "180px",
              maxHeight: "100vh",
              width: "100%",
              objectFit: "cover",
              objectPosition: isMobile ? "center" : "center"
            }}
          />
          {/* Dark overlay for better text contrast - darker on mobile */}
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
      </motion.div>

      {/* Content Container */}
      {(title || description) && (
        <motion.div
          className="absolute inset-0 z-30 flex items-center justify-center overflow-hidden"
          style={{ opacity }}
        >
          <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-20 text-center overflow-hidden">
            <motion.div
              className="relative w-full max-w-xs xs:max-w-sm sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto"
              variants={getFadeVariant()}
            >
              {title && (
                <motion.div className="mb-4 sm:mb-6 md:mb-8">
                  <motion.h1
                    className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-tight break-words"
                    variants={textVariants}
                    custom={1}
                    style={{
                      textShadow: "0 4px 16px rgba(0,0,0,0.8)",
                      letterSpacing: "-0.01em",
                      wordBreak: "break-word",
                      padding: isMobile ? "0 0.5rem" : "0"
                    }}
                  >
                    {title}
                  </motion.h1>
                  {/* Accent Line */}
                  <motion.div
                    className="h-1 xs:h-1.5 bg-[#F1592D] mx-auto mt-3 sm:mt-4 md:mt-6 shadow"
                    initial={{ width: 0 }}
                    animate={{ width: isMobile ? "40px" : "80px" }}
                    transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
                  />
                </motion.div>
              )}
              {description && (
                <motion.div
                  className="mb-4 sm:mb-6 md:mb-8"
                  variants={textVariants}
                  custom={2}
                >
                  <div
                    className="text-sm xs:text-base sm:text-xl md:text-2xl text-white max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto font-medium leading-relaxed tracking-wide"
                    style={{
                      textShadow: "0 2px 12px rgba(0,0,0,0.8)",
                      padding: isMobile ? "0 0.75rem" : "0"
                    }}
                  >
                    {description}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.div>
    </>
    
  );
};

export default FrontImage;