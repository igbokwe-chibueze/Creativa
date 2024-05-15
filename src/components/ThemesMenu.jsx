import { useEffect, useState } from "react";
import CustomBtn from "./CustomBtn";
import { AngleRightIcon } from "../assets/Icons";
import { AnimatePresence, motion } from "framer-motion";
import { themes } from "../constants/Data";
import { childrenVariantY2, menuVariantX, menuVariantX2 } from "../constants/FramerVarients";

const ThemesMenu = () => {

    // Define a state variable 'menuToggle' and a function 'setMenuToggle' to manage the toggle state.
    const [menuToggle, setMenuToggle] = useState(false);

    // This "useEffect" is just so i can close the overlay using "Escape" key on keyboard.
    // Use the 'useEffect' hook to add an event listener for the "Escape" key press.
    useEffect(() => {
        // Define a function 'handleKeyPress' to handle the key press event.
        const handleKeyPress = (e) => {
            if (e.key === "Escape") {
                // If the "Escape" key is pressed, set 'menuToggle' to 'false' to close the menu list.
                setMenuToggle(false);
            }
        };

        // Add the event listener to the window object to listen for keydown events.
        window.addEventListener("keydown", handleKeyPress);

        // Clean up the event listener when the component is unmounted.
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };

    }, []); // The empty dependency array ensures this effect only runs once when the component is mounted.
  return (
    <>
        <motion.div
            whileTap={{ scale: 0.97 }}
            className=" w-fit "
        >
            <CustomBtn
                btnType='submit'
                classProps={` relative group flex justify-center items-center rounded-none space-x-2 `}
                label={'Themes'} 
                backgroundStyle={" hover:bg-skin-fill-muted2-hover "}
                textStyle={" text-sm font-medium text-skin-muted2 "}
                borderStyle={' '} 
                focusStyle={' '}
                disabled={false}  // Disable the button during download
                onBtnClick={() => setMenuToggle(!menuToggle)} // Toggle the 'toggle' state when the icon is clicked.
            >
                <div className= {` w-6 h-[17px] rounded bg-black `} />
                
                <AngleRightIcon 
                    className={`group-hover:${!menuToggle ? 'rotate-90 transition-transform duration-700 ease-in-out' : ''}
                        ${menuToggle ? 'rotate-90' : ''}`
                    }
                />
            </CustomBtn>

            {/* Menu List area */}
            <AnimatePresence>
                {menuToggle && (
                    <motion.div 
                        variants={window.innerWidth > 425 ? menuVariantX2 : menuVariantX} 
                        initial="hidden"
                        animate="visible"
                        exit="exit" // Animate the menu out when it's closed
                        className={`${!menuToggle ? "hidden" : "block"}
                        z-20 md:absolute -left-[325px] md:mt-4 w-full md:w-auto px-4 font-normal 
                        bg-skin-fill-muted2 md:rounded-lg md:shadow bg-opacity-0 md:bg-opacity-100 `}
                    >
                        <p className=" text-sm text-skin-muted2 py-2 ">Choose primary color:</p>

                        {/* Rendering setting links */}
                        <div className=" grid grid-cols-2 md:grid-cols-3 py-2 text-sm text-skin-muted2">
                            {themes.map((link, index) => (
                                <motion.button type="button"
                                    key={index}
                                    variants={window.innerWidth > 425 ? childrenVariantY2 : ''} 
                                    whileTap={{ scale: 0.7 }}
                                    transition={{ type: 'spring', stiffness: 90 }}

                                    onClick={() => setMenuToggle(false)}
                                    className=" flex justify-start items-center px-2 py-2 hover:bg-skin-fill-muted2-hover rounded "
                                >
                                    <div className={` w-6 h-[17px] rounded-sm mr-2 ${link.color} `}/>

                                    {link.text}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </motion.div>
    </>
  )
}

export default ThemesMenu