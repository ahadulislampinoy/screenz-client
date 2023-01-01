import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <section className="relative shadow-2xl max-w-screen-2xl mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/images/slider-1.webp" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-2.jpeg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-3.jpeg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-4.webp" alt="" />
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
