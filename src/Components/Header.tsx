import styled from "styled-components";

type HeaderProps = {
  darkMode: boolean;
};

const HeaderWrapper = styled.header<{ darkMode: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${(props) =>
    props.darkMode ? "rgba(18,18,18,0.85)" : "rgba(255,255,255,0.85)"};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid
    ${(props) => (props.darkMode ? "#222222" : "#e5e5e5")};
  transition: background 0.3s ease;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.span<{ darkMode: boolean }>`
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#121212")};
  transition: color 0.3s ease;
`;

const Nav = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 600px) {
    gap: 1rem;
  }
`;

const NavLink = styled.a<{ darkMode: boolean }>`
  text-decoration: none;
  color: ${(props) => (props.darkMode ? "#cccccc" : "#444444")};
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => (props.darkMode ? "#ffffff" : "#121212")};
  }
`;

function Header({ darkMode }: HeaderProps) {
  return (
    <HeaderWrapper darkMode={darkMode}>
      <Inner>
        <Logo darkMode={darkMode}>Thabo Tshabangu</Logo>
        <Nav>
          <li><NavLink darkMode={darkMode} href="#hero">Home</NavLink></li>
          <li><NavLink darkMode={darkMode} href="#about">About</NavLink></li>
          <li><NavLink darkMode={darkMode} href="#skill">Skills</NavLink></li>
          <li><NavLink darkMode={darkMode} href="#projects">Projects</NavLink></li>
          <li><NavLink darkMode={darkMode} href="#contact">Contact</NavLink></li>
        </Nav>
      </Inner>
    </HeaderWrapper>
  );
}

export default Header;