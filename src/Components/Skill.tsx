import styled from "styled-components";

type SkillsProps = { darkMode: boolean };

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
  margin-bottom: 2rem;
  background: ${({ $dark }) => ($dark ? "#444444" : "#cccccc")};
`;

const TagCloud = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
`;

const Tag = styled.li<{ $dark: boolean }>`
  padding: 0.4rem 1rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: default;
  border: 1px solid ${({ $dark }) => ($dark ? "#2e2e2e" : "#dddddd")};
  background: ${({ $dark }) =>
    $dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)"};
  color: ${({ $dark }) => ($dark ? "#cccccc" : "#444444")};
  transition: transform 0.18s ease, border-color 0.18s ease,
    background 0.18s ease;
  will-change: transform;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ $dark }) => ($dark ? "#555555" : "#aaaaaa")};
    background: ${({ $dark }) =>
      $dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"};
  }
`;

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript",
  "React", "Node.js", "Styled Components", "Git & GitHub",
  "REST APIs", "Responsive Design", "Vite", "Material UI",
];

function Skills({ darkMode }: SkillsProps) {
  return (
    <Section>
      <Label $dark={darkMode}>What I Know</Label>
      <Title $dark={darkMode}>My Skills</Title>
      <Bar $dark={darkMode} />
      <TagCloud>
        {skills.map((s) => (
          <Tag key={s} $dark={darkMode}>{s}</Tag>
        ))}
      </TagCloud>
    </Section>
  );
}

export default Skills;