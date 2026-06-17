import { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import styled from "styled-components";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Projects from "./Components/Projects";
import Refferals from "./Components/Refferals";
import Contact from "./Components/Contact";

const PageWrapper = styled.div<{ $dark: boolean }>`
  background: ${({ $dark }) => ($dark ? "#121212" : "#f7f7f7")};
  color: ${({ $dark }) => ($dark ? "#ffffff" : "#333333")};
  min-height: 100vh;
  transition: background 0.3s ease, color 0.3s ease;
`;

/* Single horizontal spine — ALL sections align to this */
const Main = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 3rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;

const ThemeToggle = styled.button<{ $dark: boolean }>`
  position: fixed;
  top: 18px;
  right: 24px;
  z-index: 1100;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $dark }) => ($dark ? "#ffffff" : "#121212")};
  color: ${({ $dark }) => ($dark ? "#121212" : "#ffffff")};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
  transition: background 0.3s ease, color 0.3s ease;
  flex-shrink: 0;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <PageWrapper $dark={darkMode}>
      <ThemeToggle $dark={darkMode} onClick={() => setDarkMode((p) => !p)}>
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </ThemeToggle>

      <Header darkMode={darkMode} />

      <Main>
        <section id="hero">
          <Hero darkMode={darkMode} />
        </section>

        <section id="about">
          <About darkMode={darkMode} />
        </section>

        <section id="skill">
          <Skill darkMode={darkMode} />
        </section>

        <section id="projects">
          <Projects darkMode={darkMode} />
        </section>

        <section id="refferals">
          <Refferals darkMode={darkMode} />
        </section>

        <section id="contact">
          <Contact darkMode={darkMode} />
        </section>
      </Main>
    </PageWrapper>
  );
}

export default App;