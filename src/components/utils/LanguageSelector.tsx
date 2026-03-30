import { useState, useRef, useEffect } from 'react';
import i18n from 'i18next';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(i18n.language);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages = [
    { 
      code: 'es', 
      label: 'ES', 
      svg: (
        <svg width="20" height="14" viewBox="0 0 30 20" className="border border-black">
          <path d="M30 0H0v20h30V0z" fill="#FFDA44" />
          <path d="M30 0H0v6.6h30V0zM30 13.3H0V20h30v-6.7z" fill="#D80027" />
        </svg>
      )
    },
    { 
      code: 'en-US', 
      label: 'EN', 
      svg: (
        <svg width="20" height="14" viewBox="0 0 30 20" className="border border-black">
          <path d="M30 0H0v20h30V0z" fill="#F0F0F0" />
          <path d="M16.8 0h-3.7v8.1H0v3.7h13.1V20h3.7v-8.1H30V8.1h-13.2V0z" fill="#D80027" />
        </svg>
      )
    },
    { 
      code: 'it', 
      label: 'IT', 
      svg: (
        <svg width="20" height="14" viewBox="0 0 30 20" className="border border-black">
          <path d="M10 0H0v20h10V0z" fill="#6DA544" />
          <path d="M20 0H10v20h10V0z" fill="#F0F0F0" />
          <path d="M30 0H20v20h10V0z" fill="#D80027" />
        </svg>
      )
    }
  ];

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code);
    setSelected(code);
    setIsOpen(false);
  };

  const currentLang = languages.find(l => l.code === selected) || languages[0];

  return (
    <div className="relative font-lexend w-28" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between border-4 border-black p-2 transition-all 
          ${isOpen ? 'bg-secondary translate-x-[2px] translate-y-[2px] shadow-none' : 'bg-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'}`}
      >
        <div className="flex items-center gap-2">
          {currentLang.svg}
          <span className="font-black text-xs text-black">{currentLang.label}</span>
        </div>
        <span className={`text-[10px] text-black transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <ul className="absolute z-[60] mt-3 w-full bg-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] animate-in fade-in zoom-in duration-200">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => handleSelect(lang.code)}
                className="w-full flex items-center gap-3 p-3 text-white hover:bg-secondary hover:text-black font-black text-xs transition-colors border-b-2 border-white/10 last:border-b-0 uppercase italic tracking-tighter"
              >
                {lang.svg}
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;