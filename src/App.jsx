import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TextUtlits from "./pages/TextUtlits";
import News from "./pages/News";
import Color from "./components/Color";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <div className="w-full h-full ">
        <Color />
          <Navbar
            navItems={[
              { link: "/", title: "Home" },
              { link: "/Text", title: "Text Utils" },
              { link: "/News", title: "News App" },
            ]}
          />
          <Routes>
            <Route path="/" element={<TextUtlits />} />
            <Route path="/Text" element={<TextUtlits />} />
            <Route path="/News" element={<News />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
