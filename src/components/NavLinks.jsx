/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { childrenVariantY, childrenVariantX } from "../constants/FramerVarients";


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
                <ul key={index} className="flex flex-col mt-2 lg:mt-0 font-medium lg:flex-row lg:space-x-8">
                    <motion.li
                        variants={window.innerWidth >= 320 ? childrenVariantX : childrenVariantY}
                        whileTap={{ scale: 0.7 }}
                        transition={{ type: 'spring', stiffness: 90 }}
                    >
                        <a href={link.href}
                            onClick={handleMenuToggle} // Call handleMenuToggle instead of directly using setMenuToggle
                            className="block py-2 pl-3 pr-4 hover:bg-skin-fill-muted2-hover lg:dark:hover:bg-transparent
                            text-skin-muted dark:hover:text-white lg:hover:text-blue-700 lg:dark:hover:text-white
                            border-b lg:border-0 border-skin-border2 "
                        >
                            {link.text}
                        </a>
                    </motion.li>
                </ul>
            ))}
        </>
    );
}

export default NavLinks;
