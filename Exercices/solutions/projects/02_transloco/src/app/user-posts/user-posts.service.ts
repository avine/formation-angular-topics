import { computed, inject, Injectable, signal } from '@angular/core';
import { map, tap } from 'rxjs';
import { ApiService } from '../shared/api/api.service';
import { Post } from '../shared/api/api.types';

@Injectable(/* not provided in root */)
export class UserPostsService {
  private apiService = inject(ApiService);

  private _posts = signal<Post[] | undefined>(undefined);
  posts = this._posts.asReadonly();

  selectedPostId = signal<number | undefined>(undefined);

  selectedPost = computed(() => {
    const postId = this.selectedPostId();
    return this.posts()?.find(({ id }) => id === postId);
  });

  loadPosts(userId: number) {
    return this.apiService.getUserPosts(userId).pipe(
      tap((posts) => this._posts.set(posts)),
      map(() => {}), // eslint-disable-line @typescript-eslint/no-empty-function
    );
  }
}
