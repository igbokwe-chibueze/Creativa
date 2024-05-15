import { useEffect, useState } from "react";
import { navLinks } from "../constants/Data";
import { AnimatePresence, motion } from "framer-motion";
import NavLinks from "./NavLinks";
import CustomBtn from "./CustomBtn";
import SettingsMenu from "./SettingsMenu";
import { menuVariantX, menuVariantY } from "../constants/FramerVarients";


const Menu = () => {

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
    <div >

        <button type="button"
            onClick={() => setMenuToggle(!menuToggle)}  // Toggle the 'toggle' state when the icon is clicked.
            className=" relative z-30 inline-flex lg:hidden items-center p-2 ml-1 rounded-lg bg-transparent hover:bg-skin-button-muted-hover
            text-sm text-skin-muted focus:outline-none focus:ring-4 focus:ring-skin-focus"
        >
            {/* Hamburger svg & close svg*/}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                {menuToggle ? (
                // Render the first path(close) when toggle is true
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                // Render the second path(Hamburger) when toggle is false
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                )}
            </svg>
        </button>

        {/* OverlayBtn: Closes the menu list when clicking outside of the list. */}
        <div 
            className={`${
                !menuToggle ? "hidden" : "block"  // Conditionally display the menu based on 'toggle' state.
            } `}
        >
            <button type="button"
                onClick={() => setMenuToggle(false)}
                tabIndex={-1} // Ensures this button is not accessible by keyboard
                className="fixed inset-0 z-20 bg-transparent h-screen w-screen cursor-default"
            >
            </button> 
        </div>
        
        {/* Menu List area */}
        <AnimatePresence>
            {menuToggle && (
                <motion.div 
                    variants={window.innerWidth >= 320 ? menuVariantX : menuVariantY} //for a screensize equal or above 320(from 320 upwards) menuVariant2 is applied.
                    initial="hidden"
                    animate="visible"
                    exit="exit" // Animate the menu out when it's closed
                    className={`${
                        !menuToggle ? "hidden" : "block"  // Conditionally display the menu based on 'toggle' state.
                    } absolute right-0 top-0 z-20 w-full min-[320px]:w-4/5 md:w-1/2 h-auto min-[320px]:h-auto md:h-[600px] pt-14 md:pt-16 pb-10 pl-2
                    backdrop-blur-xl bg-skin-fill-muted2 bg-opacity-60 shadow-lg`}
                >

                    {/* Rendering navigation links based */}
                    <NavLinks data={navLinks} setMenuToggle={setMenuToggle}/>

                    {/* Bottom Links/Buttons */}
                    <div className=" md:hidden justify-start items-center mt-4 space-y-2 ">
                        <SettingsMenu/>

                        {/* Get Started Btn */}
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                        >
                            <CustomBtn
                                btnType='submit'
                                classProps={`px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none`}
                                label={'Get started'} 
                                backgroundStyle={"bg-skin-button-accent hover:bg-skin-button-accent-hover"} 
                                borderStyle={' '} 
                                textStyle={" text-sm font-medium text-skin-inverted "}
                                disabled={false}  // Disable the button during download
                                onBtnClick={() => setMenuToggle(false)}
                            >
                            </CustomBtn>
                        </motion.div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  )
}

export default Menu