import styled from "styled-components";

type ProjectsProps = {
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

const ProjectsTitle = styled.h2<{ darkMode: boolean }>`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div<{ darkMode: boolean }>`
  background: ${(props) => (props.darkMode ? "#1a1a1a" : "#ffffff")};
  border: 1px solid ${(props) => (props.darkMode ? "#2a2a2a" : "#e5e5e5")};
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.25s ease, border-color 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${(props) => (props.darkMode ? "#444444" : "#bbbbbb")};
    box-shadow: 0 8px 24px
      ${(props) =>
        props.darkMode ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.08)"};
  }
`;

const ProjectPreview = styled.div<{ darkMode: boolean; emoji: string }>`
  width: 100%;
  height: 130px;
  background: ${(props) => (props.darkMode ? "#222222" : "#f0f0f0")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  font-size: 2rem;
  color: ${(props) => (props.darkMode ? "#555555" : "#aaaaaa")};

  &::after {
    content: "${(props) => props.emoji}";
  }
`;

const ProjectContent = styled.div`
  padding: 1rem;
`;

const ProjectTitleCard = styled.h3<{ darkMode: boolean }>`
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0 0 0.4rem;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#121212")};
`;

const ProjectDescription = styled.p<{ darkMode: boolean }>`
  font-size: 0.82rem;
  line-height: 1.5;
  color: ${(props) => (props.darkMode ? "#aaaaaa" : "#666666")};
  margin-bottom: 0.5rem;
`;

const TechStack = styled.p<{ darkMode: boolean }>`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${(props) => (props.darkMode ? "#666666" : "#999999")};
  margin-top: 0.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Button = styled.a<{ darkMode: boolean }>`
  flex: 1;
  text-decoration: none;
  text-align: center;
  padding: 0.45rem 0.5rem;
  font-size: 0.78rem;
  font-weight: 500;
  border: 1px solid ${(props) => (props.darkMode ? "#333333" : "#dddddd")};
  border-radius: 6px;
  color: ${(props) => (props.darkMode ? "#cccccc" : "#444444")};
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => (props.darkMode ? "#2a2a2a" : "#f5f5f5")};
    border-color: ${(props) => (props.darkMode ? "#555555" : "#aaaaaa")};
    color: ${(props) => (props.darkMode ? "#ffffff" : "#121212")};
  }
`;

const featuredProjects = [
  {
    title: "Bleach Anime Website",
    description: "Discover and explore anime using external APIs.",
    stack: "React • API",
    emoji: "⚔️",
    liveLink: "https://anime-site.vercel.app",
    githubLink: "https://github.com/yourusername/anime-website",
  },
  {
    title: "Personal Portfolio",
    description: "Modern personal portfolio showcasing projects.",
    stack: "React • Styled Components",
    emoji: "🗂️",
    liveLink: "https://thabo-769.github.io/portfolio1/",
    githubLink: "https://github.com/thabo-769/portfolio1.git",
  },
  {
    title: "Weather App",
    description: "Live weather forecasts and current conditions.",
    stack: "React • API",
    emoji: "🌤️",
    liveLink: "https://weather-app.vercel.app",
    githubLink: "https://github.com/yourusername/weather-app",
  },
  {
    title: "Task Manager",
    description: "Organize and track daily tasks efficiently.",
    stack: "React • Local Storage",
    emoji: "✅",
    liveLink: "https://task-manager.vercel.app",
    githubLink: "https://github.com/yourusername/task-manager",
  },
];

function Projects({ darkMode }: ProjectsProps) {
  return (
    <Container>
      <SectionLabel darkMode={darkMode}>What I've Built</SectionLabel>
      <ProjectsTitle darkMode={darkMode}>My Projects</ProjectsTitle>
      <Divider darkMode={darkMode} />

      <ProjectsGrid>
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} darkMode={darkMode}>
            <ProjectPreview darkMode={darkMode} emoji={project.emoji} />

            <ProjectContent>
              <ProjectTitleCard darkMode={darkMode}>
                {project.title}
              </ProjectTitleCard>

              <ProjectDescription darkMode={darkMode}>
                {project.description}
              </ProjectDescription>

              <TechStack darkMode={darkMode}>{project.stack}</TechStack>

              <ButtonContainer>
                <Button
                  darkMode={darkMode}
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Button>
                <Button
                  darkMode={darkMode}
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Button>
              </ButtonContainer>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Container>
  );
}

export default Projects;