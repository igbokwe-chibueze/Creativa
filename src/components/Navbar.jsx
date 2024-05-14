import { motion } from "framer-motion"
import { creativaLogo } from "../assets/pngs"
import { navLinks } from "../constants/Data"
import CustomBtn from "./CustomBtn"
import Menu from "./Menu"
import NavLinks from "./NavLinks"
import SettingsMenu from "./SettingsMenu"


const Navbar = () => {
  return (
    <nav className=" dark:theme-dark bg-skin-fill3 px-4 lg:px-6 py-2.5 ">
        <div className=" flex flex-wrap justify-between items-center max-w-screen-xl mx-auto ">
            {/* Logo */}
            <a href=" " className="flex items-center">
                <img src={creativaLogo} className="h-12 mr-3 sm:h-16" alt="Creativa Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap text-skin-base">Creativa</span>
            </a>

            {/* SettingsMenu/GetStarted and Menu */}
            <div className=" flex justify-center items-center lg:order-2 ">
                <div className=" hidden md:flex ">

                    <SettingsMenu/>

                    {/* Get Started Btn */}
                    <motion.div
                        whileTap={{ scale: 0.97 }}
                        whileHover={{ scale: 1.07 }}
                    >
                        <CustomBtn
                            btnType='submit'
                            classProps={`px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none`}
                            label={'Get started'} 
                            backgroundStyle={"bg-skin-button-accent hover:bg-skin-button-accent-hover"} 
                            borderStyle={' '} 
                            textStyle={"text-skin-inverted font-medium text-sm"}
                            disabled={false}  // Disable the button during download
                        >
                        </CustomBtn>
                    </motion.div>
                </div>
                
                <Menu/>
            </div>
            
            {/* Links */}
            <div className=" hidden lg:flex justify-between items-center w-full lg:w-auto lg:order-1 ">
                <NavLinks data={navLinks} />
            </div>
        </div>
    </nav>
  )
}

export default Navbar