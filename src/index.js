import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/outfit";
import "@fontsource/roboto";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import { Experience } from "./components/Experience";
import { Tech } from "./components/Tech";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Experience />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
