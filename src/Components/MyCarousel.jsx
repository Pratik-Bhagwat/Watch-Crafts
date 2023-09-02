import banner1 from "../assets/banner_image_1.png";
import banner2 from "../assets/banner_image_2.png";
import banner3 from "../assets/banner_image_3.png";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

function Carousel() {
  return (
    <div className="flex items-center overflow-y-hidden lg:max-w-[1280px]">
      <BsChevronLeft />
      <BsChevronRight />
      <div className="flex items-center gap-4">
        <img src={banner1} alt="banner1" className="rounded-xl select-none" />
        <img src={banner2} alt="banner2" className="rounded-xl select-none" />
        <img src={banner3} alt="banner3" className="rounded-xl select-none" />
      </div>
    </div>
  );
}
export default Carousel;
