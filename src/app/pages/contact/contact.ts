import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ContentService } from '../../core/content.service';
import { LocalizePipe } from '../../core/localize.pipe';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-contact',
  imports: [TranslatePipe, LocalizePipe, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly contact = inject(ContentService).contact;

  protected phoneHref(phone: string): string {
    return 'tel:' + phone.replace(/[^\d+]/g, '');
  }
}
