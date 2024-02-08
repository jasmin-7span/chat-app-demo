import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export type Locale = keyof typeof dictionaries
// const dictionaries = {
//   en: () => import('../app/[lang]/dictionaries/en.json').then((module) => module.default),
//   cn: () => import('../app/[lang]/dictionaries/cn.json').then((module) => module.default),
// }
 
// export const getDictionary = async (locale: Locale) => dictionaries[locale]()
