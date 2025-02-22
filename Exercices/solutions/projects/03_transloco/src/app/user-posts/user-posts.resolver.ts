import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { User } from '../shared/api/api.types';
import { UserService } from '../shared/user.service';
import { UserPostsService } from './user-posts.service';

export const userPostsResolver: ResolveFn<User> = async (route) => {
  const userId = Number(route.params['userId']);
  const user = inject(UserService)
    .users()
    .find(({ id }) => id === userId);

  if (!user) {
    return new RedirectCommand(inject(Router).parseUrl('/'));
  }

  await firstValueFrom(inject(UserPostsService).loadPosts(userId));

  return user;
};
