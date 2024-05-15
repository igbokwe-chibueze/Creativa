import { motion } from "framer-motion";
import { AngleRightIcon, ArrowRightIcon, VideoCameraIcon } from "../assets/Icons"
import { featuredCompanies } from "../constants/Data"
import { CustomBtn } from "../components";


const Hero = () => {
  return (
    <section className=" bg-skin-fill ">
        <div className=" max-w-screen-xl mx-auto text-center px-4 lg:px-12 py-8 lg:py-16 ">
        {/* <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12"> */}
            {/* Alert */}
            <motion.a
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.07 }}

                href="#" 
                className=" group inline-flex justify-between items-center px-1 py-1 pr-4 
                bg-skin-fill-muted hover:bg-skin-fill-muted-hover rounded-full mb-7 text-skin-muted2 "
            >
                <span className=" text-xs text-skin-inverted px-4 py-1.5 mr-3 bg-skin-fill2 rounded-full ">
                    New
                </span>
                <span className=" text-sm font-medium ">
                    New Offers Inside! Elevate Your Design Experience Today🚀
                </span>

                <AngleRightIcon className={" ml-2 group-hover:translate-x-2 transition-transform duration-700 ease-in-out "}/>
            </motion.a>

            {/* Header */}
            <h1 
                className=" mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-skin-base "
            >
                Unleash Your Creative Vision with Creativa
            </h1>

            {/* Subheader */}
            <p className=" mb-8 sm:px-16 xl:px-48 text-lg lg:text-xl font-normal text-skin-muted ">
                Embark on a Journey of Creative Exploration: Design, Collaborate, and Bring Your Boldest Ideas to Life, Together, in Real Time.
            </p>

            {/* Buttons */}
            <div className=" flex flex-col sm:flex-row sm:justify-center sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 lg:mb-16 ">
                <motion.div
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: 1.07 }}
                >
                    <CustomBtn
                        btnType='submit'
                        classProps={`group w-full h-full`}
                        label={'Learn more'} 
                        backgroundStyle={""} 
                        borderStyle={"border-0"} //Note: You can also put an empty space here. This overides the default but adds no style.
                        textStyle={""}
                        disabled={false}  // Disable the button during download
                    >
                        <ArrowRightIcon 
                            className={" ml-2 -mr-1 group-hover:translate-x-2 transition-transform duration-700 ease-in-out "}
                        />
                    </CustomBtn>
                </motion.div>

                <motion.div
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: 1.07 }}
                >
                    <CustomBtn
                        btnType='submit'
                        classProps={`group w-full h-full flex-row-reverse`}
                        label={'Watch video'} 
                        backgroundStyle={" bg-transparent hover:bg-skin-button-muted-hover "} 
                        textStyle={" text-base font-medium text-center text-skin-base "}
                        borderStyle={" border border-skin-border "} 
                        focusStyle={" focus:ring-4 focus:ring-skin-focus focus:outline-none "}
                        disabled={false}  // Disable the button during download
                    >
                        <VideoCameraIcon 
                            className={" mr-2 -ml-1 "}
                        />
                    </CustomBtn>
                </motion.div>
                
            </div>

            {/* Featured Companies */}
            <div className=" md:max-w-screen-md lg:max-w-screen-lg mx-auto px-4 lg:px-36 text-center ">
                <span className=" font-semibold text-skin-muted3 uppercase ">FEATURED IN</span>
                <div className=" flex flex-wrap justify-center sm:justify-between items-center mt-8 text-skin-icon ">
                    {featuredCompanies.map((company, index) => (
                        <a key={index} href={company.href} className=" mb-5 mr-5 lg:mb-0 hover:text-skin-icon-hover ">
                            {company.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero