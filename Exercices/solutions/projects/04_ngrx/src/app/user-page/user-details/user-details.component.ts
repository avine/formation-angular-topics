import { Component, input, ViewEncapsulation } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { User } from '../../shared/api/api.types';

@Component({
  selector: 'app-user-details',
  host: { class: 'app-user-details' },
  imports: [TranslocoDirective],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class UserDetailsComponent {
  user = input.required<User>();
}
