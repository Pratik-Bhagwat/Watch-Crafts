import { navItems, categories } from "../config";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { BsCart } from "react-icons/bs";
import WatchLogo from "../assets/watch logo.png";
import { useState } from "react";

function Navbar({ mobileMenu, setMobileMenu }) {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <nav className="flex items-center justify-between container py-4 px-2 select-none">
      <img
        src={WatchLogo}
        alt="website logo"
        width={40}
        className="lg:cursor-pointer"
      />
      <div>
        <ul className="hidden lg:flex items-center gap-5">
          {navItems.map((item) =>
            item.item === "Categories" ? (
              <li
                key={item.id}
                className="lg:flex items-center gap-2 cursor-pointer relative select-none"
                onClick={() => setShowCategories(!showCategories)}
              >
                <div className="flex items-center gap-2">
                  {item.item}
                  {item.icon}
                </div>
                {showCategories && (
                  <div className="absolute top-8 border w-36 rounded-lg py-2 px-4 shadow-sm z-10 bg-white">
                    <ul className="flex flex-col gap-3">
                      {categories.map((category) => (
                        <li
                          key={category.id}
                          className="flex items-center gap-2 py-2 px-2 border rounded-xl select-none shadow-sm"
                        >
                          {category.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ) : (
              <li
                key={item.id}
                className="lg:flex items-center gap-2 cursor-pointer select-none"
              >
                {item.icon}
                {item.item}
              </li>
            )
          )}
        </ul>
      </div>
      <div className="hidden lg:flex items-center gap-2 border rounded-3xl py-2 px-2">
        <BsCart size={25} className="cursor-pointer" color="#595959" />
        <VscAccount size={26} className="cursor-pointer" color="#595959" />
      </div>
      {mobileMenu ? (
        <IoMdClose
          onClick={() => setMobileMenu(!mobileMenu)}
          size={25}
          color="#333"
          className="lg:hidden"
        />
      ) : (
        <GiHamburgerMenu
          onClick={() => setMobileMenu(!mobileMenu)}
          size={25}
          color="#333"
          className="lg:hidden"
        />
      )}
    </nav>
  );
}
export default Navbar;
