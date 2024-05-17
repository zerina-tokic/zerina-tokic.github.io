import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";
import Button from "../Button";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      {isOpen ? (
        <div className="fixed top-0 right-0 inset-y-0 w-full z-50 backdrop-blur-md transition-right duration-300 ease-in-out">
          <div className="flex justify-end">
            <div className="bg-[#e5e7eb] bg-opacity-40 shadow-xl w-80 h-screen overflow-y-auto">
              <div className="relative p-8">
                <nav className="flex flex-col gap-6 barlow-bold text-[#112B3C]">
                  <a
                    href="/"
                    className="hover:text-[#E61C5D] hover:shadow-lg py-2 px-3 rounded-[45px] transition-colors duration-300"
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className="hover:text-[#E61C5D] hover:shadow-lg py-1 px-3 rounded-[45px] transition-colors duration-300"
                  >
                    About
                  </a>
                  <a
                    href="/services"
                    className="hover:text-[#E61C5D] hover:shadow-lg py-1 px-3 rounded-[45px] transition-colors duration-300"
                  >
                    Services
                  </a>
                  <a
                    href="/price"
                    className="hover:text-[#E61C5D] hover:shadow-lg py-1 px-3 rounded-[45px] transition-colors duration-300"
                  >
                    Price
                  </a>
                  <a
                    href="/contact"
                    className="hover:text-[#E61C5D] hover:shadow-lg py-1 px-3 rounded-[45px] transition-colors duration-300"
                  >
                    Contact
                  </a>
                </nav>

                <div className="flex flex-col py-5 place-content-center gap-4 mx-5">
                  <Button
                    title="Login"
                    type="secondary"
                    customStyles="barlow-medium shadow-sm shadow-[#E61C5D]"
                  />
                  <Button
                    title="Register"
                    type="primary"
                    customStyles="px-5 shadow-lg"
                  />
                </div>

                <div className="absolute top-0 right-0 mt-3 mr-2">
                  <IoClose
                    className="text-[#E61C5D] cursor-pointer size-5 shadow-md rounded-md"
                    onClick={toggleMenu}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <IoMenu
            className="text-[#E61C5D] cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
