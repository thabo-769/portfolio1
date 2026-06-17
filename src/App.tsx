import { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Projects from "./Components/Projects";
import Refferals from "./Components/Refferals";
import Contact from "./Components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#121212" : "#ffffff",
        color: darkMode ? "#ffffff" : "#565449",
        minHeight: "100vh",
        transition: "all 0.3s ease",
      }}
    >
      <button
        onClick={toggleTheme}
        style={{
          
          top: "20px",
          right: "20px",
          
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: darkMode ? "#ffffff" : "#121212",
          color: darkMode ? "#121212" : "#ffffff",
        }}
      >
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </button>

      <div id="hero">
        <Header darkMode={darkMode} />
        <Hero darkMode={darkMode} />
      </div>

      <div id="about">
        <About darkMode={darkMode} />
      </div>

      <div id="skill">
        <Skill darkMode={darkMode} />
      </div>

      <div id="projects">
        <Projects darkMode={darkMode} />
      </div>

      <div id="refferals">
        <Refferals darkMode={darkMode} />
      </div>

      <div id="contact">
        <Contact darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;