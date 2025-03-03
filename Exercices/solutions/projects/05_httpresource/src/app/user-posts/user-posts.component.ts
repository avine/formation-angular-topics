import { httpResource } from '@angular/common/http';
import { Component, computed, input, signal, ViewEncapsulation } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { Post, User } from '../shared/api/api.types';
import { UserDetailsComponent } from './user-details/user-details.component';

@Component({
  selector: 'app-user-posts',
  imports: [TranslocoDirective, ButtonModule, CardModule, DialogModule, UserDetailsComponent],
  templateUrl: './user-posts.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UserPostsComponent {
  user = input.required<User>();

  posts = httpResource<Post[]>(() => ({
    url: 'https://jsonplaceholder.typicode.com/posts',
    params: { userId: this.user().id },
  }));

  selectedPostId = signal<number | undefined>(undefined);

  selectedPost = computed(() => {
    const postId = this.selectedPostId();
    return this.posts.value()?.find(({ id }) => id === postId);
  });
}
