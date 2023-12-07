import { StyledContainer, StyledImage, StyledSection } from "./style"

export const MainBanner = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <h2>Desenhando experiências memoráveis impulsionadas pela tecnologia</h2>
                
                <p>Como desenvolvedor Full-Stack, apaixonado por segurança cibernética e pentesting, tenho um conjunto diversificado de habilidades que inclui o desenvolvimento de projetos usando HTML5, CSS3, JavaScript, React, Node.js, TypeScript, PostgreSQL e Python. Minha missão é aplicar minhas habilidades de resolução de problemas, raciocínio rápido e mentalidade inovadora para desenvolver soluções eficazes e escaláveis, não apenas no desenvolvimento web, mas também no emocionante domínio da segurança cibernética. </p>
            
                <span>
                    <button>Projetos</button>
                    <button>Tecnologias</button>
                </span>
            </StyledContainer>
            <StyledImage>Aqui vai uma imagem</StyledImage>
        </StyledSection>
    )
}