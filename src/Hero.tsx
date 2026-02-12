import ScrollDownArrow from "./Arrow";
import background from "./assets/background.jpg";
import TypingWithCursor from "./Text";
const Hero = () => {
  return (
    <section id="hero" className="hero">
      <img className="background-hero" src={background} alt="background city" />
      <div className="fog"></div>
      <div className="content">
        <h1>Safe Future Ubezpieczenia Izabela Fatek</h1>
        <TypingWithCursor />
      </div>
      <div className="arrow">
        <ScrollDownArrow />
      </div>
    </section>
  );
};
export { Hero };
