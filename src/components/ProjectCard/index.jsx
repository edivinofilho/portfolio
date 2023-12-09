import { useEffect, useState } from "react";
import { StyledLink, StyledListItem } from "./style";

export const ProjectCard = ({ children }) => {
  return <StyledListItem>{children}</StyledListItem>;
};
