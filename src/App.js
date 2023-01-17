import logo from "./assets/img/logo.svg";
import "./assets/css/App.css";

function App() {
  return (
    <div className="w-full flex items-center justify-center h-screen bg-gray-900 text-white">
      <header className="w-6/12 h-5/6 text-center flex flex-col gap-4-center justify-center">
        <img src={logo} id="logo" className="m-auto w-10/12" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
