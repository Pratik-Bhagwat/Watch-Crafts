import { useState } from "react";
import { navItems, categories } from "../config";
import { motion } from "framer-motion";

function MobileMenuCategories({ mobileMenu }) {
  const [showCategories, setShowCategories] = useState(false);

  const mobileMenuVariants = {
    close: {
      x: "100%",
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const categoriesVariants = {
    close: {
      y: "-100%",
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className={`lg:hidden h-[calc(100vh-72px)] fixed container`}
      variants={mobileMenuVariants}
      initial={mobileMenu ? "close" : "open"}
      animate={mobileMenu ? "open" : "close"}
    >
      <ul className="flex flex-col justify-center border-t">
        {navItems.map((item) =>
          item.item === "Categories" ? (
            <li
              key={item.id}
              className="flex flex-col gap-2 py-4 px-2 border-b select-none"
              onClick={() => setShowCategories(!showCategories)}
            >
              <div className="flex items-center gap-2">
                {item.item}
                {item.icon}
              </div>
              {showCategories && (
                <div>
                  <ul className="flex flex-col gap-3">
                    {categories.map((category) => (
                      <motion.li
                        variants={categoriesVariants}
                        initial={showCategories ? "close" : "open"}
                        animate={showCategories ? "open" : "close"}
                        key={category.id}
                        className="flex items-center gap-2 py-2 px-2 border rounded-xl select-none"
                      >
                        {category.name}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li
              key={item.id}
              className="flex items-center gap-2 py-4 px-2 border-b select-none"
            >
              {item.icon}
              {item.item}
            </li>
          )
        )}
      </ul>
    </motion.div>
  );
}
export default MobileMenuCategories;
