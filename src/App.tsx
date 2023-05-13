import React from "react";
import logo from "./logo.svg";
import { Button } from "antd";
import "antd/dist/reset.css";
import "./App.css";
import Viewport from "./layout/Viewport/Viewport";

function App() {
  return (
    <div className="App">
      <Viewport />
    </div>
  );
}

export default App;
