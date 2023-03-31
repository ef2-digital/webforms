declare const locales: readonly ["nl", "en"];
type ValidLocale = typeof locales[number];
declare const getTranslator: (locale: ValidLocale) => Promise<(key: string, params?: {
    [key: string]: string | number;
}) => any>;
export default getTranslator;
export type { ValidLocale };
