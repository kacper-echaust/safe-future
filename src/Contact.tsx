import wizytowka from "./assets/wizytowka.jpeg";
const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="informations-container">
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
        </div>
        <div className="image-container">
          <img src={wizytowka} alt="wizytówka" />
        </div>
      </div>
    </section>
  );
};
export { Contact };
