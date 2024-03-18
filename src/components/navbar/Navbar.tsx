import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="navbar uppercase sticky">
        <div className="flex justify-between items-center m-auto h-20 mx-6">
          <div className="w-3/12">
            {!showMenu ? (
              <RxHamburgerMenu
                className="text-xl items-center z-30"
                onClick={toggleShowMenu}
              />
            ) : (
              <RxCross1
                className="text-xl items-center z-30"
                onClick={toggleShowMenu}
              />
            )}
          </div>
          <div className="logo-navigation p-2 text-2xl">LARQ</div>
          <div className="main-navigation-wrap-right flex justify-end w-3/12">
            <ul className="flex items-center">
              <li className="pr-6">
                <FaRegUser />
              </li>
              <li className="">
                <FiShoppingCart />
              </li>
            </ul>
          </div>
        </div>
        {showMenu ? (
          <div className="flex flex-col bg-white w-full absolute z-50 top-20 left-0 h-screen">
            <div className="main-navigation-wrap font-semibold">
              <ul className="px-6">
                <li className="pr-10">Purification</li>
                <li className="pr-10">Home</li>
                <li className="pr-10">Drinkware</li>
                <li className="pr-10">Gift Sets</li>
                <li className="pr-10">
                  <button className="border rounded-full p-4 flex items-center ml-[-1rem]">
                    Explore all <BsArrowRight className="ml-4" />
                  </button>
                </li>
                <li className="pr-12">Technology</li>
                <li className="pr-12">Faq</li>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Navbar;
