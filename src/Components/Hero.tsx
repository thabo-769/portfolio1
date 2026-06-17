import styled from "styled-components";
import ProfilePic from "../assets/images/profile.png";

type HeroProps = {
  darkMode: boolean;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding: 8rem 8rem 4rem;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    gap: 2.5rem;
    padding: 6rem 2rem 3rem;
    text-align: center;
  }
`;

const HeroSection = styled.section`
  flex: 1;
  max-width: 560px;
`;

const HeroTag = styled.span<{ darkMode: boolean }>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  background: ${(props) =>
    props.darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"};
  color: ${(props) => (props.darkMode ? "#aaaaaa" : "#666666")};
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const HeroTitle = styled.h1<{ darkMode: boolean }>`
  font-size: 2.8rem;
  font-weight: 700;
  margin: 0 0 1rem;
  line-height: 1.15;
  letter-spacing: -1px;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#121212")};

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p<{ darkMode: boolean }>`
  font-size: 1rem;
  line-height: 1.75;
  margin-bottom: 2.25rem;
  color: ${(props) => (props.darkMode ? "#aaaaaa" : "#666666")};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled.a<{ darkMode: boolean }>`
  padding: 0.75rem 1.75rem;
  font-size: 0.95rem;
  font-weight: 600;
  background-color: ${(props) => (props.darkMode ? "#ffffff" : "#121212")};
  color: ${(props) => (props.darkMode ? "#121212" : "#ffffff")};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.2s ease, transform 0.2s ease;

  &:hover {
    opacity: 0.85;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled.a<{ darkMode: boolean }>`
  padding: 0.75rem 1.75rem;
  font-size: 0.95rem;
  font-weight: 600;
  background-color: transparent;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#121212")};
  border: 1.5px solid ${(props) => (props.darkMode ? "#444444" : "#cccccc")};
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${(props) => (props.darkMode ? "#ffffff" : "#121212")};
    transform: translateY(-2px);
  }
`;

const ImageWrapper = styled.div<{ darkMode: boolean }>`
  position: relative;
  flex-shrink: 0;

  &::before {
    content: "";
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    background: ${(props) =>
      props.darkMode
        ? "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)"
        : "radial-gradient(circle, rgba(0,0,0,0.06) 0%, transparent 70%)"};
  }
`;

const ProfileImage = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  border: 3px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 900px) {
    width: 200px;
    height: 200px;
  }
`;

function Hero({ darkMode }: HeroProps) {
  return (
    <Container>
      <HeroSection>
        <HeroTag darkMode={darkMode}>👋 Available for work</HeroTag>

        <HeroTitle darkMode={darkMode}>
          Hi, I'm Thabo Tshabangu
        </HeroTitle>

        <HeroSubtitle darkMode={darkMode}>
          A Software Developer passionate about building modern, responsive, and
          impactful digital experiences. I specialize in transforming ideas into
          functional websites and applications that solve real-world problems.
        </HeroSubtitle>

        <ButtonContainer>
          <PrimaryButton darkMode={darkMode} href="#projects">
            View Projects
          </PrimaryButton>
          <SecondaryButton darkMode={darkMode} href="#contact">
            Contact Me
          </SecondaryButton>
        </ButtonContainer>
      </HeroSection>

      <ImageWrapper darkMode={darkMode}>
        <ProfileImage src={ProfilePic} alt="Thabo Tshabangu" />
      </ImageWrapper>
    </Container>
  );
}

export default Hero;