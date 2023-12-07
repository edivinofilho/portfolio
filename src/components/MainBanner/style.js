import styled from "styled-components";

export const StyledSection = styled.section`
    width: 100%;
    height: 25rem;

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    position: relative;

    background-color: purple;
`

export const StyledContainer = styled.div`
    width: 80%;
    max-width: 55rem;
    
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
    
    background-color: orange;
`

export const StyledImage = styled.p`
    position: absolute;
    bottom: 0;
    right: 0;

    background-color: green;
`