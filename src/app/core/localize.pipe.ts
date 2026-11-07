import { Pipe, PipeTransform, inject } from '@angular/core';
import { LanguageService } from './language.service';
import { Localized } from './models';

@Pipe({ name: 'localize', pure: false })
export class LocalizePipe implements PipeTransform {
  private readonly language = inject(LanguageService);

  transform(value: Localized | undefined): string {
    return this.language.localize(value);
  }
}
