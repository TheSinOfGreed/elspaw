import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { ContactData, Product, Project } from './models';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly http = inject(HttpClient);

  readonly products = toSignal(this.http.get<Product[]>('data/products.json'), {
    initialValue: [] as Product[],
  });

  readonly projects = toSignal(this.http.get<Project[]>('data/projects.json'), {
    initialValue: [] as Project[],
  });

  readonly contact = toSignal(this.http.get<ContactData>('data/contacts.json'), {
    initialValue: null,
  });
}
