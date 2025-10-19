import { inject, Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ApiService } from './api/api.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiService = inject(ApiService);

  users = rxResource({ stream: () => this.apiService.getUsers() });
}
