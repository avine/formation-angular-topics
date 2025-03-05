# NgRx signals

<!-- .slide: class="page-title" -->



## Summary

<!-- .slide: class="toc" -->

<img src="./resources/ngrx.png" style="float: right; margin: 80px 250px 0 0" />

- [PrimeNG](#/1)
- [Transloco](#/2)
- **[NgRx signals](#/3)**
- [RxResource](#/4)
- [HttpResource](#/5)
- [RxJS](#/6)
- [In-depth resources](#/7)



## NgRx signals - Installation

> NgRx Signals is a standalone library that provides a reactive state management solution and a set of utilities for Angular Signals

- Install library

```shell
npm install @ngrx/signals
```



## NgRx signals - signalStore withState

- Create a store using the `signalStore` function
- Define initial state using `withState` function

```ts
import { signalStore, withState } from '@ngrx/signals';
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
);
```



## NgRx signals - withComputed

- Computed signals can be added to the store using the `withComputed` feature

```ts
import { computed } from '@angular/core';
import { signalStore, withComputed } from '@ngrx/signals';
import { Post } from '../shared/api/api.types';

export const UserPostsStore = signalStore(
  withComputed(({ posts, selectedPostId }) => ({
    selectedPost: computed<Post | undefined>(() => {
      const postId = selectedPostId();
      return posts()?.find(({ id }) => id === postId);
    }),
  })),
);
```



## NgRx signals - withProps

- Public and private properties can be added to the store using the `withProps` feature

- Define private members that cannot be accessed from outside the store by using the "`_`" prefix
  - note that this applies to all store features (such as `withState`, `withComputed`, ...)

```ts
import { inject } from '@angular/core';
import { signalStore, withProps } from '@ngrx/signals';
import { ApiService } from '../shared/api/api.service';

export const UserPostsStore = signalStore(
  withProps(() => ({
    _apiService: inject(ApiService),
  })),
);
```



## NgRx signals - withMethods

- Methods can be added to the store using the `withMethods` feature

- Use `patchState` function to update the store state

```ts
import { patchState, signalStore, withMethods } from '@ngrx/signals';
import { firstValueFrom } from 'rxjs';

export const UserPostsStore = signalStore(
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
```



## NgRx signals - Providing

- Signal store can be provided globally...

```ts
import { signalStore } from '@ngrx/signals';

export const UserPostsStore = signalStore(
  { providedIn: 'root' },
);
```

- ...or locally

```ts
import { Component } from '@angular/core';
import { UserPostsStore } from './user-posts/user-posts.store';

@Component({
  selector: 'app-root',
  providers: [UserPostsStore],
  template: `...`,
})
export class AppComponent {}
```



## NgRx signals - Injecting

- Consume the signal store in your components and services

```ts
import { Component, inject } from '@angular/core';
import { UserPostsStore } from './user-posts/user-posts.store';

@Component({
  selector: 'app-root',
  template: `
    @for (post of userPostsStore.posts(); track post.id) {

      <button (click)="userPostsStore.setPostId(post.id)"> {{ post.title }} </button>
    }
  `,
})
export class AppComponent {
  readonly userPostsStore = inject(UserPostsStore);
}
```



<!-- .slide: class="page-questions" -->



<!-- .slide: class="page-tp3" -->
