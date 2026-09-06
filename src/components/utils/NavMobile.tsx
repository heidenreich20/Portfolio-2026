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
        className={`fixed inset-0 bg-text/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Panel del Menú */}
      <aside className={`fixed top-0 h-full w-[280px] bg-bg border-r border-divider z-[70] transition-all duration-300 ease-in-out ${isOpen ? 'left-0' : '-left-[300px]'}`}>
        <div className="p-6 flex flex-col h-full">
          <button 
            onClick={onClose} 
            aria-label={t("Close menu")}
            className="self-end text-text text-2xl w-10 h-10 hover:opacity-60 transition-opacity"
          >
            ×
          </button>

          <nav>
            <ul className="flex flex-col gap-8 font-fraunces text-2xl">
              <li className="border-b border-divider pb-3">
                <a href="#projects" onClick={onClose} className="hover:text-primary transition-colors block">
                  {t("My Work")}
                </a>
              </li>
              <li className="border-b border-divider pb-3">
                <a href="https://www.linkedin.com/in/pablo-heidenreich/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors block">
                  {t("About Me")}
                </a>
              </li>
              <li className="border-b border-divider pb-3">
                <a href="https://www.linkedin.com/in/pablo-heidenreich/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors block">
                  {t("My Experience")}
                </a>
              </li>
              <li className="mt-4">
                <p className="font-mono text-[11px] mb-2 text-text/50">{t("Language")}</p>
                <LanguageSelector />
              </li>
            </ul>
          </nav>

          <div className="mt-auto">
            <p className="font-mono text-[10px] text-text/40">
              Pablo Heidenreich · ed. 2026
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default NavMobile;