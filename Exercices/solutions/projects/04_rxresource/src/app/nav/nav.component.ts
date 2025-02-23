import { Component, computed, inject, ViewEncapsulation } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-nav',
  host: { class: 'app-nav' },
  imports: [TranslocoDirective, MenuModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NavComponent {
  private usersService = inject(UsersService);

  items = computed<MenuItem[] | undefined>(() =>
    this.usersService.users.value()?.map(
      (user): MenuItem => ({
        label: user.name,
        routerLink: ['/user', user.id],
      }),
    ),
  );
}
