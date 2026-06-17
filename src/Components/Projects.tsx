import styled from "styled-components";

type ProjectsProps = {
  darkMode: boolean;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 2rem;
`;

const ProjectsSection = styled.section`
  width: 100%;
  max-width: 1200px;
`;

const ProjectsTitle = styled.h2<{ darkMode: boolean }>`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: left;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#121212")};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div<{ darkMode: boolean }>`
  background: ${(props) => (props.darkMode ? "#111111" : "#ffffff")};
  border: 1px solid ${(props) => (props.darkMode ? "#222222" : "#dddddd")};
  border-radius: 10px;
  overflow: hidden;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${(props) =>
      props.darkMode ? "#444444" : "#999999"};
  }
`;

const ProjectPreview = styled.div<{ darkMode: boolean }>`
  width: 100%;
  height: 120px;
  background: ${(props) => (props.darkMode ? "#222222" : "#f5f5f5")};

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => (props.darkMode ? "#888888" : "#666666")};
  font-size: 0.8rem;
`;

const ProjectContent = styled.div`
  padding: 0.8rem;
`;

const ProjectTitleCard = styled.h3<{ darkMode: boolean }>`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#121212")};
`;

const ProjectDescription = styled.p<{ darkMode: boolean }>`
  font-size: 0.8rem;
  line-height: 1.4;
  color: ${(props) => (props.darkMode ? "#bbbbbb" : "#555555")};
`;

const TechStack = styled.p<{ darkMode: boolean }>`
  font-size: 0.7rem;
  color: ${(props) => (props.darkMode ? "#888888" : "#777777")};
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
  padding: 0.5rem;
  font-size: 0.75rem;

  border: 1px solid ${(props) => (props.darkMode ? "#444444" : "#cccccc")};
  border-radius: 5px;

  color: ${(props) => (props.darkMode ? "#ffffff" : "#121212")};
  transition: 0.3s ease;

  &:hover {
    background: ${(props) => (props.darkMode ? "#222222" : "#f0f0f0")};
  }
`;

function Projects({ darkMode }: ProjectsProps) {
  const featuredProjects = [
    {
      title: " Bleach Anime Website",
      description: "Discover and explore anime using external APIs.",
      stack: "React • API",
      liveLink: "https://anime-site.vercel.app",
      githubLink: "https://github.com/yourusername/anime-website",
    },
    {
      title: "Personal Portfolio",
      description: "Modern personal portfolio showcasing projects.",
      stack: "React • Styled Components",
      Image: "https://via.placeholder.com/300x180.png?text=Portfolio+Project",
      liveLink: "https://thabo-769.github.io/portfolio1/",
      githubLink: "https://github.com/thabo-769/portfolio1.git",
    },
    {
      title: "Weather App",
      description: "Live weather forecasts and current conditions.",
      stack: "React • API",
      liveLink: "https://weather-app.vercel.app",
      githubLink: "https://github.com/yourusername/weather-app",
    },
    {
      title: "Task Manager",
      description: "Organize and track daily tasks efficiently.",
      stack: "React • Local Storage",
      liveLink: "https://task-manager.vercel.app",
      githubLink: "https://github.com/yourusername/task-manager",
    },
  ];

  return (
    <Container>
      <ProjectsSection>
        <ProjectsTitle darkMode={darkMode}>
          My Projects
        </ProjectsTitle>

        <ProjectsGrid>
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              darkMode={darkMode}
            >
              <ProjectPreview darkMode={darkMode}>
                Project Screenshot
              </ProjectPreview>

              <ProjectContent>
                <ProjectTitleCard darkMode={darkMode}>
                  {project.title}
                </ProjectTitleCard>

                <ProjectDescription darkMode={darkMode}>
                  {project.description}
                </ProjectDescription>

                <TechStack darkMode={darkMode}>
                  {project.stack}
                </TechStack>

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
      </ProjectsSection>
    </Container>
  );
}

export default Projects;