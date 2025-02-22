import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { firstValueFrom } from 'rxjs';
import { ApiService, User } from './api';

interface UserState {
  users: User[];
  userId: number | undefined;
}

const initialState: UserState = {
  users: [],
  userId: undefined,
};

export const UserStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withComputed(({ users, userId }) => ({
    user: computed<User | undefined>(() => {
      const _userId = userId();
      return users().find(({ id }) => id === _userId);
    }),
  })),

  withMethods((store, apiService = inject(ApiService)) => ({
    async loadUsers() {
      const users = await firstValueFrom(apiService.getUsers());
      patchState(store, (state) => ({ ...state, users }));
    },

    setUserId(value: number | undefined) {
      patchState(store, (state) => {
        const userId = state.users.find(({ id }) => id === value)?.id ?? undefined;
        return { ...state, userId };
      });
    },
  })),
);
