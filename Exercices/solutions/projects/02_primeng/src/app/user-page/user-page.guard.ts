import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { UserPostsService } from '../shared/user-posts.service';
import { UserService } from '../shared/user.service';

export const userPageGuard: CanActivateFn = (route) => {
  const userId = Number(route.params['userId']);

  const success = inject(UserService).setUserId(userId);
  if (!success) {
    return new RedirectCommand(inject(Router).parseUrl('/'));
  }

  return inject(UserPostsService)
    .fetch(userId)
    .pipe(
      map(() => true),
      catchError(() => of(false)),
    );
};
