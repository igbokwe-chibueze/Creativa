import { motion } from "framer-motion"
import { features } from "../constants/Data"

const Feature = () => {
  return (
    <section className="  ">
        <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            //viewport={{ once: true }}
            transition={{ duration: 1.5 }}

            className=" max-w-screen-xl mx-auto px-4 lg:px-6 py-8 sm:py-16 "
        >
            <div className=" max-w-screen-md mb-8 lg:mb-16 ">
                <h2 className=" mb-4 text-4xl font-extrabold tracking-tight text-skin-base ">
                    Built with business teams like yours in mind.
                </h2>
                <p className=" sm:text-xl text-skin-muted ">
                    At Creativa, our focus lies in markets where the fusion of technology, innovation, 
                    and investment unlocks lasting value and propels economic growth.
                </p>
            </div>
            <div className=" md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 space-y-8 md:space-y-0 ">
                {features.map((item, index) => (
                    <div key={index}>
                        <div className=" flex justify-center items-center w-10 lg:w-12 h-10 lg:h-12 mb-4 rounded-full bg-skin-fill5 text-skin-icon2 ">
                            {item.icon}
                        </div>
                        <h3 className=" mb-2 text-xl font-bold text-skin-base ">{item.title}</h3>
                        <p className=" text-skin-muted ">{item.description}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    </section>
  )
}

export default Feature