import { useState } from "react";
import { useTranslation } from "react-i18next";
import Bio from "./components/Bio";
import Work from "./components/Work";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import NavDesktop from "./components/utils/NavDesktop";
import NavMobile from "./components/utils/NavMobile"; // Nuevo import

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <main className="bg-surface min-h-screen selection:bg-black selection:text-primary">
      <NavMobile isOpen={isMenuOpen} onClose={toggleMenu} />
      <NavDesktop t={t} showMenu={toggleMenu} />
      <article className="overflow-hidden">
        <Bio />
        <Work />
        <TechStack />
        <Contact />
      </article>
      <Footer />
    </main>
  );
}

export default App;