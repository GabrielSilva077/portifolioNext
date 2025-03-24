import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pai">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Olá! Eu sou Gabriel Felix</h1>
        <p className="text-p">
          Desenvolvedor Front-end apaixonado por criar experiências incríveis na
          web.
        </p>
        <div className="pai-seta">
          <Link href="/projects" className="vProjetos">
            Ver projetos{" "}
            <Image
              src="/img/seta.jpg"
              width={30}
              height={30}
              className="seta"
              alt="ver_Projeto"
            />
          </Link>
        </div>
      </div>
      <img
        src="/img/img.jpg"
        alt="foto de perfil"
        className="foto"
      />
    </div>
  );
}
