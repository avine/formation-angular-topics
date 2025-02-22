import { Component, computed, inject, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-nav',
  host: { class: 'app-nav' },
  imports: [MenuModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NavComponent {
  private userService = inject(UserService);

  items = computed<MenuItem[]>(() =>
    this.userService.users().map(
      (user): MenuItem => ({
        label: user.name,
        routerLink: ['/user', user.id],
      }),
    ),
  );
}
