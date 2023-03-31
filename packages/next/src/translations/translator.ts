const locales = ["nl", "en"] as const;
type ValidLocale = typeof locales[number];

const dictionaries: Record<ValidLocale, any> = {
  nl: () => import("./nl.json").then((module) => module.default),
  en: () => import("./en.json").then((module) => module.default),
} as const;

const getTranslator = async (locale: ValidLocale) => {
  const dictionary = await dictionaries[locale]();

  return (key: string, params?: { [key: string]: string | number }) => {
    let translation = key
      .split(".")
      .reduce((obj, key) => obj && obj[key], dictionary);

    if (!translation) {
      return key;
    }

    if (params && Object.entries(params).length) {
      Object.entries(params).forEach(([key, value]) => {
        translation = translation!.replace(`{{ ${key} }}`, String(value));
      });
    }

    return translation;
  };
};

export default getTranslator;
export type { ValidLocale };
