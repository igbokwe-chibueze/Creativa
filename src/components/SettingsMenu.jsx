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
            className=" w-fit"
        >
            <CustomBtn
                btnType='submit'
                classProps={`relative group flex justify-center items-center px-4 lg:px-5 py-2 lg:py-2.5 mr-2 lg:mr-2 rounded-lg `}
                label={'Settings'} 
                backgroundStyle={"hover:bg-skin-fill-muted-hover"}
                textStyle={"text-skin-base font-medium text-sm "}
                borderStyle={' '} 
                focusStyle={'focus:ring-4 focus:ring-skin-focus'}
                disabled={false}  // Disable the button during download
                onBtnClick={() => setMenuToggle(!menuToggle)} // Toggle the 'toggle' state when the icon is clicked.
            >
                <AngleRightIcon 
                    className={`ml-[2px] group-hover:${!menuToggle ? 'rotate-90 transition-transform duration-700 ease-in-out' : ''}
                        ${menuToggle ? 'rotate-90' : ''}`
                    }
                />
            </CustomBtn>
        </motion.div>

        {/* OverlayBtn: Closes the menu list when clicking outside of the list. */}
        {/* <div 
            className={`${
                !menuToggle ? "hidden" : "block"  // Conditionally display the menu based on 'toggle' state.
            } `}
        >
            <button type="button"
                onClick={() => setMenuToggle(false)}
                tabIndex={-1} // Ensures this button is not accessible by keyboard
                className="fixed inset-0 bg-black h-screen w-screen cursor-default"
                // className="fixed inset-0 z-20 bg-transparent h-screen w-screen cursor-default"
            >
            </button> 
        </div> */}

        {/* Menu List area */}
        <AnimatePresence>
            {menuToggle && (
                <motion.div 
                    variants={window.innerWidth > 425 ? menuVariantY : menuVariantY2} 
                    initial="hidden"
                    animate="visible"
                    exit="exit" // Animate the menu out when it's closed
                    className={`${!menuToggle ? "hidden" : "block"}
                    z-20 md:absolute md:mt-4 font-normal bg-skin-fill-muted2 md:rounded-lg md:shadow w-full md:w-44 `}
                >
                    {/* Rendering setting links */}
                    <ul className=" py-2 text-sm text-skin-muted2">
                        {settingsList.map((link, index) => (
                            <motion.li 
                                key={index}
                                variants={window.innerWidth > 425 ? childrenVariantY : ''} 
                                whileTap={{ scale: 0.7 }}
                                transition={{ type: 'spring', stiffness: 90 }}

                                onClick={() => setMenuToggle(false)}
                            >
                                <a href={link.href} 
                                    className="block px-4 py-2 hover:bg-skin-fill-muted2-hover  border-b border-skin-border2"
                                >
                                    {link.text}
                                </a>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Render all color themes */}
                    <ThemesMenu/>

                    {/* Bottom Links/Buttons */}
                    <div className="flex flex-wrap justify-start items-center mt-2 space-x-4 pb-2 ">

                        {/* Log In Button */}
                        <motion.a
                            whileTap={{ scale: 0.7 }}

                            href="#" 
                            onClick={() => setMenuToggle(false)}
                            className="block text-sm text-skin-muted2 px-4 py-2 hover:bg-skin-fill-muted2-hover "
                        >
                            Log In
                        </motion.a>

                        {/* Toggle Dark Mode */}
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={isDarkMode}
                                onChange={toggleTheme}
                                className="sr-only peer"
                            />
                            <div
                                className={`flex items-center w-11 h-6 rounded-full bg-skin-fill
                                    peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-skin-focus2`
                                }
                            >
                                <div
                                    className={` w-fit p-0.5 shadow-sm rounded-full 
                                        transition-all duration-300 text-skin-base-opposite bg-skin-fill4
                                        ${isDarkMode  ? "translate-x-6 rotate-0" : "-rotate-180"}`
                                    }
                                >
                                    {isDarkMode  ? <SunIcon className={"w-[18px] h-[18px]"}/> : <MoonIcon className={"w-[18px] h-[18px]"}/>}
                                </div>
                            </div>
                        </label>

                        {/* <button
                            onClick={toggleTheme}
                        >
                            {isDarkMode ? (
                                // Render the first path(moon) when toggle is true
                                <SunIcon className={"text-black bg-white rounded-full p-1"}/>
                            ) : (
                                // Render the second path(sun) when toggle is false
                                <MoonIcon className={"text-white bg-black rounded-full p-1"}/>
                            )}
                        </button> */}

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  )
}

export default SettingsMenu