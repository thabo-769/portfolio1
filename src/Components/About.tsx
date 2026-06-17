import styled from "styled-components";

type AboutProps = {
  darkMode: boolean;
};

const Container = styled.div`
  padding: 5rem 8rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    padding: 4rem 2rem;
  }
`;

const SectionLabel = styled.span<{ darkMode: boolean }>`
  display: block;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  color: ${(props) => (props.darkMode ? "#888888" : "#999999")};
`;

const AboutTitle = styled.h2<{ darkMode: boolean }>`
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 1.5rem;
  letter-spacing: -0.5px;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#121212")};
`;

const Divider = styled.div<{ darkMode: boolean }>`
  width: 48px;
  height: 3px;
  border-radius: 2px;
  margin-bottom: 1.75rem;
  background: ${(props) => (props.darkMode ? "#444444" : "#cccccc")};
`;

const AboutContent = styled.p<{ darkMode: boolean }>`
  font-size: 1.05rem;
  line-height: 1.85;
  max-width: 720px;
  color: ${(props) => (props.darkMode ? "#aaaaaa" : "#555555")};
`;

function About({ darkMode }: AboutProps) {
  return (
    <Container>
      <SectionLabel darkMode={darkMode}>About Me</SectionLabel>
      <AboutTitle darkMode={darkMode}>Who I Am</AboutTitle>
      <Divider darkMode={darkMode} />
      <AboutContent darkMode={darkMode}>
        I don't just write code — I build experiences. As a software developer,
        I am passionate about creating innovative digital solutions that help
        people and businesses achieve more. I enjoy turning ambitious ideas into
        reality, continuously expanding my knowledge, and developing applications
        that combine creativity, performance, and purpose. Every project is an
        opportunity to learn, grow, and make a meaningful contribution through
        technology.
      </AboutContent>
    </Container>
  );
}

export default About;