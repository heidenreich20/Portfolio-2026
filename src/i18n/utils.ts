import { ui, defaultLang, languages, type Lang } from "./ui";

export { languages, defaultLang };
export type { Lang };

/** Get the active language from an Astro `Astro.url`. */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

/**
 * Returns a `t(key)` function scoped to one language. Supports dot paths
 * for nested keys (e.g. "Title.part1", "Footer.Built with") to mirror the
 * old i18next usage in the React components. Falls back to the default
 * language, then to the raw key, if a translation is missing.
 */
export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const resolve = (l: Lang) =>
      key.split(".").reduce<unknown>((acc, part) => {
        if (acc && typeof acc === "object" && part in acc) {
          return (acc as Record<string, unknown>)[part];
        }
        return undefined;
      }, ui[l]);

    const value = resolve(lang) ?? resolve(defaultLang) ?? key;
    return typeof value === "string" ? value : key;
  };
}
