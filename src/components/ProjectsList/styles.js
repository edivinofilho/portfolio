import styled from "styled-components";

export const StyledProjectsSection = styled.main`
  width: 100%;
  padding: 50px 0;
  margin-bottom: 1.875rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledContainer = styled.div`
  width: 80%;
  max-width: 55rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
`;

export const StyledIdeaDiv = styled.div`
  width: 32%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;

  top: 20px;
  position: sticky;

  @media (max-width: 769px) {
    display: none;
  }
`;
export const StyledLink = styled.a`
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  border-radius: 0.3125rem;
  background-color: #5c940d;
  transition: 0.5s;
  color: #ffffff;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: #5c940d;
    border: 1px solid #5c940d;
  }
`;

export const StyledProjectList = styled.ul`
  width: 60%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 1.5rem;

  h3 {
    font-size: 1rem;
  }

  span {
    color: #5c940d;
  }

  ul {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 769px) {
    width: 100%;
  }
`;

export const StyledTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;
