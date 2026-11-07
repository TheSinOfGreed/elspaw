export interface Language {
  code: string;
  label: string;
  name: string;
  flag: string;
}

export const LANGUAGES: readonly Language[] = [
  { code: 'pl', label: 'PL', name: 'Polski', flag: 'flags/pl.svg' },
  { code: 'en', label: 'ENG', name: 'English', flag: 'flags/gb.svg' },
  { code: 'de', label: 'DE', name: 'Deutsch', flag: 'flags/de.svg' },
  { code: 'fr', label: 'FR', name: 'Français', flag: 'flags/fr.svg' },
];

export const DEFAULT_LANGUAGE = 'pl';
