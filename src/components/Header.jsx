import { useState } from "react";
import images from "../assets";
import Image from "./Image";
import MenuIcon from "./MenuIcon";
import { headerLists } from "../constants";

const Header = () => {
  const [active, setActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white p-8 shadow-md z-50">
      <nav className="flex justify-between items-center lg:px-10">
        <Image src={images.logo} alt="Company Logo" className="h-10" />

        <div className="flex lg:hidden">
          <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>

        <div
          className={`lg:flex flex-1 justify-center items-center lg:static absolute top-0 left-0 h-screen lg:h-auto w-full lg:w-auto bg-white lg:bg-transparent transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          {headerLists.map((nav, index) => (
            <div key={nav.id} className="flex items-center">
              <li
                className={`${
                  active === nav.title
                    ? "text-blue-emtech font-bold"
                    : "text-gray"
                } px-4 py-2 cursor-pointer hover:text-blue-emtech transition-all list-none`}
                onClick={() => {
                  setActive(nav.title);
                  setIsMenuOpen(false);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
              {index < headerLists.length - 1 && (
                <div
                  className={`h-4 w-px bg-blue-emtech mx-2 ${
                    isMenuOpen ? "hidden" : "block"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
