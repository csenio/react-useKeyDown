import React from "react";
import ReactDOM from "react-dom";
import useKeyDown from "./useKeyDown";

function App() {
  const keys = useKeyDown();
  return (
    <div className="App">
      <h1>Press multiple keys and see them appear</h1>
      <h2>{keys.join("-")}</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
