import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withProps, withState } from '@ngrx/signals';
import { firstValueFrom } from 'rxjs';
import { ApiService } from './api/api.service';
import { User } from './api/api.types';

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [],
};

export const UsersStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withProps(() => ({
    _apiService: inject(ApiService),
  })),

  withMethods((store) => ({
    async loadUsers() {
      const users = await firstValueFrom(store._apiService.getUsers());
      patchState(store, (state) => ({ ...state, users }));
    },
  })),
);
