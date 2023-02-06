import { useState } from "react";
import "./App.css";
import TextUtlits from "./pages/TextUtlits";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-full ">
        <Navbar
          navItems={[
            { link: "/", title: "Home" },
            { link: "/Text", title: "Text Utils" },
            { link: "/News", title: "News App" },
          ]}
        />
        <TextUtlits />
      </div>
    </>
  );
}

export default App;
