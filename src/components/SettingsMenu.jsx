import { useEffect, useState } from "react";
import CustomBtn from "./CustomBtn";
import { AngleRightIcon, MoonIcon, SunIcon } from "../assets/Icons";
import { AnimatePresence, motion } from "framer-motion";
import { childrenVariantY, menuVariantY, menuVariantY2 } from "../constants/FramerVarients";
import { settingsList } from "../constants/Data";
import { useThemeSwitcher } from "../hooks";
import ThemesMenu from "./ThemesMenu";

const SettingsMenu = () => {

    // Define a state variable 'menuToggle' and a function 'setMenuToggle' to manage the toggle state.
    const [menuToggle, setMenuToggle] = useState(false);

    const { isDarkMode, toggleTheme } = useThemeSwitcher();

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
    <div>
        <motion.div
            whileTap={{ scale: 0.97 }}
            className=" w-fit "
        >
            <CustomBtn
                btnType='submit'
                classProps={` relative group flex justify-center items-center px-4 lg:px-5 py-2 lg:py-2.5 mr-2 lg:mr-2 rounded-lg `}
                label={'Settings'} 
                backgroundStyle={"hover:bg-skin-fill-muted-hover"}
                textStyle={" text-sm font-medium text-skin-base "}
                borderStyle={' '} 
                focusStyle={'focus:ring-4 focus:ring-skin-focus'}
                disabled={false}  // Disable the button during download
                onBtnClick={() => {setMenuToggle(!menuToggle); console.log('clicked');}} // Toggle the 'toggle' state when the icon is clicked.
            >
                <AngleRightIcon 
                    className={`${menuToggle ? 'rotate-90' : 'rotate-0'} transition-transform duration-700 ease-in-out`}
                />
            </CustomBtn>
        </motion.div>

        {/* Menu List area */}
        <AnimatePresence>
            {menuToggle && (
                <motion.div 
                    variants={window.innerWidth > 425 ? menuVariantY : menuVariantY2} 
                    initial="hidden"
                    animate="visible"
                    exit="exit" // Animate the menu out when it's closed
                    className={`${!menuToggle ? "hidden" : "block"}
                    z-20 md:absolute md:mt-4 bg-skin-fill-muted2 md:rounded-lg md:shadow w-full md:w-44 font-normal bg-opacity-0 md:bg-opacity-100 `}
                >
                    {/* Rendering setting links */}
                    <ul className=" py-2 text-sm text-skin-muted2 ">
                        {settingsList.map((link, index) => (
                            <motion.li 
                                key={index}
                                variants={window.innerWidth > 425 ? childrenVariantY : ''} 
                                whileTap={{ scale: 0.7 }}
                                transition={{ type: 'spring', stiffness: 90 }}

                                onClick={() => setMenuToggle(false)}
                            >
                                <a href={link.href} 
                                    className=" block px-4 py-2 hover:bg-skin-fill-muted2-hover border-b border-skin-border2 "
                                >
                                    {link.text}
                                </a>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Render all color themes */}
                    <ThemesMenu/>

                    {/* Bottom Links/Buttons */}
                    <div className=" flex flex-wrap justify-start items-center mt-2 pb-2 space-x-4 ">

                        {/* Log In Button */}
                        <motion.a
                            whileTap={{ scale: 0.7 }}

                            href="#" 
                            onClick={() => setMenuToggle(false)}
                            className=" block px-4 py-2 hover:bg-skin-fill-muted2-hover text-sm text-skin-muted2 "
                        >
                            Log In
                        </motion.a>

                        {/* Toggle Dark Mode */}
                        <label className=" inline-flex items-center cursor-pointer ">
                            <input
                                type="checkbox"
                                checked={isDarkMode}
                                onChange={toggleTheme}
                                className="sr-only peer"
                            />
                            <div
                                className=" flex items-center w-11 h-6 rounded-full bg-skin-fill
                                peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-skin-focus2 "
                            >
                                <div
                                    className={` w-fit p-0.5 shadow-sm rounded-full 
                                        transition-all duration-300 bg-skin-fill4 text-skin-base-opposite
                                        ${isDarkMode  ? "translate-x-6 rotate-0" : "-rotate-180"}`
                                    }
                                >
                                    {isDarkMode  ? <SunIcon className={" w-[18px] h-[18px] "}/> : <MoonIcon className={" w-[18px] h-[18px] "}/>}
                                </div>
                            </div>
                        </label>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  )
}

export default SettingsMenu