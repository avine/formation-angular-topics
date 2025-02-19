import { Component, computed, DestroyRef, inject, signal, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
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

  protected posts = inject(UserPostsService).posts;

  protected selectedPostId = signal<number | undefined>(undefined);

  protected selectedPost = computed(() => {
    const postId = this.selectedPostId();
    return this.posts()?.find(({ id }) => id === postId);
  });

  constructor() {
    inject(DestroyRef).onDestroy(() => this.userService.setUserId(undefined));
  }
}
