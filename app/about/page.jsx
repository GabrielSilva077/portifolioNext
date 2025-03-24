export default function About() {
  return (
    <div className="pagina-sobre">
      <div className="conteudo-principal">
        <section className="secao-sobre">
          <h1 className="titulo-principal">Sobre Mim</h1>
          <div className="perfil">
            <div className="foto-container">
              <img src="/img/img.jpg" alt="foto de perfil" className="foto" id="foto" />
            </div>
            <div className="informacoes-pessoais">
              <h2 className="nome">Gabriel Felix</h2>
              <h3 className="profissao">Desenvolvedor Full Stack</h3>
              <p className="descricao">
                Olá! Sou um desenvolvedor em início de carreira, atualmente
                aprendendo a criar aplicações web. Estou estudando e praticando
                para me tornar um desenvolvedor full stack, focando em construir
                sites e sistemas modernos e funcionais. Tenho muita vontade de
                aprender, resolver problemas e transformar ideias em projetos
                digitais
              </p>
              <div className="dados-pessoais">
                <p>São Paulo, Brasil</p>
                <p>Nascido em 2003</p>
                <p>Disponível para freelance</p>
              </div>
            </div>
          </div>

          <section className="experiencia">
            <h2 className="titulo-secao">Experiência</h2>
            <div className="linha-do-tempo">
              <div className="item-experiencia">
                <h3 className="cargo">Desenvolvedor Front-end</h3>
                <p className="descricao">
                  Criação de interfaces de usuário responsivas utilizando HTML,
                  CSS e JavaScript. Implementação de designs e de
                  desenvolvimento de temas personalizados.
                </p>
              </div>
            </div>
          </section>

          <section className="educacao">
            <h2 className="titulo-secao">Educação</h2>
            <div className="linha-do-tempo">
              <div className="item-educacao">
                <h3 className="curso">Cursando sistemas para internet</h3>
                <p className="instituicao">
                  Universidade Serviço Nacional de Aprendizagem Comercial - SP
                </p>
                <p className="descricao">
                  Estudante de Tecnólogo em Sistemas para Internet, com
                  experiência em desenvolvimento web (front-end e back-end),
                  APIs, bancos de dados. Conhecimentos em HTML, CSS, JavaScript,
                  React, Node.js e Git. Focado em soluções eficientes e boas
                  práticas de desenvolvimento.
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
