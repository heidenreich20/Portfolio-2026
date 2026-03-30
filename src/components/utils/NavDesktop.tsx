import LanguageSelector from './LanguageSelector';
import menuIcon from "../../assets/menu-icon.svg";

interface NavDesktopProps {
  t: (key: string) => string;
  showMenu: () => void;
}

const NavDesktop = ({ t, showMenu }: NavDesktopProps) => {
  return (
    <nav className='flex mt-6 xl:mx-12 mx-4 px-6 py-4 items-center justify-between bg-primary border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-99 top-4'>
        <p className="font-lexend xl:text-2xl lg:text-lg text-base font-black tracking-tighter uppercase italic text-white">
          PABLO <span className="bg-black text-primary px-1">HEIDENREICH</span>
        </p>
        <ul className="font-lexend items-center font-bold xl:text-base lg:text-sm text-xs sm:flex hidden gap-8">
          <li className="relative group">
            <a href="#projects" className="hover:text-secondary transition-colors duration-200 flex items-center gap-1">
              <span className="text-[10px] opacity-50">01.</span> {t("My Work")}
            </a>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-black transition-all group-hover:w-full"></span>
          </li>
          
          <li className="relative group">
            <a href="https://www.linkedin.com/in/pabloheid/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-200 flex items-center gap-1">
              <span className="text-[10px] opacity-50">02.</span> {t("About Me")}
            </a>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-black transition-all group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <a href="https://www.linkedin.com/in/pablo-heidenreich/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-200 flex items-center gap-1">
              <span className="text-[10px] opacity-50">03.</span> {t("My Experience")}
            </a>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-black transition-all group-hover:w-full"></span>
          </li>

          <li className="border-l-4 border-black pl-6 h-8 flex items-center">
            <LanguageSelector />
          </li>
        </ul>
        <button 
          aria-label="Menu button" 
          onClick={showMenu} 
          className="burger sm:hidden h-12 w-12 flex items-center justify-center bg-secondary border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
        >
          <img src={menuIcon} alt="Menu" className="w-8 h-8 invert" />
        </button>
      </nav>
  );
}

export default NavDesktop;