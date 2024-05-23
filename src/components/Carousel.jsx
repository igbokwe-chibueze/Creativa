/* eslint-disable react/prop-types */
import { ChevronLeftIcon, ChevronRightIcon, QuotationIcon } from "../assets/Icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ChevronLeftIcon className={"w-45 h-45"}/>
      </div>
    );
};

const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ChevronRightIcon className={"w-45 h-45"}/>
      </div>
    );
};

const Carousel = ({ data }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        nextArrow: <NextBtn />,
        prevArrow: <PreviousBtn />,
        customPaging: () => (
        <div 
            className="w-2 h-2 rounded-full m-2 bg-skin-fill-muted2 hover:bg-skin-fill5"
        ></div>
        ),
    };

  return (
    <section>
        <div className=" testimonial ">
            <Slider {...settings}>
                {data.map((testimonial, index) => (
                    <div 
                        key={index}
                    >
                        <QuotationIcon className="mx-auto mb-3 text-skin-icon" />

                        <blockquote>
                            <p className="text-2xl italic font-medium text-skin-base">
                            &quot;{testimonial.text}&quot;
                            </p>
                        </blockquote>

                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img 
                            className="w-6 h-6 rounded-full object-cover " 
                            src={testimonial.image} 
                            alt={`profile picture of ${testimonial.author}`} 
                            />
                            <div className="flex items-center divide-x-2 border-skin-border">
                            <cite className="pe-3 font-medium text-skin-base">{testimonial.author}</cite>
                            <cite className="ps-3 text-sm text-skin-muted">{testimonial.position}</cite>
                            </div>
                        </figcaption>
                    </div>
                ))}
            </Slider>
        </div>
    </section>
  );
};

export default Carousel;
