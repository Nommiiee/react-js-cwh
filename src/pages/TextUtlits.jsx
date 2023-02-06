import React, { useState } from "react";

export default function TextUtlits() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCapitalize = () => {
    let newtext = text.split(" ");
    newtext = newtext.map((item) => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    });
    setText(newtext.join(" "));
  };

  const handleTitleCase = () => {
    let newtext = text.split(" ");
    newtext = newtext.map((item) => {
      return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    });
    setText(newtext.join(" "));
  };

  const handleClearAll = () => {
    setText("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <div className="w-full h-full flex justify-center">
        <div className="w-full h-full max-w-7xl">
          <div className="my-10 text-center">
            <h1 className="text-3xl md:text-4xl font-semibold">TextUtlits</h1>
            <p className="text-lg md:text-3xl font-medium ">
              Uppercase, Lowercase, Capitalize, Remove Extra Spaces, Copy Text,
              and much more.
            </p>
          </div>
          <div className="flex justify-center">
            <div className=" w-full h-full flex justify-center">
              <textarea
                className="w-11/12 lg:w-full h-full p-2 border border-gray-800 rounded-md"
                type="text"
                rows="5"
                onChange={handleChange}
                value={text}
              ></textarea>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center ">
            <div className="pt-10 w-11/12 lg:w-full flex flex-wrap items-center gap-8 font-semibold">
              <button
                onClick={handleUpperCase}
                className="w-4/12 md:w-32 bg-yellow-400 p-2 rounded-sm shadow-sm hover:opacity-90 hover:scale-105 transform transition-all duration-75 focus:outline-double"
              >
                Uppercase
              </button>
              <button
                onClick={handleLowerCase}
                className="w-4/12 md:w-32 bg-slate-900 text-gray-100 p-2 rounded-sm shadow-sm hover:bg-opacity-90 hover:scale-105 transform transition-all duration-75 focus:outline-double"
              >
                Lowercase
              </button>
              <button
                onClick={handleTitleCase}
                className="w-4/12 md:w-32 bg-orange-400 text-gray-900 p-2 rounded-sm shadow-sm hover:bg-opacity-90 hover:scale-105 transform transition-all duration-75 focus:outline-double"
              >
                Title Case
              </button>
              <button
                onClick={handleCapitalize}
                className="w-4/12 md:w-32 bg-blue-700 text-gray-100 p-2 rounded-sm shadow-sm hover:bg-opacity-90 hover:scale-105 transform transition-all duration-75 focus:outline-double"
              >
                Capatilize
              </button>
              <button
                onClick={handleCopy}
                className="w-4/12 md:w-32 bg-green-700 text-gray-100 p-2 rounded-sm shadow-sm hover:bg-opacity-90 hover:scale-105 transform transition-all duration-75 focus:outline-double"
              >
                Copy Text
              </button>
              <button
                onClick={handleClearAll}
                className="w-4/12 md:w-32 bg-red-600 text-gray-100 p-2 rounded-sm shadow-sm hover:bg-opacity-90 hover:scale-105 transform transition-all duration-75 focus:outline-double"
              >
                Clear All
              </button>
            </div>
            <div className="w-11/12 lg:w-full pt-10">
              <div className="w-full flex flex-wrap gap-4">
                <p className="">
                  <span className="font-semibold ">Your Text Summary</span>
                </p>
                <p className="">
                  <span className="font-semibold ">Words: </span>
                  {text.split(" ").filter((item) => item !== "").length}
                </p>
                <p className="">
                  <span className="font-semibold ">Characters: </span>
                  {text.length}
                </p>
                <p className="">
                  <span className="font-semibold ">Time to Read: </span>
                  {text.split(" ").filter((item) => item !== "").length *
                    0.008}{" "}
                  Minutes
                </p>
              </div>
              <div>
                <p className="font-semibold text-xl lg:text-2xl">Preview</p>
                <p className="text-gray-600 text-lg lg:text-xl">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
