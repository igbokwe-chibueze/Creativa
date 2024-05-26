import { useTheme } from "../hooks";
import { CTASection, Content, Feature, FooterSection, Hero, Testimonials } from "../sections";
import BackToTopOrBottom from "./BackToTopOrBottom";
import Navbar from "./Navbar"


const Sections = () => {
    const { themeStyle } = useTheme();
  return (
    <div className={`${themeStyle} bg-skin-fill`}>
        <Navbar/>
        <BackToTopOrBottom />
        <section>
            <Hero/>
            <Content/>
            <Feature/>
            <Testimonials/>
            <CTASection/>
            <FooterSection/>
        </section>
    </div>
  )
}

export default Sections