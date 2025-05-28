import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import testimonialsData from '../../datas/Diploma/testimonials';

// Add page-level animation variants
const pageVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.97, rotate: -3 },
  visible: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { duration: 0.8, ease: "backOut" } },
  exit: { opacity: 0, y: -60, scale: 0.97, rotate: 3, transition: { duration: 0.6, ease: "backIn" } }
};

// Use external testimonials data as default
const defaultTestimonials = testimonialsData;

const Testimonials= ({ 
  isCulinary, 
  isPatisserie, 
  isBarista,
  testimonials = defaultTestimonials, // Now properly defined with default value
  // Add customization props
  className = "",
  containerClassName = "",
  titleClassName = "",
  imageContainerClassName = "",
  contentClassName = "",
  backgroundColor = "bg-white",
  textColor = "text-[#003044]",
  accentColor = "text-[#F1592D]",
  wordLimit = 30,
  navigationSize = "h-9 w-9",
  // Image size and style props
  imageHeight = "h-56 sm:h-80",
  imageWidth = "w-full",
  imageObjectFit = "object-cover object-center",
  imageRounded = "rounded-2xl sm:rounded-3xl",
  imageShadow = "shadow-lg"
}) => {
  
  // Safe check - if testimonials is still undefined or empty, return early
  if (!testimonials || testimonials.length === 0) {
    console.warn("No testimonials provided to Testimonials component");
    return null;
  }

  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
    setExpanded(false);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setExpanded(false);
  };

  const isActive = (index) => {
    return index === active;
  };

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  // Helper to get truncated text
  const getTruncatedWords = (text, wordLimit = 30) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return { truncated: false, text };
    return {
      truncated: true,
      text: words.slice(0, wordLimit).join(" "),
      rest: words.slice(wordLimit).join(" "),
    };
  };

  return (
    <>
      <motion.div
        className={`${backgroundColor} mt-4 sm:mt-24 py-6 sm:py-16 lg:py-20 relative overflow-hidden ${className}`}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        variants={pageVariants}
      >
        <h3 className={`text-xl sm:text-2xl font-bold text-center ${textColor} mb-6 sm:mb-8 relative z-10 ${titleClassName}`}>
          What People Say About City and Guilds
        </h3>

        {/* Animated Testimonials */}
        <div className={`relative flex flex-col md:grid md:grid-cols-2 gap-8 sm:gap-20 px-2 sm:px-10 lg:px-20 relative z-10 ${containerClassName}`}>
          <div className={imageContainerClassName}>
            <div className={`relative ${imageHeight} ${imageWidth}`}>
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : randomRotateY(),
                      zIndex: isActive(index)
                        ? 40
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className={`${imageObjectFit} ${imageRounded} ${imageShadow} h-full w-full`}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className={`flex flex-col justify-between py-2 sm:py-4 ${contentClassName}`}>
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h3 className={`text-lg sm:text-2xl font-bold ${textColor}`}>
                {testimonials[active].name}
              </h3>
              <p className={`text-xs sm:text-sm ${accentColor} font-medium`}>
                {testimonials[active].title}
              </p>
              <motion.p className="mt-4 sm:mt-8 text-base sm:text-lg text-gray-700 break-words">
                {
                  (() => {
                    const desc = testimonials[active].description;
                    const { truncated, text, rest } = getTruncatedWords(desc, wordLimit);
                    if (!truncated || expanded) {
                      return (
                        <>
                          {desc.split(" ").map((word, index) => (
                            <motion.span
                              key={index}
                              initial={{
                                filter: "blur(10px)",
                                opacity: 0,
                                y: 5,
                              }}
                              animate={{
                                filter: "blur(0px)",
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                duration: 0.2,
                                ease: "easeInOut",
                                delay: 0.02 * index,
                              }}
                              className="inline-block"
                            >
                              {word}&nbsp;
                            </motion.span>
                          ))}
                          {truncated && (
                            <button
                              className={`ml-2 ${accentColor} underline text-sm`}
                              onClick={() => setExpanded(false)}
                            >
                              Read less
                            </button>
                          )}
                        </>
                      );
                    } else {
                      return (
                        <>
                          {text.split(" ").map((word, index) => (
                            <motion.span
                              key={index}
                              initial={{
                                filter: "blur(10px)",
                                opacity: 0,
                                y: 5,
                              }}
                              animate={{
                                filter: "blur(0px)",
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                duration: 0.2,
                                ease: "easeInOut",
                                delay: 0.02 * index,
                              }}
                              className="inline-block"
                            >
                              {word}&nbsp;
                            </motion.span>
                          ))}
                          <span>... </span>
                          <button
                            className={`${accentColor} underline text-sm`}
                            onClick={() => setExpanded(true)}
                          >
                            Read more
                          </button>
                        </>
                      );
                    }
                  })()
                }
              </motion.p>
            </motion.div>
            <div className="flex gap-4 pt-8 sm:pt-12 md:pt-0">
              <button
                onClick={handlePrev}
                className={`group/button flex items-center justify-center rounded-full bg-[#003044] hover:bg-[#00435e] transition-all duration-300 shadow-md ${navigationSize}`}
              >
                <IconArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white transition-transform duration-300 group-hover/button:translate-x-[-2px]" />
              </button>
              <button
                onClick={handleNext}
                className={`group/button flex items-center justify-center rounded-full bg-[#F1592D] hover:bg-[#f36a42] transition-all duration-300 shadow-md ${navigationSize}`}
              >
                <IconArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-white transition-transform duration-300 group-hover/button:translate-x-[2px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Add global animations to the document */}
        <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
      `}</style>

      </motion.div>
      <div className='m-20'>
      </div>

    </>
  );
};

export default Testimonials;