import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  return (
    <div className="paiProjeto">
      <div>
        <h1 className="titleP">Projetos</h1>
        <div className="projetoGeral">
          <ProjectCard
            title="Projeto 1 - Nike"
            description="O projeto é uma vitrine interativa de tênis, com um design
           profissional inspirado em sites de grandes marcas como a Nike. A proposta 
           é criar uma plataforma onde os usuários possam visualizar diferentes modelos e cores
           de tênis, com uma interface limpa, moderna e interativa."
            image="/img/projeto1.png"
          />

          <ProjectCard
            title="Projeto 2 - Casamento"
            description="O projeto é um site de casamento personalizado, com o objetivo de
             permitir que amigos e familiares comprem presentes para os noivos de forma prática 
             e elegante. O design será acolhedor e romântico, refletindo a celebração do amor,
              com animações suaves para tornar a experiência de navegação envolvente e especial."
            image="/img/projeto2.png"
          />

          <ProjectCard
            title="Projeto 3 - Clone Netflix"
            description="O Clone da Netflix é um projeto web que simula uma plataforma de streaming,
             permitindo aos usuários navegar por filmes e séries. Ele apresenta uma tela inicial com títulos 
             populares, permite visualizar detalhes sobre os conteúdos e simula um reprodutor de vídeo para 
             assistir aos trailers. O design é responsivo, funcionando bem em dispositivos móveis e desktop. 
             O objetivo é criar uma experiência de usuário simples e interativa, utilizando HTML, CSS e JavaScript."
            image="/img/projeto3.png"
          />

          <ProjectCard
            title="Projeto 4 - Pizzaria"
            description="O site de pizzaria simples é uma aplicação web que permite aos clientes visualizar o menu de 
            pizzas, fazer pedidos e conhecer as opções de entrega. A página inicial exibe uma lista de pizzas com descrições 
            e preços, além de mostrar informações sobre a pizzaria, como localização e horário de funcionamento. O cliente pode
             adicionar pizzas ao carrinho e fazer um pedido básico. O design é simples e responsivo, com uso de HTML, CSS e JavaScript
              para interatividade e uma experiência de navegação agradável."
            image="/img/projeto4.png"
          />
        </div>
      </div>
    </div>
  );
}
