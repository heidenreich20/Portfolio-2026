import { useTranslation } from 'react-i18next';
import stack from '../../data/stack.json';

const TechStack = () => {
  const { t } = useTranslation();

  return (
    <section className="skills xl:mx-12 p-6 my-24 border-4 border-primary bg-[#1e1e1e] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
      
      <h2 className="font-lexend text-3xl sm:text-4xl xl:text-6xl font-extrabold text-primary mb-8 uppercase tracking-tighter">
        {t("MyKnowledge")}
      </h2>

      <article className="font-lexend">
        {/* Ajustamos a 5 columnas si usas la nueva organización del JSON */}
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {Object.entries(stack.techStack).map(([category, items]) => (
            <li key={category} className="flex flex-col">
              {/* Header de categoría con tu nuevo color rosa pastel */}
              <h3 className="font-black bg-secondary text-neutral-900 px-3 py-1 text-sm sm:text-base border-2 border-neutral-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4 self-start">
                {t(category)}
              </h3>
              
              <ul className="space-y-1">
                {items.map((item) => (
                  <li 
                    key={item} 
                    className="text-white text-sm sm:text-lg hover:text-primary transition-colors cursor-default border-l-2 border-primary/30 pl-3 py-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default TechStack;