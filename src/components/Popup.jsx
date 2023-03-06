import React from "react";

export default function Popup(props) {
  return (
    <>
      <div className="w-full absolute flex justify-center top-0 transform transition-all">
        <div className="z-50 w-96  text-center text-lg font-medium p-4 text-green-500 bg-green-200">
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
}
