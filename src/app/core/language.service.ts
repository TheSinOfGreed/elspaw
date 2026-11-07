import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DEFAULT_LANGUAGE, LANGUAGES } from './languages';
import { Localized } from './models';

const STORAGE_KEY = 'elspaw.language';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly translate = inject(TranslateService);

  readonly languages = LANGUAGES;
  readonly current = signal(DEFAULT_LANGUAGE);

  constructor() {
    this.use(this.initialLanguage());
  }

  use(code: string): void {
    if (!this.languages.some((language) => language.code === code)) {
      return;
    }
    this.current.set(code);
    this.translate.use(code);
    document.documentElement.lang = code;
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      return;
    }
  }

  localize(value: Localized | undefined): string {
    if (!value) {
      return '';
    }
    return value[this.current()] ?? value[DEFAULT_LANGUAGE] ?? Object.values(value)[0] ?? '';
  }

  private initialLanguage(): string {
    const supported = (code: string | null | undefined) =>
      this.languages.find((language) => language.code === code)?.code;
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }
    return (
      supported(stored) ?? supported(navigator.language.slice(0, 2).toLowerCase()) ?? DEFAULT_LANGUAGE
    );
  }
}
