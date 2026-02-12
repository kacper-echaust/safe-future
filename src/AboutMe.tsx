import profilowe from "./assets/profilowe.jpeg";
import { motion } from "motion/react";
const AboutMe = () => {
  return (
    <section id="about">
      <div className="about-container">
        <motion.div
          className="about-image"
          style={{ transform: "none" }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
        >
          <img src={profilowe} alt="Izabela Fatek zdjęcie profilowe" />
        </motion.div>
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
        >
          <h2>O mnie</h2>
          <p>
            Jako agent ubezpieczeniowy wspieram swoich klientów od 15 lat. Moim
            celem jest zapewnienie Ci bezpieczeństwa finansowego i spokoju ducha
            – zarówno w życiu prywatnym, jak i zawodowym.
          </p>
          <ul>
            Specjalizuję się w:
            <li>ubezpieczeniach na życie i zdrowie,</li>
            <li>polisach komunikacyjnych (OC/AC),</li>
            <li>ubezpieczeniach majątkowych (domy, mieszkania, firmy),</li>
            <li>
              ochronie przyszłości – emerytury, plany oszczędnościowe,
              inwestycje.
            </li>
          </ul>
          <p>
            W pracy stawiam na rzetelność, przejrzystość i indywidualne
            podejście. Zawsze przedstawiam kilka wariantów, tłumaczę różnice i
            pomagam podjąć najlepszą decyzję. Dzięki współpracy z wieloma
            towarzystwami ubezpieczeniowymi mogę zaoferować rozwiązania
            dopasowane do różnych potrzeb i budżetów. Moją misją jest, abyś czuł
            się pewnie – wiedząc, że Ty i Twoi bliscy jesteście dobrze
            zabezpieczeni.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export { AboutMe };
