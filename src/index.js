import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/outfit";
import "@fontsource/roboto";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import { Experience } from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Experience />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
