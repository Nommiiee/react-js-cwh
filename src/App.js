// Library Imports
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Assets Imports
import "./assets/css/App.css";

// Components Imports
import Alert from "./components/Alert";
import Colors from "./components/Colors";
import Navbar from "./components/Navbar";

// Pages Imports
import UpperCaseForm from "./pages/UpperCaseForm";
import News from "./pages/News";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import About from "./pages/About";

// Actual App To Be Rendered
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
      <Alert alert={alert} handleAlert={handleAlert} />
      <Colors displayAlert={displayAlert} />
      <BrowserRouter>
        <Navbar navTest={["Home", "News", "Projects", "Services", "About Me"]} btnLink1="/" btnLink2="/" />
        <Routes>
        <Route path="/" element={<UpperCaseForm alert={displayAlert} />} />
          <Route path="/Home" element={<UpperCaseForm alert={displayAlert} />} />
          <Route path="/News" element={<News />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
