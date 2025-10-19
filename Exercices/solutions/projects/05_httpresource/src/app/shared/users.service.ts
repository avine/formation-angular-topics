import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './api/api.types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users = httpResource<User[]>(() => 'https://jsonplaceholder.typicode.com/users');
}
