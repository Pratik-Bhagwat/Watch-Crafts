import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <div className="container flex flex-col gap-6 px-5 xs:px-0 py-7">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="grid grid-cols-1 place-self-start lg:place-self-center lg:grid-cols-2 gap-16">
          <div className="flex flex-col uppercase gap-2 text-white font-mont font-semibold whitespace-nowrap">
            <span>find a store</span>
            <span>become a partner</span>
            <span>sign up for email</span>
            <span>send us feedback</span>
            <span>student discount</span>
          </div>
          <div className="grid grid-cols-2 gap-12 lg:gap-32">
            <div className="flex flex-col gap-2 text-[#a6a6a6] font-hind font-light whitespace-nowrap">
              <span className="uppercase font-mont font-semibold text-white">
                get help
              </span>
              <span>Order Status</span>
              <span>Delivery</span>
              <span>Returns</span>
              <span>Payment Options</span>
              <span>Contact Us</span>
            </div>
            <div className="flex flex-col gap-2 text-[#a6a6a6] font-hind font- whitespace-nowrap">
              <span className="uppercase font-mont font-semibold text-white">
                about WatchCrafts
              </span>
              <span>News</span>
              <span>Careers</span>
              <span>Investors</span>
              <span>Sustainability</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 self-center lg:self-start mt-6 lg:mt-0">
          <div className="bg-[#737373] rounded-full p-3 lg:hover:cursor-pointer">
            <BsLinkedin size={22} />
          </div>
          <div className="bg-[#737373] rounded-full p-3 lg:hover:cursor-pointer">
            <BsTwitter size={22} />
          </div>
          <div className="bg-[#737373] rounded-full p-3 lg:hover:cursor-pointer">
            <BsGithub size={22} />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:justify-between text-[0.8rem] lg:text-base text-[#a6a6a6] font-hind font-light whitespace-nowrap">
        <span className="tracking-widest self-center lg:self-start">
          © 2023 WatchCrafts, Inc. All Rights Reserved
        </span>
        <div className="flex items-center gap-4 tracking-wider text-[0.7rem] lg:text-base self-center">
          <span>Guides</span>
          <span>Terms of Sale</span>
          <span>Terms of Use</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}
export default Footer;
