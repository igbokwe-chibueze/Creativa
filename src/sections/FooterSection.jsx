import { creativaLogo } from "../assets/pngs"
import { footerLinks, socialMediaLinks } from "../constants/Data"
import { motion } from "framer-motion"
import { useTheme } from "../hooks/useTheme";

const FooterSection = () => {
    const { themeStyle } = useTheme();
  return (
    <footer className={`${themeStyle} bg-skin-fill3 p-4 sm:p-6`}>
        <div className=" max-w-screen-xl mx-auto ">

            {/* Top Half */}
            <motion.div 
                whileInView={{ y: [30, 0], opacity: [0, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}

                className=" md:flex md:justify-between "
            >
                {/* Logo */}
                <div className=" mb-6 md:mb-0 ">
                    <a href="https://github.com/igbokwe-chibueze" className=" flex items-center ">
                        <img src={creativaLogo} className=" h-16 mr-3 " alt="Creativa Logo" />
                        <span className=" text-2xl font-semibold text-skin-base self-center whitespace-nowrap ">Creativa</span>
                    </a>
                </div>
                {/* Grid List */}
                <div className=" grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                        <h2 className=" mb-6 text-sm font-semibold text-skin-base uppercase ">{section.title}</h2>
                        <ul className=" text-skin-muted ">
                            {section.links.map((link, linkIndex) => (
                            <li key={linkIndex} className={linkIndex !== section.links.length - 1 ? " mb-4 " : ""}>
                                <a href={link.href} className=" hover:underline ">{link.text}</a>
                            </li>
                            ))}
                        </ul>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Bottom half */}
            <hr className=" my-6 lg:my-8 sm:mx-auto border-skin-border " />

            <div className=" sm:flex sm:items-center sm:justify-between ">
                <span className=" text-sm sm:text-center text-skin-muted ">
                    © 2024 <a href="https://github.com/igbokwe-chibueze" className=" hover:underline ">Creativa™</a>. All Rights Reserved.
                </span>

                {/* Social Media Icons */}
                <div className=" flex sm:justify-center mt-4 sm:mt-0 space-x-6 ">
                    {socialMediaLinks.map((link, index) => (
                        <a key={index} href={link.url} className=" text-skin-icon hover:text-skin-icon-hover ">
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default FooterSection