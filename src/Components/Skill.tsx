import styled from "styled-components";

type SkillsProps = {
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

const SkillTitle = styled.h2<{ darkMode: boolean }>`
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 1rem;
  letter-spacing: -0.5px;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#121212")};
`;

const Divider = styled.div<{ darkMode: boolean }>`
  width: 48px;
  height: 3px;
  border-radius: 2px;
  margin-bottom: 2rem;
  background: ${(props) => (props.darkMode ? "#444444" : "#cccccc")};
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SkillItem = styled.li<{ darkMode: boolean }>`
  padding: 0.45rem 1rem;
  background: ${(props) =>
    props.darkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.05)"};
  color: ${(props) => (props.darkMode ? "#dddddd" : "#333333")};
  border: 1px solid ${(props) => (props.darkMode ? "#333333" : "#dddddd")};
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: default;

  &:hover {
    background: ${(props) =>
      props.darkMode ? "rgba(255,255,255,0.13)" : "rgba(0,0,0,0.1)"};
    border-color: ${(props) => (props.darkMode ? "#555555" : "#aaaaaa")};
    transform: translateY(-2px);
  }
`;

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript",
  "React", "Node.js", "Styled Components", "Git & GitHub",
  "REST APIs", "Responsive Design",
];

function Skills({ darkMode }: SkillsProps) {
  return (
    <Container>
      <SectionLabel darkMode={darkMode}>What I Know</SectionLabel>
      <SkillTitle darkMode={darkMode}>My Skills</SkillTitle>
      <Divider darkMode={darkMode} />
      <SkillList>
        {skills.map((skill) => (
          <SkillItem key={skill} darkMode={darkMode}>
            {skill}
          </SkillItem>
        ))}
      </SkillList>
    </Container>
  );
}

export default Skills;