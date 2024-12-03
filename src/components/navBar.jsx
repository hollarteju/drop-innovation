import { Fragment } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

// import { FaBars } from "react-icons/fa";
// import { FaXmark } from "react-icons/fa6";
import Logo from "../assets/drp-logo.jpg";

export default function NavBar() {
  const [isopen, setIsOpen] = useState(false);
  const [activeIndex, setActiveindex] = useState(0);
  const location = useLocation();
  const currentPath = location.pathname;
  const path = [
    "/",
  ];
  let Links = [
    { link: "Home" },
    { link: "About Us" },
    { link: "Our Service" },
  ];

  return (
    <>
      {path.includes(currentPath) && (
        <nav className="py-4 text-center border-b-2 border-gray-400 items-center">
          <div
            className="flex justify-between  px-3 lg:px-11 text-[#363537] "
          >
            <div className="flex items-center justify-between lg:w-2/3 ">
              <div className="">
                <Link to="/">
                  <img src={Logo} width={100} height={100} alt="logo" />
                </Link>
              </div>
              <div>
                <ul className=" hidden lg:flex gap-32">
                  {Links.map((links, index) => (
                    <li
                      key={links.name}
                      className={`${
                        activeIndex === index
                          ? "text-[#16BA16]  border-[#16BA16]"
                          : ""
                      } lg:text-sm cursor-pointer pb-2 font-semibold`}
                      onClick={() => setActiveindex(index)}
                    >
                      {links.link}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className=" hidden lg:flex items-center gap-5 pr-11">
              <Link to="/signIn">
                <button className="bg-gradient-to-r from-[#16BA16] to-[#FFD700] p-[1px] rounded-[40px]">
                  <span className="flex items-center justify-center w-full bg-white text-[#363537] font-medium rounded-[38px] px-12 py-2">
                    Join Us
                  </span>
                </button>
              </Link>
            </div>
            <div className="flex items-center lg:hidden">
              <RiMenu3Fill size={30} onClick={() => setIsOpen(true)} />
            </div>
          </div>

          {/*mobile view*/}
          {isopen && (
            <div className="fixed inset-0 bg-white z-50  space-y-4">
              <div className="flex flex-col w-full  bg-white z-50  overflow-x-auto">
                <div
                  className="flex justify-between items-center mb-8 border-b border-[#9C9C9C] px-4"
                  onClick={() => setIsOpen(false)}
                >
                  <Link to="/">
                    <img src={Logo} alt="logo" className="w-24" />
                  </Link>
                  <RiCloseFill
                    size={30}
                    className="bg-[#BEECBE] rounded-full p-1"
                  />
                </div>

                <div className=" w-full border-b  border-[#9C9C9C]">
                  <ul className="flex flex-col space-y-4 pb-11 px-4">
                    {Links.map((links, index) => (
                      <li
                        key={links.name}
                        className="text-[18px] cursor-pointer pb-4 hover:text-[#16BA16] font-medium"
                        onClick={() => {
                          setActiveindex(index);
                          setIsOpen(false); // Close menu on link click
                        }}
                      >
                        {links.link}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="flex flex-col space-y-4 pt-8 px-4"
                  onClick={() => setIsOpen(false)}
                >

                  <button className="bg-gradient-to-r from-[#16BA16] to-[#FFD700] p-[1px] rounded-[40px]">
                    <Link to="/signIn">
                      <span className="flex items-center justify-center w-full bg-white text-[#363537] font-medium rounded-[38px] p-2 ">
                        Join Us
                      </span>
                    </Link>
                  </button>
                 
                </div>
              </div>
            </div>
          )}
        </nav>
      )}
    </>
  );
}
