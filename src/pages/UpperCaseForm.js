import React, { useEffect, useState } from "react";

export default function UpperCaseForm(props) {
  const [text, setText] = useState("");
  const [timer, setTimer] = useState(Date);

  function tick() {
    setTimer(Date);
  }

  useEffect(() => {
    setInterval(() => {
      setTimer(() => {
        tick();
      });
    }, 1000);
  }, []);
  
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleUpperCase = (e) => {
    setText(text.toUpperCase());
    props.alert("Success", "changed to the uppercase!");
  };

  const handleLowerCase = (e) => {
    setText(text.toLowerCase());
    props.alert("Success", "changed to the lowercase!");
  };

  const handleReverse = (e) => {
    setText(text.split("").reverse().join(""));
    props.alert("Success", "changed to the reverse text!");
  };

  const handleReset = (e) => {
    setText("");
    document.getElementById("inputText").value = "";
    props.alert("Success", "everything has been reset!");
  };

  const handleCopy = (e) => {
    navigator.clipboard.writeText(text);
    props.alert("Success", "Copied to clipboard!");
  };

  const handleAlternatingCase = (e) => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        newText += text[i].toLowerCase();
      } else {
        newText += text[i].toUpperCase();
      }
    }
    setText(newText);
    props.alert("Success", "changed to alternating text!");
  };

  const handleDownload = (e) => {
    const file = new Blob([text], { type: "text/plain" });
    const element = e.target;
    element.href = URL.createObjectURL(file);
    element.download = "text.txt";

    props.alert("Success", "file downloaded started!");
  };

  const handleTitleCase = (e) => {
    const words = text.split(" ");
    const newWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    setText(newWords.join(" "));
    props.alert("Success", "Title Case Has Been Applied!");
  };

  const wordCount = (str) => {
    //count words without sapces
    let response = str.split(/\s+/).filter((word) => word.length > 0).length;
    return response;
  };

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-8 p-10  relative">
        <div className="w-full xl:max-w-6xl ">
          <h1 className="text-center text-2xl font-bold">
            Text Utilities - Text to Uppercase, Lowercase, Titlecase, Reverse,
            Mocking Case
          </h1>
          <div className="w-full ">
            <div className="w-full flex flex-col items-center justify-center pt-10">
              <div className="w-full flex flex-col text-lg font-semibold">
                <label htmlFor="inputText">Input Text</label>
                <textarea
                  rows="4"
                  className="focus:outline-gray-600 dark:bg-inherit focus:border-0 border border-black rounded-lg p-2 text-md font-normal  transition-all"
                  type="text"
                  // value={text}
                  onChange={handleOnChange}
                  id="inputText"
                />
              </div>
              <div className="mt-4 w-full flex flex-wrap items-center gap-4 text-white text-center text-md ">
                <button
                  onClick={handleUpperCase}
                  className=" px-4 py-1 rounded-md shadow-md bg-blue-600 hover:bg-blue-500 transition duration-75 hover:scale-105"
                >
                  To Upper Case
                </button>
                <button
                  onClick={handleLowerCase}
                  className=" px-4 py-1 rounded-md shadow-md bg-blue-600 hover:bg-blue-500 transition duration-75 hover:scale-105"
                >
                  To Lower Case
                </button>
                <button
                  onClick={handleTitleCase}
                  className=" px-4 py-1 rounded-md shadow-md bg-blue-600 hover:bg-blue-500 transition duration-75 hover:scale-105"
                >
                  To Title Case
                </button>
                <button
                  onClick={handleReverse}
                  className=" px-4 py-1 rounded-md shadow-md bg-blue-600 hover:bg-blue-500 transition duration-75 hover:scale-105"
                >
                  Reverse Text
                </button>
                <button
                  onClick={handleAlternatingCase}
                  className=" px-4 py-1 rounded-md shadow-md bg-blue-600 hover:bg-blue-500 transition duration-75 hover:scale-105"
                >
                  Alternating Case
                </button>

                <button
                  onClick={handleReset}
                  className=" px-4 py-1 rounded-md shadow-md bg-red-600 hover:bg-red-500 transition duration-75 hover:scale-105"
                >
                  Rest All
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:max-w-6xl">
          <div className="w-full">
            <div
              className="w-full flex flex-wrap items-center 
            justify-between"
            >
              <h2 className="text-xl font-semibold">Result</h2>
              <h3 className="text-md font-normal ">{timer}</h3>
            </div>
            <div>
              <p className="mt-4 ">
                Total Words : <span>{wordCount(text)}</span> | Total Characters
                : <span>{text.length}</span> | Reading Time :{" "}
                <span>{(0.008 * text.split(" ").length).toFixed(2)}</span>{" "}
                Minutes
              </p>
              <p className="mt-4 font-semibold text-lg flex flex-wrap gap-4 items-center justify-between">
                <span>Here's the preview of your text </span>{" "}
                <span className="flex flex-wrap gap-6 items-center justify-end">
                  <button
                    onClick={handleCopy}
                    className="text-white text-center px-4 py-1 text-sm font-base rounded-md shadow-md bg-blue-600 hover:bg-blue-500 transition duration-75 hover:scale-105"
                  >
                    Copy Text
                  </button>
                  <a
                    href="_blank"
                    role="button"
                    onClick={handleDownload}
                    className="text-white text-center px-4 py-1 text-sm font-base rounded-md shadow-md bg-blue-600 hover:bg-blue-500 transition duration-75 hover:scale-105"
                  >
                    Download File
                  </a>
                </span>
              </p>
              <p>
                <span>{text}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}