import { Injectable, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { DetailItem } from '../core/models';
import { DetailDialog } from './detail-dialog';

@Injectable({ providedIn: 'root' })
export class DetailDialogService {
  private readonly dialog = inject(Dialog);

  open(item: DetailItem): void {
    this.dialog.open(DetailDialog, {
      data: item,
      backdropClass: 'dialog-backdrop',
      autoFocus: 'dialog',
      restoreFocus: true,
      width: '1100px',
      maxWidth: 'calc(100vw - 32px)',
    });
  }
}
