import Bio from "./components/Bio"
import Work from "./components/Work"
import { useState } from "react"
import LanguageSelector from "./components/utils/LanguageSelector"
import { useTranslation } from "react-i18next"
import TechStack from "./components/TechStack"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import NavDesktop from "./components/utils/NavDesktop"

function App() {
  const [show, setShow] = useState(false)
  const showMenu = () => {
    setShow(!show)
  }

  const { t } = useTranslation();

  return (
    <main className="">
      <aside className={`sm:hidden block p-4 h-fit border-r-4 border-neutral-800 w-1/2 z-50 ease-in duration-150 transition-all absolute top-0 ${show ? 'left-0' : '-left-96'}`}>
        <button onClick={() => showMenu()} className="flex font-lexend font-extrabold mb-2 ml-auto cursor-pointer">X</button>
        <ul className="flex flex-col gap-6 font-lexend font-medium text-sm text-neutral-800">
          <li>
            <a href="#projects" >
              {t("My Work")}
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/pablo-heidenreich/" target="_blank" rel="noopener noreferrer">
              {t("About Me")}
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/pablo-heidenreich/" target="_blank" rel="noopener noreferrer">
              {t("My Experience")}
            </a>
          </li>
          <li>
            <LanguageSelector />
          </li>
        </ul>
      </aside>
      <NavDesktop t={t} showMenu={showMenu} />
      <article className="overflow-hidden">
        <Bio />
        <Work />
        <TechStack />
        <Contact />
      </article>
      <Footer />
    </main>
  )
}

export default App
