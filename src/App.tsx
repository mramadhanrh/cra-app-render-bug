import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // Uncomment useState line below to get 'App Rendered' Logged once
  const [count, setCount] = useState(0);
  console.log("App Rendered");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
