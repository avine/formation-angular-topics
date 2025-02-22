import { inject, Injectable, signal } from '@angular/core';
import { map, tap } from 'rxjs';
import { ApiService } from './api/api.service';
import { Post } from './api/api.types';

@Injectable({
  providedIn: 'root',
})
export class UserPostsService {
  private apiService = inject(ApiService);

  private _posts = signal<Post[] | undefined>(undefined);
  posts = this._posts.asReadonly();

  fetch(userId: number) {
    this.reset();
    return this.apiService.getUserPosts(userId).pipe(
      tap((posts) => this._posts.set(posts)),
      map(() => {}), // eslint-disable-line @typescript-eslint/no-empty-function
    );
  }

  reset() {
    this._posts.set(undefined);
  }
}
