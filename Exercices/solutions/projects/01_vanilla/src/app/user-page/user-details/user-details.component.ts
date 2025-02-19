import { Component, input, ViewEncapsulation } from '@angular/core';
import { User } from '../../shared/api';

@Component({
  selector: 'app-user-details',
  host: { class: 'app-user-details' },
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class UserDetailsComponent {
  user = input.required<User>();
}
