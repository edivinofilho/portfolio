import styled from "styled-components";

export const StyledTechBanner = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 3.125rem 0;

  background-color: var(--color-text-secondary);
`;

export const StyledDiv = styled.div`
  width: 80%;
  max-width: 55rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;
`;

export const StyledTechContainer = styled.ul`
  width: 100%;
  max-width: 55rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;

  padding: 10px 0;

  @media (max-width: 1025px) {
    gap: 19.8px;
  }
`;

export const StyledCards = styled.li`
  width: 120px;
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  border-radius: .3125rem;

  background-color: white;

  &:hover {
    .tooltip {
      opacity: 1;
      visibility: visible;
    }
  }

  @media (max-width: 340px) {
    width: 100px;
    height: 100px;
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);

  padding: 5px;
  
  background-color: #333;
  
  font-size: .75rem;
  color: #fff;
  
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease;
`;
