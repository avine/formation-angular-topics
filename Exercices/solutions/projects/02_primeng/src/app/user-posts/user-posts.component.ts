import { Component, inject, input, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { User } from '../shared/api/api.types';
import { UserService } from '../shared/user.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserPostsService } from './user-posts.service';

@Component({
  selector: 'app-user-posts',
  imports: [ButtonModule, CardModule, DialogModule, UserDetailsComponent],
  templateUrl: './user-posts.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UserPostsComponent {
  protected userService = inject(UserService);

  protected userPostsService = inject(UserPostsService);

  user = input.required<User>();
}
