import React, { useState } from "react";

export default function Colors(props) {
  const [menuState, setMenuState] = useState(false);
  const [theme, setTheme] = useState({
    dark: {
      bgColor: "bg-slate-900",
      textColor: "text-gray-50",
    },
  });

  function handleThemeChange(bColor, tColor, btn) {
    document.body.classList.remove(theme.dark.bgColor);
    document.body.classList.remove(theme.dark.tColor);

    document.body.classList.add(bColor);
    document.body.classList.add(tColor);

    document.documentElement.classList.add("dark");

    setTheme({
      dark: {
        bgColor: bColor,
        textColor: tColor,
      },
    });

    toggleMenu();
  }

  const toggleMenu = () => {
    if (!menuState) {
      setMenuState(true);
    } else {
      setMenuState(false);
    }
  };


  function disableDarkMode() {
    document.documentElement.classList.remove("dark");
  }

  if (!menuState) {
    document.querySelectorAll(".colorsBtn").forEach((btn) => {
      btn.classList.add("scale-0");
    });
  } else {
    document.querySelectorAll(".colorsBtn").forEach((btn) => {
      btn.classList.remove("scale-0");
    });
  }

  return (
    <>
      <div className=" rounded-full max-w-min flex flex-col group transition-all transform absolute bottom-10 right-10">
        <button
          title="Theme Change"
          onClick={toggleMenu}
          className="rounded-full w-12 h-12 p-1 flex  items-center justify-center bg-black text-white z-50 "
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <button
          title="Theme Change To Blue"
          onClick={() =>
            handleThemeChange("dark:bg-blue-800", "dark:text-gray-50", this)
          }
          className="colorsBtn duration-100  scale-0 -translate-y-14 transition-all rounded-full w-12 h-12 p-2 flex items-center justify-center bg-blue-500 text-white absolute z-0"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
            />
          </svg>
        </button>
        <button
          title="Theme Change To Green"
          onClick={() =>
            handleThemeChange("dark:bg-green-800", "dark:text-gray-50", this)
          }
          className="colorsBtn duration-300 scale-0 -translate-y-28 transition-all rounded-full w-12 h-12 p-2 flex items-center justify-center bg-green-500 text-white absolute z-10"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
            />
          </svg>
        </button>
        <button
          title="Theme Change To Pink"
          onClick={() =>
            handleThemeChange("dark:bg-pink-800", "dark:text-gray-50", this)
          }
          className="colorsBtn duration-500 scale-0 -translate-y-44 top-2 transition-all rounded-full w-12 h-12 p-2 flex items-center justify-center bg-pink-500 text-white absolute z-20"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
            />
          </svg>
        </button>
        <button
          title="Theme Change To slate"
          onClick={() =>
            handleThemeChange("dark:bg-slate-900", "dark:text-gray-50", this)
          }
          className="colorsBtn duration-[600ms] scale-0 -translate-y-56 transition-all rounded-full w-12 h-12 p-2 flex items-center justify-center bg-slate-900 text-white absolute z-20"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
            />
          </svg>
        </button>
        <button
          title="Theme Change To normal"
          onClick={() => disableDarkMode()}
          className="colorsBtn duration-[700ms] scale-0 -translate-y-72 top-2  transition-all rounded-full w-12 h-12 p-2 flex items-center justify-center bg-gray-50 text-black absolute z-20 border-2 boder-black"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
