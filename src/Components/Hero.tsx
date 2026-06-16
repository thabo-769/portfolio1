import styled from "styled-components";
import ProfilePic from "../assets/images/profile.png";

type HeroProps = {
  darkMode: boolean;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 2rem;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  max-width: 600px;
`;

const HeroTitle = styled.h1<{ darkMode: boolean }>`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: left;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#121212")};
`;

const HeroSubtitle = styled.p<{ darkMode: boolean }>`
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: left;
  color: ${(props) => (props.darkMode ? "#d1d1d1" : "#565449")};
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const HeroButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #565449;
  color: white;
  border: none;
  cursor: pointer;
`;

const HeroButton1 = styled.button<{ darkMode: boolean }>`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: transparent;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#565449")};
  border: 1px solid ${(props) => (props.darkMode ? "#ffffff" : "#565449")};
  cursor: pointer;
`;

function Hero({ darkMode }: HeroProps) {
  return (
    <Container>
      <HeroSection>
        <HeroTitle darkMode={darkMode}>
          Hi, I'm Thabo Tshabangu
        </HeroTitle>

        <HeroSubtitle darkMode={darkMode}>
          A Software Developer passionate about building modern,
          responsive, and impactful digital experiences. I specialize in
          transforming ideas into functional websites and applications
          that solve real-world problems.
        </HeroSubtitle>

        <ButtonContainer>
          <HeroButton>Explore Now</HeroButton>
          <HeroButton1 darkMode={darkMode}>
            Contact Me
          </HeroButton1>
        </ButtonContainer>
      </HeroSection>

      <ProfileImage
        src={ProfilePic}
        alt="Thabo Tshabangu"
      />
    </Container>
  );
}

export default Hero; 