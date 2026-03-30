import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

interface NavMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavMobile = ({ isOpen, onClose }: NavMobileProps) => {
  const { t } = useTranslation();

  return (
    <>
      {/* Overlay oscuro cuando el menú está abierto */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Panel del Menú */}
      <aside className={`fixed top-0 h-full w-[280px] bg-secondary border-r-8 border-black z-[70] transition-all duration-300 ease-in-out shadow-[10px_0px_0px_0px_rgba(0,0,0,1)] ${isOpen ? 'left-0' : '-left-[300px]'}`}>
        <div className="p-6 flex flex-col h-full">
          <button 
            onClick={onClose} 
            className="self-end bg-black text-white w-10 h-10 font-black border-2 border-white mb-8 active:translate-y-1 transition-transform"
          >
            X
          </button>

          <nav>
            <ul className="flex flex-col gap-8 font-lexend font-black text-xl uppercase italic">
              <li className="border-b-4 border-black pb-2">
                <a href="#projects" onClick={onClose} className="hover:pl-2 transition-all block">
                  {t("My Work")}
                </a>
              </li>
              <li className="border-b-4 border-black pb-2">
                <a href="https://www.linkedin.com/in/pablo-heidenreich/" target="_blank" rel="noopener noreferrer" className="hover:pl-2 transition-all block">
                  {t("About Me")}
                </a>
              </li>
              <li className="border-b-4 border-black pb-2">
                <a href="https://www.linkedin.com/in/pablo-heidenreich/" target="_blank" rel="noopener noreferrer" className="hover:pl-2 transition-all block">
                  {t("My Experience")}
                </a>
              </li>
              <li className="mt-4">
                <p className="text-[10px] mb-2 opacity-50 NOT-ITALIC font-bold uppercase tracking-widest text-neutral-300">Settings // Language</p>
                <LanguageSelector />
              </li>
            </ul>
          </nav>

          <div className="mt-auto">
            <p className="text-[10px] font-black opacity-30 uppercase tracking-tighter">
              Pablo_Heidenreich_OS v2.0
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default NavMobile;