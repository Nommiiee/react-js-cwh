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
import Blog from "./pages/Blog";
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
        <Navbar
          navText1="Home"
          navText2="Blog"
          navText3="Projects"
          navText4="Services"
          navText5="About Me"
          navLink1="/"
          navLink2="/Blog"
          navLink3="/Projects"
          navLink4="/Services"
          navLink5="/About"
          btnLink1="/"
          btnLink2="/"
        />
        <Routes>
          <Route path="/" element={<UpperCaseForm alert={displayAlert} />} />
          <Route path="/Blog" element={<Blog title="TCelebrities, TikTok, and a Cat Bot Are Crashing Chess.com" description="Millions of eager players have overrun the legacy website" date="2023-01-25T12:00:00Z" content="Trending in 2023 is one of the worlds oldest games played on a 17-year-old website: Chess.com. The site, which lets people take lessons, solve puzzles, and match up against computers or other players… " image="https://images.unsplash.com/photo-1674787246820-cb208f639bed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=798&q=80"/>}  />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
