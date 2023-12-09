import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;

  padding: 6rem 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  position: relative;

  background-color: #5c940d;

  h2 {
    color: var(--color-text-secondary);
    font-weight: 700;
    font-size: 26px;
  }

  p {
    color: var(--color-text-secondary);
    font-weight: 200;
  }
`;

export const StyledContainer = styled.div`
  width: 80%;
  max-width: 55rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;

  div {
    width: 73%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
  }
`;

export const StyledImage = styled.img`
  position: absolute;
  bottom: 10px;
  right: 30px;

  width: 3%;
`;

export const StyledButtonContainer = styled.span`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
`;

export const Button = styled.button`
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  border-radius: 0.3125rem;
  background-color: var(--color-text-secondary);
  transition: 0.5s;

  &:hover {
    background-color: transparent;
    color: var(--color-text-secondary);
  }
`;

export const PrimaryButton = styled(Button)`
  color: var(--color-text-secondary);
  background-color: transparent;

  &:hover {
    background-color: var(--color-text-secondary);
    color: black;
  }
`;
