import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { UserPostsStore } from '../shared/user-posts.store';
import { UserStore } from '../shared/user.store';

export const userPageGuard: CanActivateFn = async (route) => {
  const userId = Number(route.params['userId']);

  const userStore = inject(UserStore);
  userStore.setUserId(userId);
  if (!userStore.userId()) {
    return new RedirectCommand(inject(Router).parseUrl('/'));
  }

  try {
    await inject(UserPostsStore).loadPosts(userId);
    return true;
  } catch {
    return false;
  }
};
