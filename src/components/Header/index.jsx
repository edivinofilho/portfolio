import profile_pic from "../../assets/profile_pic.png";
import linkedin_logo from "../../assets/linkedin.png"
import github_logo from "../../assets/github.png"

import { StyledContainer, StyledContainerDiv, StyledHeader, StyledLogoImg } from "./style";

export const Header = () => {
    return (
        <StyledHeader>
            <StyledContainer>
                <StyledContainerDiv>
                    <StyledLogoImg src={profile_pic}/>
                    <h1>Edivino Filho</h1>
                </StyledContainerDiv>
                <StyledContainerDiv>
                    <a href="www.github.com"><img src={github_logo} /></a>
                    <a href="https://www.linkedin.com/in/edivinofilho/?locale=pt_BR"><img src={linkedin_logo} /></a>
                </StyledContainerDiv>
            </StyledContainer>
        </StyledHeader>
    )
}