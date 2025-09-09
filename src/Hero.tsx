import background from "./assets/background.jpg";
const Hero = () => {
  return (
    <section id="hero" className="hero">
      <img className="background-hero" src={background} alt="background city" />
      <div className="fog"></div>
      <div className="content">
        <p>Kompleksowe ubezpieczenia dopasowane do Twoich potrzeb.</p>
        <div className="cta">
          <a className="btn" href="#services">
            Poznaj ofertę
          </a>
          <a className="ghost" href="#contact">
            Skontaktuj się
          </a>
        </div>
      </div>
    </section>
  );
};
export { Hero };
