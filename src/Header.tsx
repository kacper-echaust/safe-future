import logo from "./assets/logo.jpeg";

const Header = () => {
  return (
    <header>
      <div className="brand">
        <a href="#hero">
          {" "}
          <img className="logo" src={logo} alt="logo" />
        </a>
        <div>
          <h1>SAFE FUTURE</h1>
          <p>Ubezpieczenia — Izabela Fatek</p>
        </div>
      </div>
      <nav>
        <a className="ghost" href="#services">
          Usługi
        </a>

        <a className="ghost" href="#contact">
          Kontakt
        </a>
      </nav>
    </header>
  );
};

export { Header };
