import { GoHome } from "react-icons/go";
import { AiOutlineShopping } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineContacts } from "react-icons/ai";
import banner1 from "./assets/banner_image_1.png";
import banner2 from "./assets/banner_image_2.png";
import banner3 from "./assets/banner_image_3.png";

export const navItems = [
  {
    id: 1,
    item: "Home",
    icon: <GoHome />,
  },
  {
    id: 2,
    item: "Shop",
    icon: <AiOutlineShopping />,
  },
  {
    id: 3,
    item: "Categories",
    icon: <BsChevronDown />,
  },
  {
    id: 4,
    item: "Contact us",
    icon: <AiOutlineContacts />,
  },
];

export const categories = [
  {
    id: 1,
    name: "Men's",
  },
  {
    id: 2,
    name: "Women's",
  },
  {
    id: 3,
    name: "Kids",
  },
];

export const bannerImageData = [
  {
    id: 1,
    src: banner1,
    alt: "banner-img-1",
  },
  {
    id: 2,
    src: banner2,
    alt: "banner-img-2",
  },
  {
    id: 3,
    src: banner3,
    alt: "banner-img-3",
  },
];
