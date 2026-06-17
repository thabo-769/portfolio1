import styled from "styled-components";
import ProfilePic from "../assets/images/profile.png";

type HeroProps = {
  darkMode: boolean;
};

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: 9rem 0 5rem; /* top accounts for fixed header */
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 2rem;
    padding: 7rem 0 3rem;
    text-align: center;
  }
`;

const TextSide = styled.div`
  flex: 1;
`;

const Tag = styled.span<{ $dark: boolean }>`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
  background: ${({ $dark }) =>
    $dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"};
  color: ${({ $dark }) => ($dark ? "#aaaaaa" : "#777777")};
`;

const Title = styled.h1<{ $dark: boolean }>`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  letter-spacing: -1px;
  margin-bottom: 1.1rem;
  color: ${({ $dark }) => ($dark ? "#ffffff" : "#111111")};
`;

const Sub = styled.p<{ $dark: boolean }>`
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 2.25rem;
  color: ${({ $dark }) => ($dark ? "#aaaaaa" : "#666666")};
  max-width: 480px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Btn = styled.a<{ $dark: boolean; $primary?: boolean }>`
  padding: 0.75rem 1.75rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;
  will-change: transform;

  background: ${({ $primary, $dark }) =>
    $primary ? ($dark ? "#ffffff" : "#111111") : "transparent"};
  color: ${({ $primary, $dark }) =>
    $primary ? ($dark ? "#111111" : "#ffffff") : ($dark ? "#ffffff" : "#111111")};
  border: 1.5px solid
    ${({ $primary, $dark }) =>
      $primary ? "transparent" : ($dark ? "#444444" : "#cccccc")};

  &:hover {
    opacity: 0.85;
    transform: translateY(-2px);
  }
`;

const ImageSide = styled.div<{ $dark: boolean }>`
  flex-shrink: 0;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    background: ${({ $dark }) =>
      $dark
        ? "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)"
        : "radial-gradient(circle, rgba(0,0,0,0.05) 0%, transparent 70%)"};
  }
`;

const Avatar = styled.img`
  width: 260px;
  height: 260px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

function Hero({ darkMode: dark }: HeroProps) {
  return (
    <Section>
      <TextSide>
        <Tag $dark={dark}>👋 Available for work</Tag>
        <Title $dark={dark}>Hi, I'm Thabo Tshabangu</Title>
        <Sub $dark={dark}>
          A Software Developer passionate about building modern, responsive, and
          impactful digital experiences. I specialize in transforming ideas into
          functional websites and applications that solve real-world problems.
        </Sub>
        <Buttons>
          <Btn $dark={dark} $primary href="#projects">View Projects</Btn>
          <Btn $dark={dark} href="#contact">Contact Me</Btn>
        </Buttons>
      </TextSide>

      <ImageSide $dark={dark}>
        <Avatar src={ProfilePic} alt="Thabo Tshabangu" />
      </ImageSide>
    </Section>
  );
}

export default Hero;