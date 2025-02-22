import { Component, inject, input, ViewEncapsulation } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { User } from '../shared/api/api.types';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserPostsStore } from './user-posts.store';

@Component({
  selector: 'app-user-posts',
  imports: [TranslocoDirective, ButtonModule, CardModule, DialogModule, UserDetailsComponent],
  templateUrl: './user-posts.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UserPostsComponent {
  protected userPostsStore = inject(UserPostsStore);

  user = input.required<User>();
}
