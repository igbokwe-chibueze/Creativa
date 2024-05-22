/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { childrenVariantY, childrenVariantX } from "../constants/FramerVarients";
import { Link } from "react-scroll";


const NavLinks = ({ data, setMenuToggle }) => {
    // Check if setMenuToggle prop is provided
    const handleMenuToggle = () => {
        if (setMenuToggle) {
            setMenuToggle(false);
        }
    };

    return (
        <>
            {data.map((link, index) => (
                <Link
                    key={index}
                    to={link.href}
                    smooth={true}
                    hashSpy={true}
                    duration={500}
                    offset={-90}
                    spy={true} //Make Link selected when scroll is at its targets position
                    isDynamic={true}
                    //activeClass="" //class applied when element is reached

                    className="cursor-pointer flex flex-col mt-2 lg:mt-0 font-medium lg:flex-row lg:space-x-8"
                    onClick={handleMenuToggle}
                >
                    <motion.div
                        variants={window.innerWidth >= 320 ? childrenVariantX : childrenVariantY}
                        whileTap={{ scale: 0.7 }}
                        transition={{ type: 'spring', stiffness: 90 }}
                        className="block py-2 pl-3 pr-4 hover:bg-skin-fill-muted2-hover lg:dark:hover:bg-transparent
                        text-skin-muted dark:hover:text-white lg:hover:text-blue-700 border-b lg:border-0 border-skin-border2 "
                    >
                        {link.text}
                    </motion.div>
                </Link>
            ))}
        </>
    );
}

export default NavLinks;
