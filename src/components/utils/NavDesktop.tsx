import LanguageSelector from './LanguageSelector';
import menuIcon from "../../assets/menu-icon.svg";

interface NavDesktopProps {
  t: (key: string) => string;
  showMenu: () => void;
}

const NavDesktop = ({ t, showMenu }: NavDesktopProps) => {
  return (
    <nav className='flex mt-6 xl:mx-12 mx-4 px-6 py-4 items-center justify-between bg-bg border-b border-divider z-99 top-4'>
        <p className="font-fraunces italic xl:text-2xl lg:text-lg text-base text-text">
          Pablo Heidenreich
        </p>
        <ul className="items-center font-sans xl:text-sm text-xs sm:flex hidden gap-8">
          <li className="relative group">
            <a href="#projects" className="text-text/70 hover:text-primary transition-colors duration-200">
              {t("My Work")}
            </a>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <a href="https://www.linkedin.com/in/pabloheid/" target="_blank" rel="noopener noreferrer" className="text-text/70 hover:text-primary transition-colors duration-200">
              {t("About Me")}
            </a>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <a href="https://www.linkedin.com/in/pablo-heidenreich/" target="_blank" rel="noopener noreferrer" className="text-text/70 hover:text-primary transition-colors duration-200">
              {t("My Experience")}
            </a>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full"></span>
          </li>

          <li className="border-l border-divider pl-6 h-8 flex items-center">
            <LanguageSelector />
          </li>
        </ul>
        <button 
          aria-label="Menu button" 
          onClick={showMenu} 
          className="burger sm:hidden h-12 w-12 flex items-center justify-center hover:opacity-70 transition-opacity"
        >
          <img src={menuIcon} alt="Menu" className="w-6 h-6" />
        </button>
      </nav>
  );
}

export default NavDesktop;