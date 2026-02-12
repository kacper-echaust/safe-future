import { AboutMe } from "./AboutMe";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Services } from "./Services";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export { App };
