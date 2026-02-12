import wizytowka from "./assets/wizytowka.jpeg";
import { motion } from "motion/react";
const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <motion.div
          className="informations-container"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
        >
          <h2>Skontaktuj się z nami</h2>
          <p>Masz pytania? Skontaktuj się telefonicznie lub mailowo.</p>
          <ul>
            <li>
              <span>NIP:</span> 6381707419
            </li>
            <li>
              <span>REGON:</span> 542338506
            </li>
            <li>
              <span>Adres:</span> Osiedle Powstańców Śląskich 9D/10, 44-240 Żory
            </li>
          </ul>
          <li>
            <a
              className="ghost"
              href="https://aplikacja.ceidg.gov.pl/ceidg/ceidg.public.ui/SearchDetails.aspx?Id=6279aca3-2be9-48d8-8091-1fc6f5178ab1"
            >
              Więcej informacji
            </a>
          </li>
        </motion.div>
        <motion.div
          className="image-container"
          initial={{ opacity: 0, x: 150 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
        >
          <img src={wizytowka} alt="wizytówka" />
        </motion.div>
      </div>
    </section>
  );
};
export { Contact };
