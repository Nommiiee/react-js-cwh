import React, { useState } from "react";

export default function TextUtlits() {
  const [text, setText] = useState("");

  const [options, setOptions] = useState({
    upperCase: false,
    lowerCase: false,
    titleCase: false,
  });

  const handleChange = (e) => {
    if (options.titleCase) {
      // handleTitleCase();
    } else if (options.lowerCase) {
      // setText(handleLowerCase());
    } else if (options.upperCase) {
      // handleUpperCase();
    } else {
      setText(e.target.value);
    }
  };

  const handleOptionChange = (option) => {
    for (let key of Object.keys(options)) {
      if (key === option) {
        setOptions((prevState) => {
          return { ...prevState, [key]: true };
        });
      } else {
        setOptions((prevState) => {
          return { ...prevState, [key]: false };
        });
      }
    }
  };

  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  const handleCapitalize = () => {
    let newText = text.split(".");
    newText = newText.map((item) => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    });
    setText(newText.join("."));
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
        <div className="w-11/12 h-full max-w-7xl">
          <div className="my-10 text-center">
            <h1 className="text-3xl md:text-4xl font-semibold">TextUtlits</h1>
            <p className="text-lg md:text-3xl  ">
              Uppercase, Lowercase, Capitalize, Remove Extra Spaces, Copy Text,
              and much more.
            </p>
          </div>
          <div className="flex justify-center">
            <div className=" w-full h-full flex justify-center">
              <textarea
                className="w-full h-full p-2 border border-gray-800 rounded-md"
                type="text"
                rows="5"
                onChange={handleChange}
                value={text}
              ></textarea>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center ">
            <div className="pt-10 w-full flex flex-wrap items-center gap-8 font-semibold">
              <button
                onClick={handleUpperCase}
                className="btn bg-yellow-400 text-gray-900"
              >
                Uppercase
              </button>
              <button onClick={handleLowerCase} className="btn bg-slate-900 ">
                Lowercase
              </button>
              <button
                onClick={handleTitleCase}
                className="btn bg-orange-400 text-gray-900"
              >
                Title Case
              </button>
              <button onClick={handleCapitalize} className="btn  bg-blue-700 ">
                Capatilize
              </button>
              <button onClick={handleCopy} className="btn  bg-green-700 ">
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
                  {String(
                    text.split(" ").filter((item) => item !== "").length * 0.008
                  ).substring(0, 4)}{" "}
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
