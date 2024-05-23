import { motion } from "framer-motion"
import { testimonialsData } from "../constants/Data"
import { Carousel } from "../components"


const Testimonials = () => {
  return (
    <section id="testimonials" >
        
        <motion.figure 
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}

            className="max-w-screen-md mx-auto text-center px-4 lg:px-12 py-8 lg:py-16"
        >
            <Carousel data={testimonialsData}/>
        </motion.figure>

    </section>
  )
}

export default Testimonials