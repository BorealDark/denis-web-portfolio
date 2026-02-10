import { es } from "./es";

export type Locale = "es";

const dictionaries = {
  es
} as const;

export function t(locale: Locale = "es") {
  return dictionaries[locale];
}

