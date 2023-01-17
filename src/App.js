import "./assets/css/App.css";
import Navbar from "./components/Navbar";
import UpperCaseForm from "./components/UpperCaseForm";

function App() {
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
      <UpperCaseForm />
    </>
  );
}

export default App;
