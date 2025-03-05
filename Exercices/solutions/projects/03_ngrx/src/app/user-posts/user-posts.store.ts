import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withProps, withState } from '@ngrx/signals';
import { firstValueFrom } from 'rxjs';
import { ApiService } from '../shared/api/api.service';
import { Post } from '../shared/api/api.types';

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

  withProps(() => ({
    _apiService: inject(ApiService),
  })),

  withMethods((store) => ({
    async loadPosts(userId: number) {
      const posts = await firstValueFrom(store._apiService.getUserPosts(userId));
      patchState(store, (state) => ({ ...state, posts }));
    },

    setPostId(selectedPostId: number | undefined) {
      patchState(store, (state) => ({ ...state, selectedPostId }));
    },
  })),
);
