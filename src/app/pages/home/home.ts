import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ContentService } from '../../core/content.service';
import { LanguageService } from '../../core/language.service';
import { Product } from '../../core/models';
import { DetailDialogService } from '../../shared/detail-dialog.service';
import { GalleryCard } from '../../shared/gallery-card';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TranslatePipe, GalleryCard, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly language = inject(LanguageService);
  private readonly dialog = inject(DetailDialogService);

  protected readonly products = inject(ContentService).products;

  protected scrollToProducts(): void {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  protected open(product: Product): void {
    this.dialog.open({
      title: this.language.localize(product.title),
      description: this.language.localize(product.description),
      images: product.images,
    });
  }
}
