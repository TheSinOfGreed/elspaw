import { ChangeDetectionStrategy, Component, HostListener, computed, inject, signal } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { DetailItem } from '../core/models';
import { Icon } from './icon';

@Component({
  selector: 'app-detail-dialog',
  imports: [Icon, RouterLink, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './detail-dialog.html',
  styleUrl: './detail-dialog.scss',
})
export class DetailDialog {
  protected readonly item = inject<DetailItem>(DIALOG_DATA);
  private readonly ref = inject<DialogRef<void>>(DialogRef);

  protected readonly index = signal(0);
  protected readonly current = computed(() => this.item.images[this.index()]);
  protected readonly hasMany = this.item.images.length > 1;

  protected close(): void {
    this.ref.close();
  }

  @HostListener('document:keydown.arrowright')
  protected next(): void {
    this.go(1);
  }

  @HostListener('document:keydown.arrowleft')
  protected previous(): void {
    this.go(-1);
  }

  protected select(position: number): void {
    this.index.set(position);
  }

  private go(step: number): void {
    const total = this.item.images.length;
    this.index.update((value) => (value + step + total) % total);
  }
}
