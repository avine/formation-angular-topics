import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { User } from '../shared/api/api.types';
import { UsersService } from '../shared/users.service';

export const userPostsResolver: ResolveFn<User> = async (route) => {
  const userId = Number(route.params['userId']);
  const user = inject(UsersService)
    .users.value()
    ?.find(({ id }) => id === userId);

  if (!user) {
    return new RedirectCommand(inject(Router).parseUrl('/'));
  }

  return user;
};
