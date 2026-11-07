import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg class="mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M4 12h40M8 12v28M24 12v28M40 12v28M8 22h32M8 31h32M4 41h8M20 41h8M36 41h8"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
      />
      <circle cx="4" cy="12" r="2" fill="currentColor" />
      <circle cx="44" cy="12" r="2" fill="currentColor" />
    </svg>
    <span class="text">
      <span class="name">ELSPAW</span>
      <span class="tagline">BALUSTRADY</span>
    </span>
  `,
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      color: var(--color-accent);
    }
    .mark {
      width: 40px;
      height: 40px;
    }
    .text {
      display: flex;
      flex-direction: column;
      line-height: 1.1;
      color: var(--color-text);
    }
    .name {
      font-size: 1.3rem;
      font-weight: 800;
      letter-spacing: 0.12em;
    }
    .tagline {
      font-size: 0.65rem;
      font-weight: 600;
      letter-spacing: 0.3em;
      color: var(--color-text-muted);
    }
  `,
})
export class Logo {}
