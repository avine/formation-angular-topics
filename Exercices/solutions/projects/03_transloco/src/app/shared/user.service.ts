import { computed, inject, Injectable, signal } from '@angular/core';
import { map, tap } from 'rxjs';
import { ApiService } from './api/api.service';
import { User } from './api/api.types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiService = inject(ApiService);

  private _users = signal<User[]>([]); // Note: ne need to handle `undefined` state (users are set in `provideAppInitializer`)
  users = this._users.asReadonly();

  private _userId = signal<number | undefined>(undefined);
  userId = this._userId.asReadonly();

  user = computed(() => {
    const userId = this._userId();
    return this.users().find(({ id }) => id === userId);
  });

  fetchAll() {
    return this.apiService.getUsers().pipe(
      tap((users) => this._users.set(users)),
      map(() => {}), // eslint-disable-line @typescript-eslint/no-empty-function
    );
  }

  setUserId(value: number | undefined) {
    const userId = this.users().find(({ id }) => id === value)?.id ?? undefined;

    this._userId.set(userId);

    return userId !== undefined;
  }
}
