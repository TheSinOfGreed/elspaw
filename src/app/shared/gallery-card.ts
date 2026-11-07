import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Icon } from './icon';

@Component({
  selector: 'app-gallery-card',
  imports: [Icon, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './gallery-card.html',
  styleUrl: './gallery-card.scss',
})
export class GalleryCard {
  readonly image = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
  readonly summary = input<string>();
  readonly tag = input<string>();
  readonly icon = input<string>();

  readonly opened = output<void>();
}
