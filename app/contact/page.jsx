export default function Contact() {
  return (
    <div className="contact-pai">
      <div>
        <h1 className="text-3xl font-bold mb-4">Contato</h1>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            required
            className="border"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border"
          />
          <textarea
            name="message"
            placeholder="Mensagem"
            required
            className="border"
          ></textarea>
          <button type="submit" className="">
            Enviar
          </button>
        </form>
        <div className="link">
          <a href="https://github.com/GabrielSilva077">GitHub</a>
        </div>
      </div>
    </div>
  );
}
