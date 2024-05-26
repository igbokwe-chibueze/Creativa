/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { animateScroll } from 'react-scroll';
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpIcon, ArrowDownIcon } from "../assets/Icons"; // Assuming you have an ArrowDownIcon as well

// Define animation variants for framer-motion
// This object contains different animation states for the button appearance and disappearance
const svgPop = {
  hidden: { y: '100vh', scale: 0 }, // Initial state, button is off-screen and scaled down
  visible: { 
    y: 0, // Button moves into view
    scale: 1, // Button scales up to normal size
    transition: { 
      duration: 0.9, // Animation duration for y and scale properties
      scale: { duration: 1.5 }, // Separate scale duration for a smoother effect
    }
  },
  exit: {
    y: '100vh', // Button moves off-screen
    scale: 0, // Button scales down
    transition: {
      duration: 0.9, // Animation duration for y and scale properties
      scale: { duration: 1.5 }, // Separate scale duration for a smoother effect
    }
  }
};

// Main component for "Back to Top" or "Back to Bottom" buttons
const BackToTopOrBottom = () => {
  // State to track which button to show ('top' for "Back to Top" and 'bottom' for "Back to Bottom")
  const [showButton, setShowButton] = useState(null);
  // State to track the last scroll position to determine scroll direction
  const [lastScrollTop, setLastScrollTop] = useState(0);
  // Threshold for scrolling to trigger button visibility
  const scrollThreshold = 70;
  // Threshold to hide the button when near the bottom of the page
  const bottomThreshold = 100;

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Current scroll position
      const scrollHeight = document.documentElement.scrollHeight; // Total scrollable height of the document
      const clientHeight = document.documentElement.clientHeight; // Height of the viewport

      if (scrollTop <= scrollThreshold || scrollTop + clientHeight >= scrollHeight - bottomThreshold) {
        // If the scroll position is within the top threshold or near the bottom threshold, hide both buttons
        setShowButton(null);
      } else if (scrollTop > lastScrollTop) {
        // If scrolling down past the threshold, show the "Back to Bottom" button
        setShowButton('bottom');
      } else if (scrollTop < lastScrollTop) {
        // If scrolling up past the threshold, show the "Back to Top" button
        setShowButton('top');
      }

      // Update the last scroll position
      setLastScrollTop(scrollTop);
    };

    // Attach the scroll event listener to handle scrolling
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount to prevent memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop, scrollThreshold, bottomThreshold]); // Dependencies for useEffect to re-run when these values change

  // Options for the scroll animations provided by react-scroll
  const options = {
    duration: 500, // Duration of the scroll animation in milliseconds
    smooth: true, // Smooth scrolling effect
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    animateScroll.scrollToTop(options); // Use animateScroll to scroll to the top with the specified options
  };

  // Function to scroll to the bottom of the page
  const scrollToBottom = () => {
    animateScroll.scrollToBottom(options); // Use animateScroll to scroll to the bottom with the specified options
  };

  // Helper function to render the appropriate button based on the type ('top' or 'bottom')
  const renderButton = (type) => (
    <motion.div
      variants={svgPop} // Apply animation variants
      initial="hidden" // Initial animation state
      animate="visible" // Animation state when visible
      exit="exit" // Animation state when exiting
      whileHover={{ scale: 1.2 }} // Animation on hover
      whileTap={{ scale: 0.7 }} // Animation on tap
    >
      {/* The type prop determines which icon to display:
      If type is 'top', it renders the ArrowUpIcon component.
      If type is not 'top' (again, implying it's 'bottom'), it renders the ArrowDownIcon component. */}
      <button onClick={type === 'top' ? scrollToTop : scrollToBottom} className={" text-skin-icon2 "}>
        {type === 'top' ? <ArrowUpIcon/> : <ArrowDownIcon/>}
      </button>
    </motion.div>
  );

  return (
    <>
      <AnimatePresence>
        {showButton && (
          <div className="z-30 fixed right-7 tablet:right-10 bottom-5 tablet:bottom-10">
            {renderButton(showButton)} {/* Render the appropriate button based on the showButton state */}
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BackToTopOrBottom;
