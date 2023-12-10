import { useState } from "react";
import {
  StyledCards,
  StyledDiv,
  StyledTechBanner,
  StyledTechContainer,
  Tooltip,
} from "./style";

export const TechBanner = () => {
  const [isHovered, setHovered] = useState(false);

  return (
    <StyledTechBanner id="techs">
      <StyledDiv>
        <h3>Principais Tecnologias que trabalho</h3>
        <StyledTechContainer>
          <StyledCards
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <i className="fa-brands fa-html5 fa-2xl"></i>
            {isHovered && <Tooltip className="tooltip">HTML 5</Tooltip>}
          </StyledCards>

          <StyledCards
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <i className="fa-brands fa-css3-alt fa-2xl"></i>
            {isHovered && <Tooltip className="tooltip">CSS 3</Tooltip>}
          </StyledCards>

          <StyledCards
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <i className="fa-brands fa-js fa-2xl"></i>
            {isHovered && <Tooltip className="tooltip">JavaScript</Tooltip>}
          </StyledCards>

          <StyledCards
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <i className="fa-brands fa-node fa-2xl"></i>
            {isHovered && <Tooltip className="tooltip">NodeJs</Tooltip>}
          </StyledCards>

          <StyledCards
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <i className="fa-brands fa-react fa-2xl"></i>
            {isHovered && <Tooltip className="tooltip">React</Tooltip>}
          </StyledCards>

          <StyledCards
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <i className="fa-brands fa-python fa-2xl"></i>
            {isHovered && <Tooltip className="tooltip">Python</Tooltip>}
          </StyledCards>

          <StyledCards
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <i className="fa-brands fa-docker fa-2xl"></i>
            {isHovered && <Tooltip className="tooltip">Docker</Tooltip>}
          </StyledCards>
          <StyledCards
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <i className="fa-brands fa-aws fa-2xl"></i>
            {isHovered && <Tooltip className="tooltip">AWS</Tooltip>}
          </StyledCards>
          <StyledCards
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <i className="fa-solid fa-database fa-2xl"></i>
            {isHovered && <Tooltip className="tooltip">PostgreSQL</Tooltip>}
          </StyledCards>
          <StyledCards
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <i className="fa-brands fa-linux fa-2xl"></i>
            {isHovered && <Tooltip className="tooltip">Linux</Tooltip>}
          </StyledCards>
          <StyledCards
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <i className="fa-brands fa-windows fa-2xl"></i>
            {isHovered && <Tooltip className="tooltip">Windows</Tooltip>}
          </StyledCards>
          <StyledCards
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <i className="fa-brands fa-git fa-2xl"></i>
            {isHovered && <Tooltip className="tooltip">Git</Tooltip>}
          </StyledCards>
        </StyledTechContainer>
      </StyledDiv>
    </StyledTechBanner>
  );
};
