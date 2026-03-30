import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-wrapper mb-8 mx-4 xl:mx-12 p-8 bg-primary border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] z-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-black opacity-10 repeating-linear-gradient"></div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-left space-y-2">
          <p className="font-lexend font-black text-xs uppercase tracking-widest text-neutral-500">
            System_Output // 2026
          </p>
          <p className="font-lexend text-sm md:text-base font-bold text-neutral-500">
            © {t("Footer.Built with")}{" "}
            <a 
              className="bg-black text-primary px-2 py-0.5 hover:bg-secondary hover:text-black transition-colors" 
              href="https://es.react.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              REACT
            </a>{" "}
            {t("Footer.And")}{" "}
            <a 
              className="bg-black text-primary px-2 py-0.5 hover:bg-secondary hover:text-black transition-colors" 
              href="https://tailwindcss.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              TAILWIND
            </a>
          </p>
        </div>
        <div className="text-center md:text-right">
          <p className="font-lexend text-sm font-black uppercase italic tracking-tighter">
            {t("Footer.part1")}{" "}
            <a 
              className="text-xl block md:inline-block border-b-4 border-black hover:bg-black hover:text-primary transition-all px-1" 
              href="https://www.linkedin.com/in/pablo-heidenreich/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              PABLO HEIDENREICH
            </a>
          </p>
        </div>
      </div>
      <div className="mt-8 pt-4 border-t-2 border-black/20 flex justify-between items-center text-[10px] font-black uppercase opacity-50">
        <span>v2.0.25-stable</span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
          System_Online
        </span>
      </div>
    </footer>
  );
};

export default Footer;