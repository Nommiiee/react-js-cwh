import React from "react";
import { Link } from "react-router-dom";
import NewsImage from "../assets/News.webp";
import TextImage from "../assets/Text.webp";

export default function Home() {
  return (
    <>
      <div className="w-full h-full flex justify-center">
        <div className="w-11/12 h-full flex flex-wrap justify-between ">
          <div className="w-full md:w-6/12 p-4">
            <Link to="Text">
              <div className="shadow-md rounded-md p-4 hover:scale-105 transition-all transform duration-100 cursor-pointer dark:bg-gray-100 dark:text-slate-900">
                <div className="">
                  <img
                    className="w-full h-28 object-cover rounded-md shadow-md "
                    src={TextImage}
                    alt="Text Image"
                  />
                </div>
                <div className="mt-4">
                  <h1 className="text-2xl font-bold">
                    Take A Look At Text Utils
                  </h1>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores sed nulla veritatis unde repellat itaque saepe quis
                    eligendi. Quod, magnam.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full md:w-6/12 p-4">
            <Link to="News">
              <div className="shadow-md rounded-md p-4 hover:scale-105 transition-all transform duration-100 cursor-pointer dark:bg-gray-100 dark:text-slate-900">
                <div className="">
                  <img
                    className="w-full h-28 object-cover rounded-md shadow-md "
                    src={NewsImage}
                    alt="News App Image"
                  />
                </div>
                <div className="mt-4">
                  <h1 className="text-2xl font-bold">
                    Navigate To The News App
                  </h1>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores sed nulla veritatis unde repellat itaque saepe quis
                    eligendi. Quod, magnam.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
