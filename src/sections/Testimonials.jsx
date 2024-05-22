import { motion } from "framer-motion"
import { testimonialsData } from "../constants/Data"
import { Carousel } from "../components"


const Testimonials = () => {
  return (
    <section id="testimonials">
        
        <motion.figure 
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}

            className="max-w-screen-md mx-auto text-center px-4 lg:px-12 py-8 lg:py-16"
        >
            <Carousel data={testimonialsData}/>
            {/* {testimonialsData.map((testimonial, index) => (
                <div 
                    key={index}
                    className="bg-red-400"
                >
                    <QuotationIcon className="mx-auto mb-3 text-skin-icon" />

                    <blockquote>
                        <p className="text-2xl italic font-medium text-skin-base">
                            &quot;{testimonial.text}&quot;
                        </p>
                    </blockquote>

                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        <img 
                            className="w-6 h-6 rounded-full object-cover" 
                            src={testimonial.image} 
                            alt={`profile picture of ${testimonial.author}`} 
                        />
                        <div className="flex items-center divide-x-2 border-skin-border">
                            <cite className="pe-3 font-medium text-skin-base">{testimonial.author}</cite>
                            <cite className="ps-3 text-sm text-skin-muted">{testimonial.position}</cite>
                        </div>
                    </figcaption>

                </div>
            ))} */}
        </motion.figure>

    </section>
  )
}

export default Testimonials