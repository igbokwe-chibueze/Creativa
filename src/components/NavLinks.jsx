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
        <ul 
            className=" flex flex-col lg:flex-row mt-2 lg:mt-0 lg:space-x-8 "
        >
            {data.map((link, index) => (
                <motion.li
                    variants={window.innerWidth >= 320 ? childrenVariantX : childrenVariantY}
                    whileTap={{ scale: 0.7 }}
                    transition={{ type: 'spring', stiffness: 90 }}

                    key={index}

                    className=" font-medium text-skin-muted dark:hover:text-white lg:hover:text-blue-700 
                    hover:bg-skin-fill-muted2-hover lg:dark:hover:bg-transparent
                    border-b lg:border-0 border-skin-border2"

                    //This hiddes the last two links in the navLink, i just did it to prevent overflow of the links to the next line.
                    // className={`font-medium text-skin-muted dark:hover:text-white lg:hover:text-blue-700 
                    // hover:bg-skin-fill-muted2-hover lg:dark:hover:bg-transparent
                    // border-b lg:border-0 border-skin-border2 ${
                    //     index >= data.length - 2 ? 'lg:hidden xl:block 2xl:block' : ''
                    // }`}
                >
                    <Link
                        to={link.href}
                        smooth={true}
                        hashSpy={true}
                        duration={500}
                        //offset={-90}
                        spy={true} //Make Link selected when scroll is at its targets position
                        isDynamic={true}
                        activeClass="text-blue-700" //class applied when element is reached

                        className="cursor-pointer block py-2 pl-3 pr-4"
                        onClick={handleMenuToggle}
                    >
                        {link.text}
                    </Link>

                </motion.li>
            ))}
        </ul>
    );
}

export default NavLinks;
