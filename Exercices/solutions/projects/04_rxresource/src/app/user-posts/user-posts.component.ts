import { Component, computed, inject, input, signal, ViewEncapsulation } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { TranslocoDirective } from '@jsverse/transloco';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ApiService } from '../shared/api/api.service';
import { User } from '../shared/api/api.types';
import { UserDetailsComponent } from './user-details/user-details.component';

@Component({
  selector: 'app-user-posts',
  imports: [TranslocoDirective, ButtonModule, CardModule, DialogModule, UserDetailsComponent],
  templateUrl: './user-posts.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UserPostsComponent {
  protected apiService = inject(ApiService);

  user = input.required<User>();

  posts = rxResource({
    params: () => this.user().id,
    stream: ({ params: userId }) => this.apiService.getUserPosts(userId),
  });

  selectedPostId = signal<number | undefined>(undefined);

  selectedPost = computed(() => {
    const postId = this.selectedPostId();
    return this.posts.value()?.find(({ id }) => id === postId);
  });
}
