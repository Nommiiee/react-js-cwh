import React from "react";

export default function NewsPost(props) {
  return (
    <>
      <div className="w-full md:w-6/12 lg:w-4/12 p-4 ">
        <div className="w-full h-full border-2 border-black  rounded-lg shadow-lg flex flex-col justify-between ">
          <div className="w-full h-40  rounded-lg flex items-center justify-center">
            <img
              src={props.imgUrl}
              alt="News Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full  h-full p-4 flex flex-col gap-4 ">
            <div className="w-full ">
              <h1 className="text-xl font-bold text-gray-800">
                {props.title.slice(0, 50) + "..."}
              </h1>
              <p className="mt-2">
                <span className="text-gray-600">By: </span>
                <span className="text-gray-800">{props.author}</span>
              </p>
            </div>
            <div className="text-md">
              <p className="text-gray-600">
                {props.description.slice(0, 150) + "..."}
              </p>
            </div>
          </div>
          <div className="w-full flex justify-end items-center pb-5 pr-5">
            <a
              href={props.url}
              className="font-semibold cursor-pointer py-1 px-4 hover:bg-opacity-80 hover:scale-95 hover:translate-y-1  transform transition-all rounded-md shadow-md bg-gray-900 text-gray-50"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
