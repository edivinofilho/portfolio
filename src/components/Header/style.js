import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledContainer = styled.div`
  width: 80%;
  max-width: 55rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.3rem 0;

  @media (max-width: 376px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledLogoImg = styled.img`
  width: 4.1rem;
  height: 4rem;

  border-radius: 50%;
  border: 0.1rem solid #82c91e;
`;

export const StyledDevDataContainer = styled.div`
  width: 300px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.625rem;

  h1 {
    font-size: 1.4rem;
  }

  @media (max-width: 376px) {
    width: 12.5rem;

    flex-direction: column;
    justify-content: center;

    margin-bottom: 20px;
  }
`;

export const StyledIconsContainer = styled.div`
  width: 300px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;

  @media (max-width: 376px) {
    width: 12.5rem;

    justify-content: center;
  }
`;
