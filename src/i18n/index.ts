// Can be imported from a shared config
export const locales = ["en", "ru"] as const;
export type Locale = (typeof locales)[number];

