import React from "react";

export default function Alert(props) {
  return (
    props.alert && (
      <div className="absolute top-0 w-full bg-green-400 p-2" id="alertBanner">
        <div className="flex justify-between items-center sm:px-10">
          <div>
            <strong>{props.alert.type}</strong>
            {", "}
            <span className="font-semi-bold">{props.alert.msg}</span>
          </div>
          <div>
            <button onClick={props.handleAlert}>
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
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  );
}
