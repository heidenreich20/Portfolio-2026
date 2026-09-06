import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="mb-8 pt-8 border-t border-divider">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-left space-y-2">
          <p className="font-mono text-xs text-text/50">
            Portfolio · 2026
          </p>
          <p className="text-sm md:text-base text-text/70">
            © {t("Footer.Built with")}{" "}
            <a
              className="text-primary hover:text-secondary underline underline-offset-2"
              href="https://es.react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>{" "}
            {t("Footer.And")}{" "}
            <a
              className="text-primary hover:text-secondary underline underline-offset-2"
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind
            </a>
          </p>
        </div>
        <div className="text-center md:text-right">
          <p className="font-fraunces italic text-sm text-text/70">
            {t("Footer.part1")}{" "}
            <a
              className="text-text hover:text-primary underline underline-offset-2"
              href="https://www.linkedin.com/in/pablo-heidenreich/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pablo Heidenreich
            </a>
          </p>
        </div>
      </div>
      <div className="mt-8 pt-4 border-t border-divider flex justify-between items-center text-[10px] font-mono text-text/40">
        <span>v2.0.25-stable</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></span>
          system_online
        </span>
      </div>
    </footer>
  );
};

export default Footer;