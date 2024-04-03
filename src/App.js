import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://www.htmlhints.com/article/how-to-create-toggle-switch/93">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://github.com/Satyabrata011">
          Satyabrata
        </a>{" "}
        | Powered by{" "}
       <a target="_blank" href="https://home.openweathermap.org/">
       © 2012 — 2024 OpenWeather ® All rights reserved
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
