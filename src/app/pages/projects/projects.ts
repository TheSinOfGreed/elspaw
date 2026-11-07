import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ContentService } from '../../core/content.service';
import { LanguageService } from '../../core/language.service';
import { Project, ProjectCategory } from '../../core/models';
import { DetailDialogService } from '../../shared/detail-dialog.service';
import { GalleryCard } from '../../shared/gallery-card';

type Filter = ProjectCategory | 'all';

@Component({
  selector: 'app-projects',
  imports: [TranslatePipe, GalleryCard],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly language = inject(LanguageService);
  private readonly translate = inject(TranslateService);
  private readonly dialog = inject(DetailDialogService);

  protected readonly filters: readonly Filter[] = ['all', 'public', 'company', 'private', 'abroad'];
  protected readonly active = signal<Filter>('all');

  private readonly projects = inject(ContentService).projects;

  protected readonly visible = computed(() => {
    const filter = this.active();
    return this.projects().filter((project) => filter === 'all' || project.category === filter);
  });

  protected select(filter: Filter): void {
    this.active.set(filter);
  }

  protected categoryLabel(project: Project): string {
    this.language.current();
    return this.translate.instant(`projects.filters.${project.category}`);
  }

  protected open(project: Project): void {
    this.dialog.open({
      title: this.language.localize(project.title),
      subtitle: this.language.localize(project.location),
      tag: this.categoryLabel(project),
      description: this.language.localize(project.description),
      images: project.images,
    });
  }
}
