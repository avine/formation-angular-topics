import { Component, inject, input, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { User } from '../shared/api/api.types';
import { UserPostsService } from '../shared/user-posts.service';
import { UserService } from '../shared/user.service';
import { UserDetailsComponent } from './user-details/user-details.component';

@Component({
  selector: 'app-user-page',
  imports: [ButtonModule, CardModule, DialogModule, UserDetailsComponent],
  templateUrl: './user-page.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UserPageComponent {
  protected userService = inject(UserService);

  protected userPostsService = inject(UserPostsService);

  user = input.required<User>();
}
