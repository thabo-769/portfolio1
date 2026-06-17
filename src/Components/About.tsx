import styled from "styled-components";

type AboutProps = { darkMode: boolean };

const Section = styled.div`
  padding: 5rem 0;
  border-top: 1px solid;
  border-color: inherit;
`;

const Label = styled.span<{ $dark: boolean }>`
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  color: ${({ $dark }) => ($dark ? "#666666" : "#aaaaaa")};
`;

const Title = styled.h2<{ $dark: boolean }>`
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 1rem;
  color: ${({ $dark }) => ($dark ? "#ffffff" : "#111111")};
`;

const Bar = styled.div<{ $dark: boolean }>`
  width: 40px;
  height: 3px;
  border-radius: 2px;
  margin-bottom: 1.75rem;
  background: ${({ $dark }) => ($dark ? "#444444" : "#cccccc")};
`;

const Body = styled.p<{ $dark: boolean }>`
  font-size: 1rem;
  line-height: 1.85;
  max-width: 680px;
  color: ${({ $dark }) => ($dark ? "#aaaaaa" : "#555555")};
`;

function About({ darkMode }: AboutProps) {
  return (
    <Section>
      <Label $dark={darkMode}>About Me</Label>
      <Title $dark={darkMode}>Who I Am</Title>
      <Bar $dark={darkMode} />
      <Body $dark={darkMode}>
        I don't just write code — I build experiences. As a software developer,
        I am passionate about creating innovative digital solutions that help
        people and businesses achieve more. I enjoy turning ambitious ideas into
        reality, continuously expanding my knowledge, and developing applications
        that combine creativity, performance, and purpose. Every project is an
        opportunity to learn, grow, and make a meaningful contribution through
        technology.
      </Body>
    </Section>
  );
}

export default About;