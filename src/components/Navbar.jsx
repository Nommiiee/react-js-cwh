import React, { useState } from "react";
import PropTypes from "prop-types";

import Logo from "../assets/logo.svg";

export default function Navbar(Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    return isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  if (isOpen) {
    console.log("open");
  } else {
    console.log("close");
  }

  return (
    <>
      <div className="w-full bg-gray-800 text-gray-200">
        <nav className="w-full h-20 p-4 flex justify-center border-2 border-white items-center ">
          <ul className="w-11/12 flex items-center justify-between text-xl ">
            <li className="">
              <a href="/" className="flex items-center gap-x-4">
                <img src={Logo} alt="" /> ReactApp
              </a>
            </li>
            <div
              className={`w-10/12  h-screen fixed p-6 top-0 right-0 z-50 flex flex-col bg-gray-800 items-end transform transition-all lg:relative lg:flex-row lg:h-0 lg:items-center lg:justify-end lg:max-w-max lg:z-0 lg:translate-x-0 ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
              id="menu"
            >
              <div className="p-2 lg:hidden">
                <button className="" onClick={toggleMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="w-full p-2 lg:hidden">
                <div className="bg-white rounded-sm shadow-lg w-full text-gray-800 flex items-center ">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full p-2 focus:outline-none"
                    name="location"
                    id="location"
                  />
                  <button className=" bg-white">
                    <svg
                      className="w-8 h-8 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {
                <div className="flex flex-col justify-center items-end lg:flex-row lg:justify-end lg:gap-x-8">
                  {Props.navItems.map((item) => {
                    return (
                      <li className="p-2  flex justify-end " key={item.link}>
                        <a href={item.link} className="">
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </div>
              }
            </div>
            <li className="lg:hidden">
              <button className="" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

Navbar.propTypes = {
  navItems: PropTypes.array.isRequired,
};
