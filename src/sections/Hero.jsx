import { motion } from "framer-motion";
import { AngleRightIcon, ArrowRightIcon, VideoCameraIcon } from "../assets/Icons"
import { featuredCompanies } from "../constants/Data"
import { CustomBtn } from "../components";


const Hero = () => {
  return (
    <section className=" bg-skin-fill ">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
            {/* Alert */}
            <motion.a
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.07 }}

                href="#" 
                className=" group inline-flex items-center justify-between px-1 py-1 pr-4 text-sm text-skin-muted2 
                bg-skin-fill-muted hover:bg-skin-fill-muted-hover rounded-full mb-7"
            >
                <span className="text-xs bg-skin-fill2 rounded-full text-skin-inverted px-4 py-1.5 mr-3">
                    New
                </span>
                <span className="text-sm font-medium">
                    New Offers Inside! Elevate Your Design Experience Today🚀
                </span>

                <AngleRightIcon className={'ml-2 group-hover:translate-x-2 transition-transform duration-700 ease-in-out'}/>
            </motion.a>

            {/* Header */}
            <h1 
                className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-skin-base md:text-5xl lg:text-6xl"
            >
                Unleash Your Creative Vision with Creativa
            </h1>

            {/* Subheader */}
            <p className="mb-8 text-lg font-normal text-skin-muted lg:text-xl sm:px-16 xl:px-48">
                Embark on a Journey of Creative Exploration: Design, Collaborate, and Bring Your Boldest Ideas to Life, Together, in Real Time.
            </p>

            {/* Buttons */}
            <div className="flex flex-col mb-8 space-y-4 lg:mb-16 sm:flex-row sm:justify-center sm:items-center sm:space-y-0 sm:space-x-4">
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
                            className={'ml-2 -mr-1 group-hover:translate-x-2 transition-transform duration-700 ease-in-out '}
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
                        backgroundStyle={"bg-transparent hover:bg-skin-button-muted-hover "} 
                        textStyle={"text-skin-base text-base font-medium text-center"}
                        borderStyle={'border border-skin-border'} 
                        focusStyle={'focus:ring-4 focus:ring-skin-focus focus:outline-none'}
                        disabled={false}  // Disable the button during download
                    >
                        <VideoCameraIcon 
                            className={' mr-2 -ml-1 '}
                        />
                    </CustomBtn>
                </motion.div>
                
            </div>

            {/* Featured Companies */}
            <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                <span className="font-semibold text-skin-muted3 uppercase">FEATURED IN</span>
                <div className="flex flex-wrap items-center justify-center mt-8 text-skin-icon sm:justify-between">
                    {featuredCompanies.map((company, index) => (
                        <a key={index} href={company.href} className="mb-5 mr-5 lg:mb-0 hover:text-skin-icon-hover">
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