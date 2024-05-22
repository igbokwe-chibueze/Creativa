import { motion } from "framer-motion";
import { office1, office2 } from "../assets/pngs";

const Content = () => {
  return (
    <section id="company">
        <motion.div 
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}

            className=" max-w-screen-xl mx-auto items-center lg:grid lg:grid-cols-2 gap-16 px-4 lg:px-6 py-8 lg:py-16 "
        >
            {/* Left Column */}
            <div className=" sm:text-lg text-skin-muted ">
                <h2 className=" mb-4 text-4xl font-extrabold tracking-tight text-skin-base ">
                    Crafting Solutions with Expertise
                </h2>
                <p className=" mb-4 ">
                    We operate as strategists, designers, and developers, pioneering solutions and resolving challenges. 
                    Our nimbleness ensures swift and straightforward processes, while our capacity accommodates your desired scale 
                    at the pace you prefer. Agile yet comprehensive, we deliver precisely what you need, when you need it.
                </p>
                <p>
                    We serve as strategists, designers, and developers—innovators and solution finders. We are compact for agility and efficiency.
                </p>
            </div>

            {/* Right Column */}
            <div className=" grid grid-cols-2 gap-4 mt-8 ">
                <motion.img 
                    whileInView={{ y: [70, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}

                    src={office1} alt="office content 1"
                    className="w-full rounded-lg"
                />

                <motion.img 
                    whileInView={{ y: [-70, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}

                    src={office2} alt="office content 2"
                    className="w-full mt-4 rounded-lg lg:mt-10"
                />
            </div>
        </motion.div>
    </section>
  )
}

export default Content