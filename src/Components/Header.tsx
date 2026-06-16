import styled from "styled-components";

type HeaderProps = {
  darkMode: boolean;
};

const Container = styled.div`
  width: 100%;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
`;

const Logo = styled.h1<{ darkMode: boolean }>`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#121212")};
  transition: color 0.3s ease;
`;

const Nav = styled.ul`
  display: flex;
  gap: 25px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li``;

const NavLink = styled.a<{ darkMode: boolean }>`
  text-decoration: none;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#121212")};
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: #888;
  }
`;

function Header({ darkMode }: HeaderProps) {
  return (
    <Container>
      <HeaderContainer>
        <Logo darkMode={darkMode}>My Portfolio</Logo>

        <Nav>
          <NavItem>
            <NavLink darkMode={darkMode} href="#home">
              Home
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink darkMode={darkMode} href="#about">
              About
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink darkMode={darkMode} href="#skills">
              Skills
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink darkMode={darkMode} href="#projects">
              Projects
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink darkMode={darkMode} href="#contact">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </HeaderContainer>
    </Container>
  );
}

export default Header;