import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import { StyledFooter, StyledTopButton } from "./style";

import { animateScroll as scroll } from "react-scroll";

export const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <StyledFooter>
      <StyledTopButton onClick={scrollToTop}>
        <i className="fa-regular fa-circle-up fa-2xl"></i>
      </StyledTopButton>
      <p> 😊 Obrigado por acessar!</p>
    </StyledFooter>
  );
};
