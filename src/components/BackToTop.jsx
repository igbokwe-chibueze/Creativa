/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { animateScroll } from 'react-scroll';
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpIcon, ArrowDownIcon } from "../assets/Icons"; // Assuming you have an ArrowDownIcon as well

const svgPop = {
  hidden: { y: '100vh', scale: 0 },
  visible: { 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.9,
      scale: { duration: 1.5 },
    }
  },
  exit: {
    y: '100vh',
    scale: 0,
    transition: {
      duration: 0.9,
      scale: { duration: 1.5 },
    }
  }
};

const BackToTopOrBottom = () => {
  const [showTopButton, setShowTopButton] = useState(false);
  const [showBottomButton, setShowBottomButton] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const scrollThreshold = 70; // Define the threshold

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop <= scrollThreshold || scrollTop + clientHeight >= scrollHeight - scrollThreshold) {
        // If within the threshold at the top or near the bottom, hide both buttons
        setShowTopButton(false);
        setShowBottomButton(false);
      } else if (scrollTop > lastScrollTop) {
        // Scrolling down past the threshold
        setShowBottomButton(true);
        setShowTopButton(false);
      } else if (scrollTop < lastScrollTop) {
        // Scrolling up past the threshold
        setShowBottomButton(false);
        setShowTopButton(true);
      }

      setLastScrollTop(scrollTop);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop, scrollThreshold]);

  const options = {
    duration: 500,
    smooth: true,
  };

  const scrollToTop = () => {
    animateScroll.scrollToTop(options);
  };

  const scrollToBottom = () => {
    animateScroll.scrollToBottom(options);
  };

  return (
    <>
      <AnimatePresence>
        {showTopButton && (
          <div className="z-30 fixed right-7 tablet:right-10 bottom-5 tablet:bottom-10">
            <motion.div
              variants={svgPop}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.7 }}
            >
              <button onClick={scrollToTop}>
                <ArrowUpIcon className={" text-skin-icon2 "} />
              </button>
            </motion.div>
          </div>
        )}
        {showBottomButton && (
          <div className="z-30 fixed right-7 tablet:right-10 bottom-5 tablet:bottom-10">
            <motion.div
              variants={svgPop}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.7 }}
            >
              <button onClick={scrollToBottom}>
                <ArrowDownIcon className={" text-skin-icon2 "} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BackToTopOrBottom;
