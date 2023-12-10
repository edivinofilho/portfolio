import { useState } from "react";
import profile from "../../assets/profile.png";

import {
  StyledContainer,
  StyledDevDataContainer,
  StyledGitLogo,
  StyledHeader,
  StyledIconsContainer,
  StyledLinkedInLogo,
  StyledLogoImg,
} from "./style";
import { Tooltip } from "../TechBanner/style";

export const Header = () => {
  const [isHoveredIcon, setIsHoveredIcon] = useState(false);
  const [isHoveredLinkedIn, setIsHoveredLinkedIn] = useState(false);
  
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledDevDataContainer>
          <StyledLogoImg src={profile} />
          <h1>Edivino Filho</h1>
        </StyledDevDataContainer>
        <StyledIconsContainer>
          <StyledGitLogo>
            <a href="https://github.com/edivinofilho" target="_blank">
              <i className="fa-brands fa-github fa-2xl"></i>
            </a>
          </StyledGitLogo>
        
          <StyledLinkedInLogo>
            <a href="https://www.linkedin.com/in/edivinofilho/" target="_blank">
              <i className="fa-brands fa-linkedin fa-2xl"></i>
            </a>
          </StyledLinkedInLogo>
        </StyledIconsContainer>
      </StyledContainer>
    </StyledHeader>
  );
};
