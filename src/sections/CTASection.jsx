import { motion } from "framer-motion"
import { ArrowRightIcon } from "../assets/Icons"
import { CustomBtn } from "../components"
import { dashboardDark, dashboardLight } from "../assets/pngs"

const CTASection = () => {
  return (
    <section  id="cta">
        <motion.div 
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}

            className=" max-w-screen-xl mx-auto items-center gap-8 xl:gap-16 md:grid md:grid-cols-2 px-4 lg:px-6 py-8 sm:py-16 "
        >
            <img src={dashboardLight} alt="dashboard image" className="w-full dark:hidden"/>
            <img src={dashboardDark} alt="dashboard image" className="hidden w-full dark:block"/>
            <div className="mt-4 md:mt-0">
                <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-skin-base">
                    Let&apos;s forge additional tools and concepts that unite us
                </h2>
                <p className="mb-6 md:text-lg text-skin-muted">
                    Creativa helps you connect with friends and communities of people who share your interests. 
                    Connecting with your friends and family as well as discovering new ones is easy with features like Groups.
                </p>
                <motion.div
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: 1.07 }}
                    className=" mt-4 w-fit"
                >
                    <CustomBtn
                        btnType='submit'
                        classProps={`group`}
                        label={'Get started'} 
                        backgroundStyle={''} 
                        borderStyle={"border-0"} //Note: You can also put an empty space here. This overides the default but adds no style.
                        textStyle={"text-sm font-medium text-center text-skin-inverted"}
                        disabled={false}  // Disable the button during download
                    >
                        <ArrowRightIcon 
                            className={" ml-2 -mr-1 group-hover:translate-x-2 transition-transform duration-700 ease-in-out "}
                        />
                    </CustomBtn>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default CTASection