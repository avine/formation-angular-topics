import { Component, inject, input, ViewEncapsulation } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { User } from '../shared/api/api.types';
import { UserPostsStore } from '../shared/user-posts.store';
import { UserDetailsComponent } from './user-details/user-details.component';

@Component({
  selector: 'app-user-page',
  imports: [TranslocoDirective, ButtonModule, CardModule, DialogModule, UserDetailsComponent],
  templateUrl: './user-page.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UserPageComponent {
  protected userPostsStore = inject(UserPostsStore);

  user = input.required<User>();
}
