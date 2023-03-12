import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NewsCategories(props) {
  const [menu, setMenu] = useState(false);
  const [current, setCurrent] = useState("General");

  const menuItems = [
    "General",
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  onload = () => {
    console.log("loaded");
    const path = window.location.pathname.split("/")[1];
    setCurrent(path);
  };

  const toggleMenu = () => {
    menu ? setMenu(false) : setMenu(true);
  };

  const handleCurrent = (element) => {
    const path = window.location.pathname.split("/")[1];
    setCurrent(path);
    setMenu(false);
  };

  return (
    <>
      <div className="w-full flex justify-end items-center">
        <div className="w-48 relative">
          <button
            onClick={toggleMenu}
            className="px-2 py-1 rounded-sm shadow-sm text-left w-full flex justify-between items-center bg-white border border-black hover:bg-blue-200 focus:borde-2"
          >
            {current}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <div>
            {menu && (
              <ul className=" absolute top-10 transition-all transform w-full bg-white border border-black">
                {menu &&
                  menuItems.map((item) => {
                    return (
                      <li
                        className="w-full p-1 border-b border-gray-400 hover:bg-blue-200 "
                        key={item}
                      >
                        <Link className="w-full flex " to={"/" + item}>
                          <p className="w-full" onClick={handleCurrent}>
                            {item}
                          </p>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

NewsCategories.propTypes = {
  // target: PropTypes.array.isRequired,
};
