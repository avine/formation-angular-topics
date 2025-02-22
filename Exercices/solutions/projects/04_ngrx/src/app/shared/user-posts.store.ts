import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { firstValueFrom } from 'rxjs';
import { ApiService } from './api/api.service';
import { Post } from './api/api.types';

interface UserPostsState {
  posts: Post[] | undefined;
  selectedPostId: number | undefined;
}

const initialState: UserPostsState = {
  posts: undefined,
  selectedPostId: undefined,
};

export const UserPostsStore = signalStore(
  withState(initialState),

  withComputed(({ posts, selectedPostId }) => ({
    selectedPost: computed<Post | undefined>(() => {
      const postId = selectedPostId();
      return posts()?.find(({ id }) => id === postId);
    }),
  })),

  withMethods((store, apiService = inject(ApiService)) => ({
    async loadPosts(userId: number) {
      const posts = await firstValueFrom(apiService.getUserPosts(userId));
      patchState(store, (state) => ({ ...state, posts }));
    },

    setPostId(selectedPostId: number | undefined) {
      patchState(store, (state) => ({ ...state, selectedPostId }));
    },
  })),
);
