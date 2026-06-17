import styled from "styled-components";

type ProjectsProps = { darkMode: boolean };

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div<{ $dark: boolean }>`
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${({ $dark }) => ($dark ? "#252525" : "#e5e5e5")};
  background: ${({ $dark }) => ($dark ? "#1a1a1a" : "#ffffff")};
  transition: transform 0.22s ease, box-shadow 0.22s ease,
    border-color 0.22s ease;
  will-change: transform;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ $dark }) => ($dark ? "#3a3a3a" : "#c0c0c0")};
    box-shadow: 0 10px 28px
      ${({ $dark }) => ($dark ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0.09)")};
  }
`;

const Preview = styled.div<{ $dark: boolean }>`
  height: 120px;
  background: ${({ $dark }) => ($dark ? "#222222" : "#efefef")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
`;

const CardBody = styled.div`
  padding: 0.9rem 1rem 1rem;
`;

const CardTitle = styled.h3<{ $dark: boolean }>`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
  color: ${({ $dark }) => ($dark ? "#ffffff" : "#111111")};
`;

const Desc = styled.p<{ $dark: boolean }>`
  font-size: 0.8rem;
  line-height: 1.55;
  color: ${({ $dark }) => ($dark ? "#999999" : "#666666")};
`;

const Stack = styled.p<{ $dark: boolean }>`
  font-size: 0.72rem;
  font-weight: 500;
  margin-top: 0.5rem;
  color: ${({ $dark }) => ($dark ? "#555555" : "#aaaaaa")};
`;

const BtnRow = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.9rem;
`;

const Btn = styled.a<{ $dark: boolean }>`
  flex: 1;
  text-align: center;
  text-decoration: none;
  padding: 0.4rem 0;
  font-size: 0.76rem;
  font-weight: 500;
  border-radius: 6px;
  border: 1px solid ${({ $dark }) => ($dark ? "#303030" : "#e0e0e0")};
  color: ${({ $dark }) => ($dark ? "#cccccc" : "#444444")};
  transition: background 0.18s, color 0.18s, border-color 0.18s;

  &:hover {
    background: ${({ $dark }) => ($dark ? "#2a2a2a" : "#f0f0f0")};
    border-color: ${({ $dark }) => ($dark ? "#555" : "#aaa")};
    color: ${({ $dark }) => ($dark ? "#fff" : "#111")};
  }
`;

const projects = [
  {
    title: "Bleach Anime Website",
    desc: "Discover and explore anime using external APIs.",
    stack: "React • API",
    emoji: "⚔️",
    live: "https://anime-site.vercel.app",
    repo: "https://github.com/yourusername/anime-website",
  },
  {
    title: "Personal Portfolio",
    desc: "Modern personal portfolio showcasing projects.",
    stack: "React • Styled Components",
    emoji: "🗂️",
    live: "https://thabo-769.github.io/portfolio1/",
    repo: "https://github.com/thabo-769/portfolio1.git",
  },
  {
    title: "Weather App",
    desc: "Live weather forecasts and current conditions.",
    stack: "React • API",
    emoji: "🌤️",
    live: "https://weather-app.vercel.app",
    repo: "https://github.com/yourusername/weather-app",
  },
  {
    title: "Task Manager",
    desc: "Organize and track daily tasks efficiently.",
    stack: "React • Local Storage",
    emoji: "✅",
    live: "https://task-manager.vercel.app",
    repo: "https://github.com/yourusername/task-manager",
  },
];

function Projects({ darkMode }: ProjectsProps) {
  return (
    <Section>
      <Label $dark={darkMode}>What I've Built</Label>
      <Title $dark={darkMode}>My Projects</Title>
      <Bar $dark={darkMode} />

      <Grid>
        {projects.map((p, i) => (
          <Card key={i} $dark={darkMode}>
            <Preview $dark={darkMode}>{p.emoji}</Preview>
            <CardBody>
              <CardTitle $dark={darkMode}>{p.title}</CardTitle>
              <Desc $dark={darkMode}>{p.desc}</Desc>
              <Stack $dark={darkMode}>{p.stack}</Stack>
              <BtnRow>
                <Btn $dark={darkMode} href={p.live} target="_blank" rel="noopener noreferrer">Live</Btn>
                <Btn $dark={darkMode} href={p.repo} target="_blank" rel="noopener noreferrer">GitHub</Btn>
              </BtnRow>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

export default Projects;