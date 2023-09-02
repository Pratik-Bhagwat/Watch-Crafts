import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function CustomCarousel({ children: data }) {
  return (
    <div className="lg:max-w-[1280px] select-none">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
      >
        {data}
      </Carousel>
    </div>
  );
}
export default CustomCarousel;
