import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { firstValueFrom } from 'rxjs';
import { ApiService } from './api/api.service';
import { User } from './api/api.types';

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

export const UserStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withMethods((store, apiService = inject(ApiService)) => ({
    async loadUsers() {
      const users = await firstValueFrom(apiService.getUsers());
      patchState(store, (state) => ({ ...state, users }));
    },
  })),
);
