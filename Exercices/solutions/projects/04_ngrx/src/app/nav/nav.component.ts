import { Component, computed, inject, ViewEncapsulation } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { UserStore } from '../shared/user.store';

@Component({
  selector: 'app-nav',
  host: { class: 'app-nav' },
  imports: [TranslocoDirective, MenuModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NavComponent {
  private userStore = inject(UserStore);

  items = computed<MenuItem[]>(() =>
    this.userStore.users().map(
      (user): MenuItem => ({
        label: user.name,
        routerLink: ['/user', user.id],
      }),
    ),
  );
}
