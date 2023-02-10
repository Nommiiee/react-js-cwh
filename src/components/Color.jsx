import React, { useState } from "react";

export default function Color() {
  const [color, setColor] = useState({
    darkColor: "dark:bg-gray-100",
    darkText: "dark:text-slate-900",
  });

  function handleColorOpen() {
    const colorBtn = document.querySelectorAll(".color-btn");
    colorBtn.forEach((btn) => {
      btn.classList.toggle("scale-0");
    });
  }

  function handleDarkMode(bgColor, textColor) {
    const document = window.document.querySelector("html");
    document.classList.add("dark");

    setColor({
      darkColor: bgColor,
      darkText: textColor,
    });

    const body = window.document.querySelector("body");
    if (
      body.classList.contains(color.darkColor) &&
      body.classList.contains(color.darkText)
    ) {
      body.classList.replace(color.darkColor, bgColor);
      body.classList.replace(color.darkText, textColor);
    } else {
      body.classList.add(bgColor);
      body.classList.add(textColor);
    }

    handleColorOpen();
    return;
  }

  return (
    <>
      <div className="fixed bottom-10 right-10 z-50">
        <div className="flex flex-col-reverse gap-y-4 ">
          <button
            onClick={handleColorOpen}
            className="w-12 h-12 rounded-full p-2 bg-slate-900 text-gray-100 z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-full h-full "
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
              />{" "}
            </svg>
          </button>
          <button
            onClick={() => {
              handleDarkMode("dark:bg-pink-900", "dark:text-gray-100");
            }}
            className=" bg-pink-500 text-gray-100 w-12 h-12 rounded-full p-2 z-0 color-btn scale-0  transition-all transform duration-100  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-full h-full "
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
              />{" "}
            </svg>
          </button>
          <button
            onClick={() => {
              handleDarkMode("dark:bg-blue-500", "dark:text-gray-100");
            }}
            className=" bg-blue-700 text-gray-100 w-12 h-12 rounded-full p-2 z-0 color-btn scale-0 transition-all transform duration-200  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-full h-full "
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
              />{" "}
            </svg>
          </button>
          <button
            onClick={() => {
              handleDarkMode("dark:bg-slate-500", "dark:text-gray-100");
            }}
            className="bg-slate-700 text-gray-100 w-12 h-12 rounded-full p-2  z-0 color-btn scale-0  transition-all transform duration-300  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-full h-full "
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
              />{" "}
            </svg>
          </button>
          <button
            onClick={() => {
              handleDarkMode("dark:bg-orange-500", "dark:text-gray-100");
            }}
            className="bg-orange-700 text-gray-100 w-12 h-12 rounded-full p-2 z-0 color-btn scale-0 transition-all transform duration-[400ms]  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-full h-full "
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
              />{" "}
            </svg>
          </button>
          <button
            onClick={() => {
              handleDarkMode("dark:bg-gray-100", "dark:text-gray-900");
            }}
            className="bg-gray-100 text-gray-900 w-12 h-12 rounded-full p-2 z-0 color-btn scale-0 transition-all transform duration-[500ms] border border-gray-900  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-full h-full "
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
              />{" "}
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
