import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { User } from '../shared/api/api.types';
import { UsersStore } from '../shared/users.store';
import { UserPostsStore } from './user-posts.store';

export const userPostsResolver: ResolveFn<User> = async (route) => {
  const userId = Number(route.params['userId']);
  const user = inject(UsersStore)
    .users()
    .find(({ id }) => id === userId);

  if (!user) {
    return new RedirectCommand(inject(Router).parseUrl('/'));
  }

  await inject(UserPostsStore).loadPosts(userId);

  return user;
};
