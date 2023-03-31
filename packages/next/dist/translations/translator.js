const locales = ["nl", "en"];
const dictionaries = {
    nl: () => import("./nl.json").then((module) => module.default),
    en: () => import("./en.json").then((module) => module.default),
};
const getTranslator = async (locale) => {
    const dictionary = await dictionaries[locale]();
    return (key, params) => {
        let translation = key
            .split(".")
            .reduce((obj, key) => obj && obj[key], dictionary);
        if (!translation) {
            return key;
        }
        if (params && Object.entries(params).length) {
            Object.entries(params).forEach(([key, value]) => {
                translation = translation.replace(`{{ ${key} }}`, String(value));
            });
        }
        return translation;
    };
};
export default getTranslator;
//# sourceMappingURL=translator.js.map