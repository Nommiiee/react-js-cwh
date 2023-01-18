import React, { useState } from "react";
import "./assets/css/App.css";
import Navbar from "./components/Navbar";
import UpperCaseForm from "./components/UpperCaseForm";
import Alert from "./components/Alert";
import Colors from "./components/Colors";

function App() {
  const [theme, setTheme] = useState("light ");

  const [color, setColor] = useState(null);

  const [alert, setAlert] = useState(null);

  const displayAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const handleAlert = () => {
    setAlert(null);
  };

  const toggleDarkMode = (e) => {
    if (theme === "dark" && localStorage.getItem("theme")) {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      displayAlert("Success", "Theme Changed!");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      displayAlert("Dark", "Theme Changed");
      localStorage.setItem("theme", "dark");
    }

    const btn = document.getElementById("darkModeToggle");
    btn.classList.add("scale-95");
    btn.classList.add("translate-y-1");
    setTimeout(() => {
      btn.classList.remove("scale-95");
      btn.classList.remove("translate-y-1");
    }, 75);
  };

  return (
    <>
      <Navbar
        navText1="Home"
        navText2="Blog"
        navText3="Projects"
        navText4="Services"
        navText5="About Me"
        navLink1="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        navLink2="/"
        navLink3="/"
        navLink4="/"
        navLink5="/"
        btnLink1="/"
        btnLink2="/"
      />
      <UpperCaseForm alert={displayAlert} />
      <Alert alert={alert} handleAlert={handleAlert} />
      <Colors handleDarkMode={toggleDarkMode} />
    </>
  );
}

export default App;
