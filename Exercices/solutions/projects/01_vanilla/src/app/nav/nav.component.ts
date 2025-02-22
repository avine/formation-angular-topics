import { Component, inject, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-nav',
  host: { class: 'app-nav' },
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NavComponent {
  protected usersService = inject(UsersService);
}
