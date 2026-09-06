import { useTranslation } from 'react-i18next';
import stack from '../../data/stack.json';

const TechStack = () => {
  const { t } = useTranslation();

  return (
    <section className="xl:mx-12 mx-4 my-24">
      <h2 className="font-fraunces text-3xl sm:text-4xl xl:text-5xl font-semibold text-text mb-10">
        {t("MyKnowledge")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 border-t border-divider pt-8">
        {Object.entries(stack.techStack).map(([category, items]) => (
          <div key={category} className="flex flex-col gap-3">
            <h3 className="font-mono text-xs text-primary">
              {t(category)}
            </h3>
            <ul className="flex flex-col gap-1.5">
              {items.map((item) => (
                <li key={item} className="text-text/80 text-sm sm:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;