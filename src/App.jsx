import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TextUtlits from "./pages/TextUtlits";
import News from "./pages/News";
import Color from "./components/Color";
import Home from "./pages/Home";
import Library from "./pages/Library";

function App() {
  const routePoints = [
    "General",
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];
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
              { link: "/Library", title: "Library" },
            ]}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Text" element={<TextUtlits />} />

            <Route
              exact
              path="/All"
              element={
                <News
                  key="General"
                  category="General"
                  country="in"
                  pageSize={6}
                />
              }
            />

            {routePoints.map((routePoint) => {
              return (
                <>
                  <Route
                    key={routePoint}
                    path={`/${routePoint}`}
                    exact
                    element={
                      <News
                        key={routePoint}
                        category={routePoint}
                        country="in"
                        pageSize={6}
                      />
                    }
                  />
                </>
              );
            })}

            {/* <Route
              exact
              path="/Business"
              element={
                <News
                  key="Business"
                  category="Business"
                  country="in"
                  pageSize={6}
                />
              }
            />
            <Route
              exact
              path="/Entertainment"
              element={
                <News
                  key="Entertainment"
                  category="Entertainment"
                  country="in"
                  pageSize={6}
                />
              }
            />
            <Route
              exact
              path="/General"
              element={
                <News
                  key="General"
                  category="General"
                  country="in"
                  pageSize={6}
                />
              }
            />
            <Route
              exact
              path="/Health"
              element={
                <News
                  key="Health"
                  category="Health"
                  country="in"
                  pageSize={6}
                />
              }
            />
            <Route
              exact
              path="/Science"
              element={
                <News
                  key="Science"
                  category="Science"
                  country="in"
                  pageSize={6}
                />
              }
            />
            <Route
              exact
              path="/Sports"
              element={
                <News
                  key="Sports"
                  category="Sports"
                  country="in"
                  pageSize={6}
                />
              }
            />
            <Route
              exact
              path="/Technology"
              element={
                <News
                  key="Technology"
                  category="Technology"
                  country="in"
                  pageSize={6}
                />
              }
            /> */}
            <Route path="/Library" element={<Library />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
