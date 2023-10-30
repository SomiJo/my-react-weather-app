import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This App was coded by Somaye Jodeir and is{" "}
          <a
            href="https://github.com/SomiJo/my-react-weather-app.git"
            target="_blank"
            rel="noreferrer">
            open_source on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
