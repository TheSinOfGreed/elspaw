import { ChangeDetectionStrategy, Component, ElementRef, HostListener, computed, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../core/language.service';
import { Icon } from '../shared/icon';
import { Logo } from '../shared/logo';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, TranslatePipe, Icon, Logo],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected readonly language = inject(LanguageService);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly menuOpen = signal(false);
  protected readonly languageOpen = signal(false);

  protected readonly currentLanguage = computed(
    () => this.language.languages.find((item) => item.code === this.language.current())!,
  );

  protected readonly links = [
    { path: '/', label: 'nav.home', exact: true },
    { path: '/realizacje', label: 'nav.projects', exact: false },
    { path: '/kontakt', label: 'nav.contact', exact: false },
  ];

  constructor() {
    inject(Router).events.subscribe(() => {
      this.menuOpen.set(false);
      this.languageOpen.set(false);
    });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected toggleLanguage(): void {
    this.languageOpen.update((open) => !open);
  }

  protected selectLanguage(code: string): void {
    this.language.use(code);
    this.languageOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  protected onDocumentClick(event: MouseEvent): void {
    if (!this.host.nativeElement.querySelector('.language')?.contains(event.target as Node)) {
      this.languageOpen.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.languageOpen.set(false);
  }
}
