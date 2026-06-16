import styled from "styled-components";

type SkillsProps = {
  darkMode: boolean;
};

const Container = styled.div<{ darkMode: boolean }>`
  min-height: 100vh;
  padding: 4rem;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#121212")};
`;

const SkillSection = styled.section`
  max-width: 600px;
`;

const SkillTitle = styled.h2<{ darkMode: boolean }>`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: left;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#121212")};
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  width: fit-content;
  padding: 0.3rem 0.8rem;
  margin-bottom: 0.5rem;

  background-color: #565449;
  color: white;

  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;

  transition: 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

function Skills({ darkMode }: SkillsProps) {
  return (
    <Container darkMode={darkMode}>
      <SkillSection>
        <SkillTitle darkMode={darkMode}>
          My Skills
        </SkillTitle>

        <SkillList>
          <SkillItem>HTML</SkillItem>
          <SkillItem>CSS</SkillItem>
          <SkillItem>JavaScript</SkillItem>
          <SkillItem>React</SkillItem>
          <SkillItem>Node.js</SkillItem>
          <SkillItem>Styled Components</SkillItem>
        </SkillList>
      </SkillSection>
    </Container>
  );
}

export default Skills;