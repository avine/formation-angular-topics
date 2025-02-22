import { inject, Injectable, signal } from '@angular/core';
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

  fetchAll() {
    return this.apiService.getUsers().pipe(
      tap((users) => this._users.set(users)),
      map(() => {}), // eslint-disable-line @typescript-eslint/no-empty-function
    );
  }
}
