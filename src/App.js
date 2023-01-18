import React, { useState } from "react";
import "./assets/css/App.css";
import Navbar from "./components/Navbar";
import UpperCaseForm from "./components/UpperCaseForm";
import Alert from "./components/Alert";
import Colors from "./components/Colors";

function App() {
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
      <Colors displayAlert={displayAlert} />
    </>
  );
}

export default App;
