import styled from "styled-components";

type AboutProps = {
  darkMode: boolean;
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
`;

const AboutSection = styled.section`
  max-width: 800px;
  text-align: left;
`;

const AboutTitle = styled.h2<{ darkMode: boolean }>`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#121212")};
`;

const AboutContent = styled.p<{ darkMode: boolean }>`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${(props) => (props.darkMode ? "#d1d1d1" : "#565449")};
`;

function About({ darkMode }: AboutProps) {
  return (
    <Container>
      <AboutSection>
        <AboutTitle darkMode={darkMode}>
          About Me
        </AboutTitle>

        <AboutContent darkMode={darkMode}>
          I don't just write code. I build experiences. As a software
          developer, I am passionate about creating innovative digital
          solutions that help people and businesses achieve more. I enjoy
          turning ambitious ideas into reality, continuously expanding my
          knowledge, and developing applications that combine creativity,
          performance, and purpose. Every project is an opportunity to
          learn, grow, and make a meaningful contribution through
          technology.
        </AboutContent>
      </AboutSection>
    </Container>
  );
}

export default About;