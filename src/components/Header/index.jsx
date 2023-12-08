import profile from "../../assets/profile.png";

import {
  StyledContainer,
  StyledDevDataContainer,
  StyledHeader,
  StyledIconsContainer,
  StyledLogoImg,
} from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledDevDataContainer>
          <StyledLogoImg src={profile} />
          <h1>Edivino Filho</h1>
        </StyledDevDataContainer>
        <StyledIconsContainer>
          <a href="https://www.github.com" target="_blank">
            <i className="fa-brands fa-github fa-2xl"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <i className="fa-brands fa-linkedin fa-2xl"></i>
          </a>
        </StyledIconsContainer>
      </StyledContainer>
    </StyledHeader>
  );
};
