import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"


import { StyledCards, StyledDiv, StyledTechBanner, StyledTechContainer } from "./style"

export const TechBanner = () => {
    return (
        <StyledTechBanner>
            <StyledDiv>
                <h3>Principais Technologias que trabalho</h3>
                <StyledTechContainer>
                    <StyledCards>
                        <span><img src={html} /></span>
                    </StyledCards>
                    <StyledCards>
                        <span><img src={css} /></span>
                    </StyledCards>
                    <StyledCards>
                        <span><img src={js} /></span>
                    </StyledCards>
                    <StyledCards>
                        <span>Node</span>
                    </StyledCards>
                    <StyledCards>
                        <span>React</span>
                    </StyledCards>
                    <StyledCards>
                        <span>TypeScript</span>
                    </StyledCards>
                </StyledTechContainer>
            </StyledDiv>
        </StyledTechBanner>
    )
}