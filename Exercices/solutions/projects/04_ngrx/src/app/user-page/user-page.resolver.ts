import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { User } from '../shared/api/api.types';
import { UserPostsStore } from '../shared/user-posts.store';
import { UserStore } from '../shared/user.store';

export const userPageResolver: ResolveFn<User> = async (route) => {
  const userId = Number(route.params['userId']);
  const user = inject(UserStore)
    .users()
    .find(({ id }) => id === userId);

  if (!user) {
    return new RedirectCommand(inject(Router).parseUrl('/'));
  }

  await inject(UserPostsStore).loadPosts(userId);

  return user;
};
