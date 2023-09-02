import watchImg from "../assets/watch-img.png";
import { AiFillStar } from "react-icons/ai";
import { BsCart } from "react-icons/bs";

function Card() {
  return (
    <div className=" max-w-[215px] border rounded-xl p-3 select-none md:max-w-[240px] lg:hover:scale-90 transition-scale ease-in-out duration-500">
      <div className="border rounded-2xl bg-[#f2f1f2] cursor-pointer overflow-hidden">
        <img src={watchImg} alt="watch-img" className="object-cover" />
      </div>
      <div className="overflow-hidden">
        <span className="font-hind opacity-70">Titan</span>
        <h3 className="whitespace-nowrap font-mont font-bold text-[0.93rem]">
          Titan Smart Watch 3.0
        </h3>
        <div className="flex items-center">
          {Array(5)
            .fill(0)
            .map((_, idx) => (
              <AiFillStar key={idx} color="#FFB200" />
            ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="font-hind text-sm xs:text-base md:text-lg">$50</span>
          <div className="bg-[#d1ddd6] rounded-full p-3  cursor-pointer hover:scale-90 transition-scale ease-in-out duration-200 hover:bg-[#e4ebe6] transition-bg">
            <BsCart size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
