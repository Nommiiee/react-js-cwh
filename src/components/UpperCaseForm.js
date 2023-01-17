import React, { useState } from "react";

export default function UpperCaseForm(props) {
  const [text, setText] = useState("Sample Text");

  const handleOnChange = (e) => {
    setText(e.target.value.toUpperCase());
  };

  const handleOnClick = (e) => {
    setText(text.toUpperCase());
  };

  return (
    <>
      <div className="w-full flex items-center justify-center p-10">
        <div className="w-6/12 ">
          <h1 className="text-center text-2xl font-bold">
            Lowercase to Uppercase
          </h1>
          <div className="w-full">
            <div className="w-full flex flex-col items-center justify-center pt-10">
              <div className="w-full flex flex-col text-lg">
                <label htmlFor="lowerCaseText">Text to convert</label>
                <textarea
                  rows="5"
                  className="border-2 border-black rounded-lg p-2 text-md"
                  type="text"
                  value={text}
                  onChange={handleOnChange}
                  id="lowerCaseText"
                />
              </div>
              <div className="pt-4">
                <button
                  onClick={handleOnClick}
                  className="text-xl text-center w-96 h-10 rounded-lg text-white  font-serif bg-blue-600 hover:bg-blue-500 transition duration-75 hover:scale-105"
                >
                  Click To Convert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
