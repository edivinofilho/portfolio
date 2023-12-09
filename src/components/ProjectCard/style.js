import styled from "styled-components";

export const StyledListItem = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;

    p {
      line-height: 1;
    }

    span {
      font-size: 12px;
      background-color: var(--color-text-secondary);
      padding: 3px 6px;
      border-radius: 4px;
    }
  }
`;

export const StyledLink = styled.a`
  background-color: #5c940d;
  transition: 0.5s;
  color: #ffffff;
  padding: 0.25rem 0.375rem;
  border-radius: 0.25rem;

  font-size: 0.875rem;

  &:hover {
    background-color: #ffffff;
    color: #5c940d;
  }
`;
