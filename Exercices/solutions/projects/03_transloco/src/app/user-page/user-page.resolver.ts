import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { User } from '../shared/api/api.types';
import { UserPostsService } from '../shared/user-posts.service';
import { UserService } from '../shared/user.service';

export const userPageResolver: ResolveFn<User> = async (route) => {
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
