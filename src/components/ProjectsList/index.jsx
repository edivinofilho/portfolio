import { useEffect, useState } from "react";
import { ProjectCard } from "../ProjectCard";
import {
  StyledContainer,
  StyledIdeaDiv,
  StyledLink,
  StyledProjectList,
  StyledProjectsSection,
  StyledTitle,
} from "./styles";

export const ProjectsSection = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/edivinofilho/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <StyledProjectsSection id="projects">
      <StyledContainer>
        <StyledIdeaDiv>
          <h3>Vamos trocar uma idéia?</h3>
          <p>
            Se você estiver interessado em explorar como posso contribuir para o
            seu sucesso ou se simplesmente quiser se conectar e discutir
            oportunidades interessantes em tecnologia ou segurança cibernética,
            não hesite em entrar em contato. Vamos embarcar nessa jornada
            juntos!{" "}
          </p>
          <StyledLink
            href="https://www.linkedin.com/in/edivinofilho/"
            target="_blank"
          >
            Accessar perfil no LinkedIn
          </StyledLink>
        </StyledIdeaDiv>

        <StyledProjectList>
          <h3>Projetos</h3>
          <StyledTitle>
            Originalidade e <span>dedicação</span> em cada detalhe.
          </StyledTitle>

          <ul>
            {repositories.length > 0 ? (
              repositories.map((repository) => {
                return (
                  <ProjectCard key={repository.id}>
                    <h3>Projeto: {repository.name}</h3>
                    <div>
                      <p>Tecnologia:</p>
                      <span>{repository.language}</span>
                    </div>
                    <p>{repository.description}</p>
                    <div>
                      {repository.html_url ? (
                        <StyledLink href={repository.html_url} target="_blank">
                          <i className="fa-brands fa-github fa-lg"></i> GitHub
                          Code
                        </StyledLink>
                      ) : null}

                      {repository.homepage ? (
                        <StyledLink href={repository.homepage} target="_blank">
                          <i className="fa-solid fa-share fa-lg"></i> Aplicação
                        </StyledLink>
                      ) : null}
                    </div>
                  </ProjectCard>
                );
              })
            ) : (
              <StyledLink
                href="https://github.com/edivinofilho?tab=repositories"
                target="_blank"
              >
                Accessar projetos no GitHub
              </StyledLink>
            )}
          </ul>
        </StyledProjectList>
      </StyledContainer>
    </StyledProjectsSection>
  );
};
