import { Component, inject, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-nav',
  host: { class: 'app-nav' },
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NavComponent {
  protected userService = inject(UserService);
}
