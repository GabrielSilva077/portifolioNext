import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="navPai">
        <Link href="/">Home</Link>
        <Link href="/about">Sobre</Link>
        <Link href="/projects">Projetos</Link>
        <Link href="/skills">Habilidades</Link>
        <Link href="/contact">Contato</Link>
      </nav>
    </header>
  );
}
